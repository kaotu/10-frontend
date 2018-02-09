import React from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "react-scroll"
import {compose,lifecycle,withState} from 'recompose'

const FadeOut = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const Dukdik = keyframes`
  0% {
    bottom: 10vh;
  }
  50% {
    bottom: 12vh;
  }
  100% {
    bottom: 10vh;
  }
`
const Bg = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  top: -400vh;
`
const LogoWip = styled.img`
  position: relative;
  z-index: 8;
  width: 100%;
  margin-top: 8vh;
  /* margin-left: -10vw; */
  animation-name: ${FadeOut};
  animation-duration: 2s;
  @media (min-width:801px) {
    width: 48%;
  }
`
const LogoSIT = styled.img`
  position: relative;
  z-index: 8;
  width: 50%;
  margin-top: 0vh;
  filter: drop-shadow( 2px 3px 3px rgba(0,0,0,0.75) );
  /* margin-left: 15vw; */
  animation-name: ${FadeOut};
  animation-duration: 2s;
  @media (min-width:801px) {
    width: 30%;
  }
  @media (min-width:1024px) {
    width: 20%;
  }
`
const Font = styled.h6`
  position: absolute;
  z-index: 8;
  bottom: 2vh;
  left: 50%;
  transform: translate(-50%, 0%);
`
const Scroll = styled.img`
  position: absolute;
  z-index: 8;
  width: 4vw;
  left: 48vw;
  bottom: 10vh;
  animation: ${Dukdik} 1s linear infinite;
  cursor: pointer;
`

const Logo = props => (
  <Bg className="text-center">
    <div className="row">
      <div className="col-12">
        <LogoWip src="/static/image/logofinals.png" alt="WIP Camp #10" />
      </div>
      <div className="col-12 img-responsive">
        <LogoSIT src="/static/image/LogoCana.svg" alt="WIP Camp #10,คณะเทคโนโลยีสารสนเทศ,มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี"/>
      </div>
    </div>
    <Link to="what" smooth={true}>
      <Scroll src={props.check.scroll} />
    </Link>
    <Font>เลื่อนลงข้างล่าง</Font>
  </Bg>
)

export default compose(
  withState('check','setCheck',''),
  lifecycle({
    componentDidMount() {
      let theme = JSON.parse(window.localStorage.getItem("color"))
      this.props.setCheck(theme)
    }
    
  })
)(Logo)
