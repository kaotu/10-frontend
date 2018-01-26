import react from 'react'
import styled from 'styled-components'


const PositionMountain1 = styled.img`
  position:absolute;
  z-index: 1;
  left:0px;
  bottom:-16vh;
  width: 40vw;
  left: 50vw;
`
const PositionMountain2 = styled.img`
  position:absolute;
  z-index: 3;
  left:0px;
  bottom:-16vh;
  width: 60vw;
  left: 15vw;
`

const PositionCloud1 = styled.img`
  position:absolute;
  z-index: 2;
  left:0px;
  bottom:-16vh;
  width:100vw;
`
const PositionCloud2 = styled.img`
  position:absolute;
  z-index: 6;
  left:0px;
  bottom:-16vh;
  width:100vw;
`
const PositionStar = styled.img`
  position:absolute;
  z-index: 0;
  left:0px;
  top:0vh;
  width:100vw;
`
const PositionMonkey = styled.img`
  position:absolute;
  z-index: 5;
  bottom:15vh;
  width:auto;
  height: 65vh;
  top:35vh;
  left:5vw;
  @media(max-width: 720px){
    width:auto;
    height: 20vh;
    bottom:5vh;
  }
`
const PositionGiant = styled.img`
  position:absolute;
  z-index: 7;
  right:0vw;
  top:35vh;
  width:auto;
  height: 65vh;
  @media(max-width: 720px){
    width:auto;
    height: 20vh;
    bottom:5vh;
  }
`
const ScrollLing = styled.img`
  position: absolute;
  z-index: 5;
  top: 30vh;
  left: 8vw;
  width:3vw;
  animation: MoveUpDown 1s linear infinite;
  cursor:pointer; 
`
const ScrollYak = styled.img`
  position: absolute;
  z-index: 5;
  top: 30vh;
  right: 11vw;
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
const PositionScrolldown = styled.img`
position:absolute;
width:3vw;
top:90vh;
left:50vw;
cursor:pointer;  
`

const Background = () => (
  <div>
    <PositionStar src='/static/image/star.svg'/>
    <PositionMountain1 src='/static/image/moutain.svg' />
    <PositionCloud1 src='/static/image/cloud-bottom.svg' />
    <PositionMountain2 src='/static/image/moutain.svg' />
    
    <PositionMonkey src='/static/image/mongkey-Home.svg' />
    <ScrollLing src='/static/image/double-arrow-down-128.png'/>
    <PositionGiant src='/static/image/giantwithcloud.svg' />
    <ScrollYak src='/static/image/double-arrow-down-128.png'/>
    <PositionCloud2 src='/static/image/cloud-bottom-Front.svg'/>
    
    
    <PositionScrolldown src="/static/image/icon-arrow-white-down.png"/>
  </div>
)

export default Background