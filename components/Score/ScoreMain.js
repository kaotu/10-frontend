import React from 'react'
import axios from 'axios'
import styled, { injectGlobal } from 'styled-components'
import {api_url} from './api'
import FlipMove from 'react-flip-move'



const Wrapper = styled.div`
  background: url(/static/image/scoreboard/bar.png) no-repeat left bottom #cbece8;
  background-size: cover;
  min-height:100vh;
  width:100%;
  overflow: hidden;
  @media (max-width: 576px) {
    background-position: right bottom;
  }
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
  margin-top: -24%;
  position: absolute;
  left: 4%;
  top: 37%;
  width: 68%;
  @media (max-width: 576px) {
    left: -49%;
    top: 13%;
    width: 174%;
  }
`
const WippoAvatar = styled.div`
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
const BImg = styled.img`
  height: auto;
  width: 37%;
  margin-right: 1%;
  margin-left: 1%;
  @media (max-width: 720px) {
    width: 52%;
  }
`
const CamphubImg = styled.img`
  height: auto;
  width: 20%;
  margin-right: 1%;
  margin-left: 1%;
  @media (max-width: 720px) {
    width: 45%;
  }
`
const Yipinsoi = styled.img`
  height:auto;
  width: 20%;
  margin-right; 1%;
  margin-left: 1%;
  @media (max-width: 720px){
    width:35%;
  }
`
const SponsorWrapper = styled.div`
  background-color:#fff;
  padding-top:1em;
  padding-bottom:1em;
  border-radius:6px;
`

const Gable = styled.img`
  height: auto;
  width: 13%;
  margin-right: 1%;
  margin-left: 1%;
  @media (max-width: 720px) {
    width: 35%;
  }
`
const Lactasoy = styled.img`
  height:auto;
  width: 13%;
  margin-right; 1%;
  margin-left: 2%;
  @media (max-width: 720px){
    width:33%;
  }
`
const Dsc = styled.img`
  height:auto;
  width: 13%;
  margin-right; 1%;
  margin-left: 1%;
  @media (max-width: 720px){
    width:35%;
  }
`

const Masita = styled.img`
  height:auto;
  width: 13%;
  margin-right; 1%;
  margin-left: 1%;
  @media (max-width: 720px){
    width:35%;
  }
`

const Aware = styled.img`
  height:auto;
  width: 13%;
  margin-right; 1%;
  margin-left: 2%;
  @media (max-width: 720px){
    width:33%;
  }
`
const ThaibevImg = styled.img`
  height: auto;
  width: 13%;
  margin-right: 1%;
  margin-left: 1%;
  @media (max-width: 720px) {
    width: 35%;
  }
`
const Dekd = styled.img`
  height: auto;
  width: 13%;
  margin-right: 1%;
  margin-left: 2%;
  @media (max-width: 720px) {
    width: 35%;
  }
`
const Bow = styled.img`
  height: auto;
  width: 13%;
  margin-right: 1%;
  margin-left: 1%;
  @media (max-width: 720px) {
    width: 35%;
    margin-bottom:2%;
  }
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
          <div className='row my-4'>
            <SponsorWrapper className="col-5 align-self-center">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <BImg src='/static/image/sponsor/bangmod.png' className='pb-4 mx-3' />
                    <CamphubImg src='/static/image/sponsor/Camphub.png' className='pb-4 mx-3' />
                    <Yipinsoi src='/static/image/sponsor/yipinsoi.png' className='pb-4 mx-3' />
                  </div>
                  <div className="col-12">
                    <p className='text-center'>
                      <Gable src='/static/image/sponsor/stream_it_logo.png' className='pb-2 mx-2' />
                      <Gable src='/static/image/sponsor/gable.png' className='pb-2 mx-2' />
                      <Dsc src='/static/image/sponsor/dcs.png' className='pb-2 mx-2' />
                      <Aware src='/static/image/sponsor/aware_logotagline_rgb.png' className='pb-2 mx-2' />
                      <Lactasoy src='/static/image/sponsor/lactasoy.png' className='pb-2 mx-2' />
                    </p>
                  </div>
                  <div className="col-12">
                    <p className="text-center">
                      <Gable src="/static/image/sponsor/Premier Marketing.png" className='pb-2 ' />
                      <ThaibevImg src='/static/image/sponsor/ThaiBev.png' className='pb-2 ' />
                      <Masita src='/static/image/sponsor/Masita.png' className='pb-2 ' />
                      <Dekd src="/static/image/sponsor/เด็กดี.gif" className='pb-2 ' />
                      <Bow src="/static/image/sponsor/โบว์เบเกอรี่เฮ้าส์.png" className='pb-2 ' />
                    </p>
                  </div>
                </div>
            </SponsorWrapper>
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
                              <div className='col-2'>
                                <Trophy src={`/static/image/scoreboard/trophy${item.trophy}.svg`} />
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
        </div>

      </Wrapper>
    )
  }
}

export default ScoreMain

