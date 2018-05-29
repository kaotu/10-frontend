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
  background-color:#fff;
  box-shadow: rgba(81, 77, 92, 0.09) 0px 5px 15px 3px;
  padding:0.4em;
  border-radius:5px;
  margin-top:20px;
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
  margin: 0;
  font-size: 2em;
  color:#000;
`
const Box = Styled.div`
  background-color:#fff;
  border-radius:5px;
`
const Trophy = Styled.img`
  margin-top:-24%;
  position:absolute;
  left: -56%;
  top: 4%;
  width: 150%;
`
const WippoAvatar = Styled.div`
  border-radius: 50%;
  background: url(/static/image/scoreboard/wippo/1.svg) no-repeat;
  height: 50px;
  width: 50px;
  background-size: cover;
  background-position: -5px -1px;
  // box-shadow: rgba(81,77,92,0.09) 0px 5px 15px 3px;
`
const FlavorDisplay = Styled.p`
  color:#000;
  margin:0;
  font-size:1.5em;
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
           <div className='col-7'>
            <h3 className='text-center'>ScoreBoard</h3>
            <div className='row justify-content-center'>
              <ListBox className='col-10'>
                <div className='row'>
                  <div className='col-1'>
                    <Trophy src='/static/image/scoreboard/trophy1.svg' />
                  </div>
                  <div className='col-2'>
                    <WippoAvatar />
                  </div>
                  <div className='col-6 align-self-center'>
                    <FlavorDisplay>ขนมไข่</FlavorDisplay>
                  </div>
                  <div className="col-3 align-self-center">
                    <Score>1000</Score>
                  </div>
                </div>
              </ListBox>
            </div>
            <div className='row justify-content-center'>
              <ListBox className='col-10'>
                <div className='row'>
                  <div className='col-1'>
                    <Trophy src='/static/image/scoreboard/trophy2.svg' />
                  </div>
                  <div className='col-2'>
                    <WippoAvatar />
                  </div>
                  <div className='col-6 align-self-center'>
                    <FlavorDisplay>ขนมไข่</FlavorDisplay>
                  </div>
                  <div className="col-3 align-self-center">
                    <Score>1000</Score>
                  </div>
                </div>
              </ListBox>
            </div>
            <div className='row justify-content-center'>
              <ListBox className='col-10'>
                <div className='row'>
                  <div className='col-1'>
                    <Trophy src='/static/image/scoreboard/trophy3.svg' />
                  </div>
                  <div className='col-2'>
                    <WippoAvatar />
                  </div>
                  <div className='col-6 align-self-center'>
                    <FlavorDisplay>ขนมไข่</FlavorDisplay>
                  </div>
                  <div className="col-3 align-self-center">
                    <Score>1000</Score>
                  </div>
                </div>
              </ListBox>
            </div>
            <div className='row justify-content-center'>
              <ListBox className='col-10'>
                <div className='row'>
                  <div className='col-1'>
                    <Trophy src='/static/image/scoreboard/trophy4.svg' />
                  </div>
                  <div className='col-2'>
                    <WippoAvatar />
                  </div>
                  <div className='col-6 align-self-center'>
                    <FlavorDisplay>ขนมไข่</FlavorDisplay>
                  </div>
                  <div className="col-3 align-self-center">
                    <Score>1000</Score>
                  </div>
                </div>
              </ListBox>
            </div>
            <div className='row justify-content-center'>
              <ListBox className='col-10'>
                <div className='row'>
                  <div className='col-1'>
                    <Trophy src='/static/image/scoreboard/trophy1.svg' />
                  </div>
                  <div className='col-2'>
                    <WippoAvatar />
                  </div>
                  <div className='col-6 align-self-center'>
                    <FlavorDisplay>ขนมไข่</FlavorDisplay>
                  </div>
                  <div className="col-3 align-self-center">
                    <Score>1000</Score>
                  </div>
                </div>
              </ListBox>
            </div>
            <div className='row justify-content-center'>
              <ListBox className='col-10'>
                <div className='row'>
                  <div className='col-1'>
                    <Trophy src='/static/image/scoreboard/trophy1.svg' />
                  </div>
                  <div className='col-2'>
                    <WippoAvatar />
                  </div>
                  <div className='col-6 align-self-center'>
                    <FlavorDisplay>ขนมไข่</FlavorDisplay>
                  </div>
                  <div className="col-3 align-self-center">
                    <Score>1000</Score>
                  </div>
                </div>
              </ListBox>
            </div>
            <div className='row justify-content-center'>
              <ListBox className='col-10'>
                <div className='row'>
                  <div className='col-1'>
                    <Trophy src='/static/image/scoreboard/trophy1.svg' />
                  </div>
                  <div className='col-2'>
                    <WippoAvatar />
                  </div>
                  <div className='col-6 align-self-center'>
                    <FlavorDisplay>ขนมไข่</FlavorDisplay>
                  </div>
                  <div className="col-3 align-self-center">
                    <Score>1000</Score>
                  </div>
                </div>
              </ListBox>
            </div>
            <div className='row justify-content-center'>
              <ListBox className='col-10'>
                <div className='row'>
                  <div className='col-1'>
                    <Trophy src='/static/image/scoreboard/trophy1.svg' />
                  </div>
                  <div className='col-2'>
                    <WippoAvatar />
                  </div>
                  <div className='col-6 align-self-center'>
                    <FlavorDisplay>ขนมไข่</FlavorDisplay>
                  </div>
                  <div className="col-3 align-self-center">
                    <Score>1000</Score>
                  </div>
                </div>
              </ListBox>
            </div>
            <div className='row justify-content-center'>
              <ListBox className='col-10'>
                <div className='row'>
                  <div className='col-1'>
                    <Trophy src='/static/image/scoreboard/trophy1.svg' />
                  </div>
                  <div className='col-2'>
                    <WippoAvatar />
                  </div>
                  <div className='col-6 align-self-center'>
                    <FlavorDisplay>ขนมไข่</FlavorDisplay>
                  </div>
                  <div className="col-3 align-self-center">
                    <Score>1000</Score>
                  </div>
                </div>
              </ListBox>
            </div>
            <div className='row justify-content-center'>
              <ListBox className='col-10'>
                <div className='row'>
                  <div className='col-1'>
                    <Trophy src='/static/image/scoreboard/trophy1.svg' />
                  </div>
                  <div className='col-2'>
                    <WippoAvatar />
                  </div>
                  <div className='col-6 align-self-center'>
                    <FlavorDisplay>ขนมไข่</FlavorDisplay>
                  </div>
                  <div className="col-3 align-self-center">
                    <Score>1000</Score>
                  </div>
                </div>
              </ListBox>
            </div>
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
           </div>
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
