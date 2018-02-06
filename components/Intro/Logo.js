import React from 'react'
import styled, { keyframes } from 'styled-components'

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
    margin-top: 45vh;
  }
  50% {
    margin-top: 43vh;
  }
  100% {
    margin-top: 45vh;
  }
`
const Bg = styled.div`
  height : 100vh;
`
const LogoWip = styled.img`
  position : relative;
  z-index: 6;
  width: 120%;
  margin-top: 10vh;
  margin-left: -10vw;
  animation-name: ${FadeOut};
  animation-duration: 2s;
  @media (min-width: 412px) {
    width: 100%;
    margin-left: 0;
  }
  @media (min-width: 576px) {
    width: 100%;
    margin-top: 5vh;
  }
  @media (min-width: 1024px) {
    width: 50%;
    margin-top: 5vh;
  }
`
const LogoSIT = styled.img`
  position : relative;
  z-index: 6;
  width: 70%;
  margin-top: 3vh;
  animation-name: ${FadeOut};
  animation-duration: 2s;
  @media (min-width: 412px) {
    width: 50%;
    margin-left: 0;
  }
  @media (min-width: 576px) {
    width: 50%;
    margin-top: 0;
  }
  @media (min-width: 1024px) {
    width: 20%;
    margin-top: 5vh;
  }
`
const Font = styled.h4`
  position : relative;
  z-index: 6;
  margin-top: 1vh;
`
const Scroll = styled.img`
  position : relative;
  z-index: 6;
  width : 10vw;
  margin-top: 45vh;
  animation: ${Dukdik} 1s linear infinite;
`

const Logo = () => (
  <Bg className="container-fluid">
    <div className="row">
      <div className="col-12 text-center">
        <LogoWip src="/static/image/logofinals.svg" alt="WIP Camp #10" />
      </div>
      <div className="col-12 text-center">
        <LogoSIT src='/static/image/LogoSIT.png'alt="WIP Camp #10,คณะเทคโนโลยีสารสนเทศ,มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี" />
    {/* <Scroll src='/static/image/ScrollMongkey.png'/>
    <Font>เลื่อนลงข้างล่าง</Font> */}
      </div>
    </div>
  </Bg>
)

export default Logo