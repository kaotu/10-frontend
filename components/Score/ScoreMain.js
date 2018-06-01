import React from 'react'
import axios from 'axios'
import styled, { injectGlobal } from 'styled-components'
import {api_url} from './api'
import FlipMove from 'react-flip-move'

import { AllSponsor } from '../Sponsor/index'

const WarpperSponsor = styled.div`
  background: #fff;
  border-radius: 3%;
  padding-bottom: .7em;
  position: absolute;
  left: 2.3em;
  top: 6.8em;
  width: 33vw;
  .row.d-flex {
    padding-bottom: .5em;
  }
  .img-responsive {
    margin-top: -1.5em;
  }
`

const Wrapper = styled.div`
  position: relative;
  background-size: 150%;
  background: rgba(130, 21, 21, 0.47843137254901963);
  background-position: 130% bottom;
  background-repeat: no-repeat;
`
const Background = styled.div`
  background: linear-gradient(to top,rgba(0, 0, 0, 0.8),rgb(0,68,138));
  min-height:100vh;
  width:100%;
  overflow: hidden;
`
const Heartbox = styled.img`
  position: absolute;
  width: 165%;
  bottom: -4em;
  right: 0;
  z-index: -1;
`
const Mountain = styled.img`
  position: absolute;
  width: 70%;
  bottom: 0;
  z-index: -1;
  right: 0;
  opacity: 0.6;
`
const ListBox = styled.div`
  background-color:#fff;
  box-shadow: rgba(81, 77, 92, 0.09) 0px 5px 15px 3px;
  border-radius:5px;
  margin-top:15px;
`
const ScoreWrapper = styled.div`
  background-color: ${props => props.bgColor};
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  padding-top: 5px;
  padding-bottom: 5px;
`
const Score = styled.p`
  margin: 0;
  font-size: 2em;
  color: #fff;
  text-shadow: 1px 1px 4px #000;
  @media (max-width: 375px) {
    font-size:1.3em;
  }
  @media (min-width: 376px and max-width:576px) {
    font-size:1.7em;
  }
`
const Box = styled.div`
  background-color:#fff;
  border-radius:5px;
`
const Trophy = styled.img`
  margin-top: -15%;
  position: absolute;
  left: 4%;
  top: 37%;
  width: 40%;
  @media (max-width: 576px) {
    left: -49%;
    top: 13%;
    width: 174%;
  }
`
const WippoAvatar = styled.div`
  background: url(/static/image/scoreboard/wippo/${props => props.id}.svg) no-repeat;
  height: 50px;
  width: 50px;
  background-size: cover;
  background-position: ${props => props.bgPosition};
  @media (max-width: 375px) {
    height: 35px;
    width: 35px;
  }
`
const FlavorDisplay = styled.p`
  color:#000;
  margin:0;
  font-size:1.5em;
  @media (max-width: 375px) {
    font-size:1em;
  }
  @media (max-width: 576px) {
    font-size:1.3em;
  }
`
const Title = styled.h2`
  color:#000;
  font-weight:bold;
`

class ScoreMain extends React.Component {
  
  state = {
    ranking : [],
    isEqualAll : false,
    bgPosition : ['-5px -1px','-5px -1px','4px 1px','5px 4px','6px 3px','-4px -16px','7px -16px','3px -19px','3px -9px','-3px -7px']
  }

  componentDidMount = async () => {
    this.fetch()
    setInterval( this.fetch, 30000);
    
  }
  
  fetch = async() => {
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
      ranking: rankFormatted
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
      <Wrapper>
        <Background className='container-fluid'>
          <div className='row my-4'>
            <div className="col-12 col-lg-4">
              <WarpperSponsor>
                <AllSponsor />
              </WarpperSponsor>
            </div>
            <div className='col-12 col-lg-8'>
              <Title className='text-center text-white mt-5'>อันดับเหล่าทัพ</Title>
                <FlipMove className="flip-wrapper" enterAnimation={{
                  from: {
                    transform: 'rotateX(180deg)',
                    opacity: 0.1,
                  },
                  to: {
                    transform: '',
                  },
                }}
                leaveAnimation={{
                  from: {
                      transform: '',
                  },
                  to: {
                    transform: 'rotateX(-120deg)',
                    opacity: 0.1,
                  },
                }} staggerDelayBy={150}>
                  {
                    ranking.map((item,index)=>{
                      return <div className="row justify-content-center" key={`${index}${item.id}`} >
                          <ListBox className='col-10'>
                            <div className='row'>
                              <div className='col-2'>
                                <Trophy src={`/static/image/scoreboard/trophy${item.ranking < 4 ? item.ranking : 4}.svg`} />
                              </div>
                              <div className='col-2 align-self-center'>
                                <WippoAvatar id={item.id} bgPosition={this.state.bgPosition[item.id-1]} />
                              </div>
                              <div className='col-5 col-sm-5 align-self-center'>
                                <FlavorDisplay>{item.display_name}</FlavorDisplay>
                              </div>
                              <ScoreWrapper bgColor={item.label_color} className="col-4 col-sm-3">
                                <Score >{item.score}</Score>
                              </ScoreWrapper>
                            </div>
                          </ListBox>
                        </div>
                    })
                  }
                </FlipMove>
            </div>
          </div>
          <Mountain src='/static/image/BgrightFAQs.png' />
          <Heartbox src='/static/image/Bgheartbox.png' />
        </Background>

      </Wrapper>
    )
  }
}

export default ScoreMain

