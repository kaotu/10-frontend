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
    animation: MoveUp 1s linear;
    animation-delay: 0s;
    @keyframes MoveUp {
        0% {
            bottom: -100vh;
        }
        100% {
            bottom: 0vh;
        }
    }
`
const MountainLeft = styled.img`
    position:absolute;
    z-index: 1;
    left:0vw;
    bottom:-5vh;
    width:100vw;
    animation: MoveRight 1s linear;
    animation-delay: 0s;
    @keyframes MoveRight {
        0% {
            left: -50vw;
        }
        100% {
            left: -5vw;
        }
    }
`
const MountainCenter = styled.img`
  position:absolute;
  z-index: 2;
  left:23vw;
  bottom:0vh;
  height: 35vw;
  animation: MoveUp 1s linear;
  animation-delay: 0s;
  @keyframes MoveUp {
    0% {
      bottom: -35vh;
    }
    100% {
      bottom: 0vh;
    }
  }
`
const MountainRight = styled.img`
    position:absolute;
    z-index: 3;
    right:0vw;
    bottom:-15vh;
    width:100vw;
    animation: MoveLeft 1s linear;
    animation-delay: 0s;
    @keyframes MoveLeft {
        0% {
            right: -50vw;
        }
        100% {
            right: -15vw;
        }
    }
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
`
const Monkey = styled.img`
  position:absolute;
  z-index: 4;
  bottom:0vh;
  height: 65vh;
  cursor:pointer;
  left:10vw;
  @media(max-width: 720px){
    height: 20vh;
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
`
const Giant = styled.img`
  position:absolute;
  z-index: 4;
  bottom:0vh;
  height: 65vh;
  cursor:pointer;
  right:10vw;
  @media(max-width: 720px){
    height: 20vh;
  }
`
const CloudBottom = styled.img`
    position:absolute;
    z-index: 5;
    left:0vw;
    bottom:-24vh;
    width: 120vw;
    animation: MoveUp 1s linear;
    animation-delay: 0s;
    @keyframes MoveUp {
        0% {
            bottom: -100vh;
            
        }
        100% {
            bottom: -24vh;
        }
    }
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
const Scrolldown = styled.img`
    position:absolute;
    z-index: 7;
    width:3vw;
    bottom:5vh;
    left:50vw;
    cursor:pointer;  
`
const Background = () => (
    <div>
        <CloudBack src='/static/image/CloudBack.svg'/>
        <MountainLeft src='/static/image/MountainLeft.svg'/>
        <MountainCenter src='/static/image/moutain.svg'/>
        <MountainRight src='/static/image/MountainRight.svg'/>
        <ChooseMonkey src='/static/image/double-arrow-down-128.png'/>
        <Monkey onClick={() => check.setCheck(false) } src='/static/image/mongkey-Home.svg'/>
        <ChooseGiant src='/static/image/double-arrow-down-128.png'/>
        <Giant onClick={() => check.setCheck(true) }src='/static/image/giantwithcloud.svg'/>
        <CloudBottom src='/static/image/CloudBottom.svg'/>
        <LogoWip src="/static/image/WIPlogo.svg" />
        <LogoSIT src='/static/image/ตรามอ.png'/>
        <Scrolldown src='/static/image/ScrollDown.png'/>
    </div>
)

export default Background
