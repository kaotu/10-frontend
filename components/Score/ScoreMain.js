import React from 'react'
import axios from 'axios'
import Styled, { injectGlobal } from 'styled-components'
import {api_url} from './api'

injectGlobal`
  body{
    background: url(/static/image/scoreboard/bar.png) no-repeat left bottom #effde6;
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
`
const Circle = Styled.div`
  border-radius:50%;
  width:65px;
  height:65px;
  background-color:#888;
  color:#fff;
  position:absolute;
  left: -18%;
  top: -85%;
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
const Box = Styled.div`
  background-color:#fff;
  border-radius:5px;
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
        <div className='row my-4 justify-content-center'>
           <Box className='col-7'>
            <h3 className='text-center'>ScoreBoard</h3>
            {/* {
              this.state.isEqualAll === true ? (
                this.state.ranking.map((item) => {
                  return <ListBox className='col-lg-7'>
                            <div className='row'>
                              <div className='col-2'>
                                <Circle>10</Circle>
                              </div>
                              <div className='col-8'>
                                {item.display_name}
                              </div>
                              <div className='col-2'>
                                {item.score}
                              </div>
                            </div>
                        </ListBox>
                })
              ):('')
            } */}
           </Box>
          {/* <div className='col-12'>
            <h1 className='text-center'>WIP Camp #10 Ranking</h1>
          </div> */}
          <div className='row justify-content-center'>

          </div>
        </div>
      </div>
    )
  }
}

export default ScoreMain

// this.state.ranking.map((rank, index)=> <div key={index}>{rank.ranking}</div>)
