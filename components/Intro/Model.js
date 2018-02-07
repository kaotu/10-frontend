import React from 'react'
import styled, { keyframes } from 'styled-components'
import { compose, lifecycle, withState } from 'recompose'

const Bg = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    top: -300vh;
`
const MoveUpDown = keyframes`
  0% {
    top:0vh;
  }
  50% {
    top:2vh;
  }
  100% {
    top:0vh;
  }
`
const Monkey = styled.img`
    position : relative;
    left: 0vw;
    bottom: 0vh;
    height : 40vh;
    cursor: pointer;
    transition: all 550ms ease-in-out;
    &:hover{
      transform: scale(1.2);
    }
    @media (min-width: 576px) {
      height : 50vh;
    }
`
const ScrollMonkey = styled.img`
    position: relative;
    width:5vw;
    animation: ${MoveUpDown} 1s linear infinite;
    cursor:pointer; 
    top:0;
`
const Giant = styled.img`
    position : relative;
    right: 0vw;
    bottom: 0vh;
    height : 40vh;
    cursor: pointer;
    transition: all 550ms ease-in-out;
    &:hover{
      transform: scale(1.4);
    }
    @media (min-width: 576px) {
      height : 50vh;
      right: 0vw;
    }
`
const ScrollGiant = styled.img`
    position: relative;
    width:5vw;
    animation: ${MoveUpDown} 1s linear infinite;
    cursor:pointer; 
    top:0;
`
const Div = styled.div`
    position : absolute;
    width: 100vw;
    z-index:5;
    bottom: 10vh;
    @media (min-width: 576px) {
      bottom: 5vh;
    }
`

const setTeam = (team) => {
  window.localStorage.setItem('team', team)
  window.location.reload()
}

const ModelIndex = props => (
  <Bg className="">
    <Div>
      <div className="col-12">
        <div className="row ">
          <div className="col-6 mt-auto text-center">
            <ScrollMonkey src='/static/image/right-thin-arrowheads (1).png' />
          </div>
          <div className="col-6 mt-auto text-center">
            <ScrollGiant src='/static/image/right-thin-arrowheads.png' />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row ">
          <div className="col-6 mt-auto text-center">
            <Monkey onClick={() => setTeam('ling')} src='/static/image/Moling.svg' />
          </div>
          <div className="col-6 mt-auto text-center">
            <Giant onClick={() => setTeam('yak')} src='/static/image/Moyak.svg' />
          </div>
        </div>
      </div>
    </Div>
  </Bg>
)
export default compose(
  withState('check', 'setCheck', true),
  withState('team', 'setTeam', ''),
  lifecycle({
    componentDidMount() {
      let team = window.localStorage.getItem("team")
      const teamyak = {
        what: 'linear-gradient(to top , rgba(0,0,0,.65),rgba(255, 51, 0,1))',
        when: 'linear-gradient(to top , rgba(0,0,0,1),rgba(255, 51, 0,1),rgba(0,0,0,1))',
        nav: '#384742',
        navhov: '#002d40',
        iconl: '../../static/image/yakscore-new-01.svg',
        iconr: '../../static/image/hanumanscore-new-01.svg',
        scroll: '../../static/image/ScrollYak.png',
        cloud: '../../static/image/เมฆแดง.png',
        faqs: '#FBFFC9',
        index: 'linear-gradient(to top , rgba(0,0,0,.65),rgba(255, 51, 0,1))',
        sponsor: 'linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65),rgba(200,51,55,1))',
        icontran: '../../static/image/when/yakscore.png'
      }
      const teammongkey = {
        what: 'linear-gradient(to top, rgba(0,0,0,.65), rgba(119, 169, 220, 1),rgba(119, 169, 220, 1))',
        when: 'linear-gradient(to top, rgba(0,0,0,.65),rgba(119, 169, 220, 1),rgba(0,0,0,.65))',
        nav: '#002d40',
        navhov: '#e53c35',
        iconl: '../../static/image/hanumanscore-new-01.svg',
        iconr: '../../static/image/yakscore-new-01.svg',
        scroll: '../../static/image/ScrollMongkey.png',
        cloud: '../../static/image/CloudBack.svg',
        faqs: '#CCFFFF',
        index: 'linear-gradient(#6791BC, #B7CFEB,#6791BC)',
        sponsor: 'linear-gradient(to top,rgba(0,0,0,.3),#B7CFEB,#B7CFEB,#B7CFEB)',
        icontran: '../../static/image/when/hanumanscore.png'
      }
      team == 'yak' ?
        window.localStorage.setItem("color", JSON.stringify(teamyak)) :
        window.localStorage.setItem("color", JSON.stringify(teammongkey))
      let theme = JSON.parse(window.localStorage.getItem("color"))
      this.props.setTeam(theme)
    }
  })
)(ModelIndex)

