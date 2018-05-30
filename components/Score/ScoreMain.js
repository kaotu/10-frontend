import React from 'react'
import axios from 'axios'
import Styled, { injectGlobal } from 'styled-components'
import {api_url} from './api'
import FlipMove from 'react-flip-move'



const Wrapper = Styled.div`
  background: url(/static/image/scoreboard/bar.png) no-repeat left bottom #608c86;
  background-size: cover;
  min-height:100vh;
  width:100%;
  overflow: hidden;
  @media (max-width: 576px) {
    background-position: right bottom;
  }
`
const ListBox = Styled.div`
  background-color:#fff;
  box-shadow: rgba(81, 77, 92, 0.09) 0px 5px 15px 3px;
  padding:0.4em;
  border-radius:5px;
  margin-top:15px;
`

const Score = Styled.p`
  margin: 0;
  font-size: 2em;
  color: ${props => props.color};
  @media (max-width: 375px) {
    font-size:1.3em;
  }
  @media (min-width: 376px and max-width:576px) {
    font-size:1.7em;
  }
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
  @media (max-width: 576px) {
    left: -49%;
    top: 13%;
    width: 174%;
  }
`
const WippoAvatar = Styled.div`
  border-radius: 50%;
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
const FlavorDisplay = Styled.p`
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
const Title = Styled.h2`
  color:#fff;
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
      ranking: await this.setTrophy(rankFormatted)
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

  setTrophy = (rankFormatted) => {
    return rankFormatted.map((item)=>{
      if(item.ranking === 1){
        return {...item, trophy:1}
      }else if(item.ranking === 2){
        return {...item, trophy:2}
      }else if(item.ranking === 3){
        return {...item, trophy:3}
      }else{
        return {...item, trophy:4}
      }
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
        <div className='container'>
          <div className='row my-4 justify-content-center'>
            <div className='col-12 col-sm-7'>
              <Title className='text-center'>ScoreBoard</Title>
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
                              <div className='col-1'>
                                <Trophy src={`/static/image/scoreboard/trophy${item.trophy}.svg`} />
                              </div>
                              <div className='col-2'>
                                <WippoAvatar id={item.id} bgPosition={this.state.bgPosition[item.id-1]} />
                              </div>
                              <div className='col-5 col-sm-6 align-self-center'>
                                <FlavorDisplay>{item.display_name}</FlavorDisplay>
                              </div>
                              <div className="col-4 col-sm-3 align-self-center">
                                <Score color={item.label_color}>{item.score}</Score>
                              </div>
                            </div>
                          </ListBox>
                        </div>
                    })
                  }
                </FlipMove>
            </div>
          </div>
        </div>

      </Wrapper>
    )
  }
}

export default ScoreMain

