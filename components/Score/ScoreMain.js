import React from 'react'
import axios from 'axios'
import Styled, { injectGlobal } from 'styled-components'
import {api_url} from './api'

injectGlobal`
  body{
    background: url(/static/image/scoreboard/bg-2.png) no-repeat center center fixed;
    background-size: cover;
    height: 100%;
    overflow: hidden;
  }
`
const ListBox = Styled.div`
  background-color:#ccc;
  padding:1em;
  border-radius:5px;
  margin-top:1em;
  margin-bottom:2em;
  padding-left:5em;
`
const Circle = Styled.div`
  border-radius:50%;
  width:65px;
  height:65px;
  background-color:#888;
  color:#fff;
  position:absolute;
  left:0;
  top:12%;
  padding: 0.75em 1.25em;
  font-size: 1.4em;
`
const Score = Styled.p`
  right: 8%;
  top: 19%;
  margin: 0;
  font-size: 2em;
  position:absolute;
  @media(max-width:576px){
    right:10%;
  }
`
class ScoreMain extends React.Component {
  
  state = {
    ranking : [],
    isEqualAll : false
  }

  componentDidMount = async () => {
    let { data : { data: rawRanking } } = await axios({
      method: 'get',
      url: `${api_url}/scores`
    })
    await rawRanking.sort((a, b) => {
      return a.score < b.score
    })
    let rankUnFormatted = await this.setRanking(rawRanking)
    let rankFormatted = await this.formatRanking(rankUnFormatted)
    this.setState({
      ranking: rankFormatted,
      isEqualAll: this.checkIsEqualAll(rankFormatted)
    })
  }

  formatRanking = async (rankUnFormatted) => {
    return rankUnFormatted.map((rank, i) => {
      let nextPosition = rankUnFormatted[i+1]
      if (nextPosition) {
        if(rank.score === nextPosition.score) {
          nextPosition.ranking = rank.ranking
        } else {
          nextPosition.ranking = rank.ranking + 1
        }
      }
      return rank
    })
  }

  setRanking = async (ranking) => {
    return ranking.map((rank) => {
      return { ...rank , ranking: 1 }
    })
  }

  checkIsEqualAll = (rankFormatted) => {
    return rankFormatted.every((rank) => {
      return rank.ranking === 1
    })
  }

  render () {
    let { ranking } = this.state
    return (
      <div className='container'>
        <div className='row my-4'>
          <div className='col-12'>
            <h1 className='text-center'>WIP Camp #10 Ranking</h1>
          </div>
          <div className='row justify-content-center'>
          {
            this.state.isEqualAll === true ? (
              this.state.ranking.map((item) => {
                return <div className='col-7'>
                          <ListBox><Circle>{item.ranking}</Circle>{item.display_name}<Score>{item.score}</Score></ListBox>
                       </div>
              })
            ):('')
          }

          </div>
        </div>
      </div>
    )
  }
}

export default ScoreMain

// this.state.ranking.map((rank, index)=> <div key={index}>{rank.ranking}</div>)
