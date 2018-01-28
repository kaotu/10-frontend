import react from 'react'
import styled from 'styled-components'
import {compose, withState} from 'recompose'

import {yak,mongkey} from '../Core/Color'

const state = withState('check','setCheck',false)

const setCheck = (callback, data) =>(
  callback(data ? yak : mongkey)
)

const CloudBack = styled.img`
    position:absolute;
    z-index: 0;
    left:0vw;
    bottom:-20vh;
    width: 100vw;
    animation: MoveUp 30s linear;
    animation-delay: 0s;
    @keyframes MoveUp {
        0% {
            left: -100vw;
        }
        100% {
            left: 0vh;
        }
    }
`
const MountainLeft = styled.img`
    position:absolute;
    z-index: 1;
    left:0vw;
    bottom:-5vh;
    width:100vw;
    @media (max-width:720px) {
      width:200vw;
      z-index: 1;
    }
    // animation: MoveRight 1s linear;
    // animation-delay: 0s;
    // @keyframes MoveRight {
    //     0% {
    //         left: -50vw;
    //     }
    //     100% {
    //         left: -5vw;
    //     }
    // }
`
const MountainCenter = styled.img`
  position:absolute;
  z-index: 2;
  left:18vw;
  bottom:0vh;
  height: 35vw;
  @media (max-width:720px) {
    height:80vw;
    margin-bottom: 0vw;
    left:-20vw;
  }
  @media (max-width:560px) {
    height:100vw;
    margin-bottom: 0vw;
    left:-40vw;
  }
  @media (max-width:420px) {
    height:120vw;
    margin-bottom: 0vw;
    left:-58vw;
  }
  // animation: MoveUp 1s linear;
  // animation-delay: 0s;
  // @keyframes MoveUp {
  //   0% {
  //     bottom: -35vh;
  //   }
  //   100% {
  //     bottom: 0vh;
  //   }
  // }
`
const MountainRight = styled.img`
    position:absolute;
    z-index: 3;
    right:0vw;
    bottom:-15vh;
    width:100vw;
    @media (max-width:720px) {
      width:200vw;
      z-index: 1;
    }
    // animation: MoveLeft 1s linear;
    // animation-delay: 0s;
    // @keyframes MoveLeft {
    //     0% {
    //         right: -50vw;
    //     }
    //     100% {
    //         right: -15vw;
    //     }
    // }
`
const ChooseMonkey = styled.img`
  position: absolute;
  z-index: 4;
  top: 30vh;
  left: 13vw;
  width:3vw;
  animation: MoveUpDown 1s linear infinite;
  cursor:pointer; 
  @keyframes MoveUpDown {
    0% {
      top: 30vh;
    }
    50% {
      top: 28vh;
    }
    100% {
      top: 30vh;
    }
  }
  @media(max-width: 720px){
    margin-top : 55vw;
  }
`
const Monkey = styled.img`
  position:absolute;
  z-index: 4;
  bottom:0vh;
  height: 65vh;
  cursor:pointer;
  left:10vw;
  @media(max-width: 720px){
    height: 40vh;
  }
  @media(max-width: 560px){
    height: 35vh;
  }
  @media(max-width: 420px){
    height: 30vh;
  }
`
const ChooseGiant = styled.img`
  position: absolute;
  z-index: 4;
  top: 30vh;
  right: 13vw;
  width:3vw;
  animation: MoveUpDown 1s linear infinite;
  cursor:pointer; 
  @media(max-width: 720px){
    margin-top : 55vw;
  }
`
const Giant = styled.img`
  position:absolute;
  z-index: 4;
  bottom:0vh;
  height: 65vh;
  cursor:pointer;
  right:10vw;
  @media(max-width: 720px){
    height: 42vh;
  }
  @media(max-width: 560px){
    height: 36vh;
  }
  @media(max-width: 420px){
    height: 30vh;
  }
`
const CloudBottom = styled.img`
    position:absolute;
    z-index: 5;
    left:0vw;
    bottom:-24vh;
    width: 120vw;
    // animation: MoveUp 1s linear;
    // animation-delay: 0s;
    // @keyframes MoveUp {
    //     0% {
    //         bottom: -100vh;
            
    //     }
    //     100% {
    //         bottom: -24vh;
    //     }
    // }
`
const LogoWip = styled.img`
  width: 50%;
  position: absolute;
  z-index: 6;
  left: 25vw;
  top:3vh;
  animation-name: FadeOut;
  animation-duration: 2s;
  @media(max-width: 720px){
    width: 90%;
	  left: 5vw;
  }
  @keyframes FadeOut {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
const LogoSIT = styled.img`
  width: 20%;
  position: absolute;
  z-index: 6;
  left: 40vw;
  top:40vh;
  animation-name: FadeOut;
  animation-duration: 2s;
  @media(max-width: 720px){
    width: 90%;
    left: 5vw;
    top:23vh;
  }
`
const Scrolldown = styled.img`
    position:absolute;
    z-index: 7;
    width:3vw;
    bottom:5vh;
    left:48vw;
    animation: Dukdik 1s linear infinite;
    cursor:pointer;  
    @keyframes Dukdik {
      0% {
        bottom:5vh;
      }
      50% {
        bottom:7vh;
      }
      100% {
        bottom:5vh;
      }
    }
`
const Background = (props) => (
    <div>
        <CloudBack src='/static/image/CloudBack.svg'/>
        <MountainLeft src='/static/image/MountainLeft.svg'/>
        <MountainCenter src='/static/image/mountaincenter.svg'/>
        <MountainRight src='/static/image/MountainRight.svg'/>
        <ChooseMonkey src='/static/image/double-arrow-down-128.png'/>
        <Monkey onClick={() => check.setCheck(false) } src='/static/image/mongkey-Home.svg'/>
        <ChooseGiant src='/static/image/double-arrow-down-128.png'/>
        <Giant onClick={() => check.setCheck(true) }src='/static/image/giantwithcloud.svg'/>
        <CloudBottom src='/static/image/CloudBottom.svg'/>
        <LogoWip src="/static/image/WIPlogo.svg" />
        <LogoSIT src='/static/image/LogoSIT.png'/>
        <Scrolldown src='/static/image/ScrollDown.png'/>
    </div>
)

const BackgroundCompose = compose (state)(Background)

export default BackgroundCompose
