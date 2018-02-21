import React from 'react'
import styled, { keyframes } from 'styled-components'
import { compose, lifecycle, withState } from 'recompose'

import { teamyak, teammongkey } from '../Core/Color'

const Bg = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  top: -200vh;
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
  height : 35vh;
  cursor: pointer;
  transition: all 550ms ease-in-out;
  &:hover{
    height : 40vh;
    @media (min-width: 576px) {
      height : 50vh;
    }
  }
  @media (min-width: 576px) {
    height : 45vh;
  }
  @media (max-width: 450px) {
    left: 50%;
    transform: translate(-50%, 0%);
  }
`
const ScrollMonkey = styled.img`
  position: relative;
  width:5vw;
  animation: ${MoveUpDown} 1s linear infinite;
  cursor:pointer; 
  top:0;
  @media (min-width: 1024px) {
    width: 3vw;
  }
`
const Giant = styled.img`
  position : relative;
  bottom: 0vh;
  height : 40vh;
  cursor: pointer;
  transition: all 550ms ease-in-out;
  &:hover{
    height : 45vh;
    @media (min-width: 576px) {
      height : 55vh;
    }
  }
  @media (min-width: 576px) {
    height : 50vh;
  }
  @media (max-width: 450px) {
    left: 50%;
    transform: translate(-50%, 0%);
  }
`
const ScrollGiant = styled.img`
    position: relative;
    width:5vw;
    animation: ${MoveUpDown} 1s linear infinite;
    cursor:pointer; 
    top:0;
    @media (min-width: 1024px) {
      width: 3vw;
    }
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
            <ScrollMonkey src='/static/image/right-thin-arrowheads.png' />
          </div>
          <div className="col-6 mt-auto text-center">
            <ScrollGiant src='/static/image/right-thin-arrowheads.png' />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row ">
          <div className="col-6 mt-auto text-center">
            <Monkey onClick={() => props.setColor(teammongkey)} src='/static/image/hanuman.svg' />
          </div>
          <div className="col-6 mt-auto text-center">
            <Giant onClick={() => props.setColor(teamyak)} src='/static/image/tossakan.svg' />
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

      team == 'yak' ?
        window.localStorage.setItem("color", JSON.stringify(teamyak)) :
        window.localStorage.setItem("color", JSON.stringify(teammongkey))
      let theme = JSON.parse(window.localStorage.getItem("color"))
      this.props.setTeam(theme)
    }
  })
)(ModelIndex)

