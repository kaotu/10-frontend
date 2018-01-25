import react from 'react'
import styled from 'styled-components'


const PositionMountain = styled.img`
  position:absolute;
  left:0px;
  bottom:0vh;
  height: 80vh;
  left: 30vw;
  top:23vh;
`
const PositionCloud = styled.img`
  position:absolute;
  left:0px;
  bottom:0vh;
  width:95vw;
  top:55vh;
`
const PositionStar = styled.img`
  position:absolute;
  left:0px;
  top:0vh;
  width:100vw;
`
const PositionMonkey = styled.img`
  position:absolute;
  bottom:15vh;
  width:auto;
  height: 50vh;
  top:50vh;
  left:5vw;
  @media(max-width: 720px){
    width:auto;
    right: 5vw;
    height: 20vh;
    bottom:5vh;
  }
`
const PositionGiant = styled.img`
  position:absolute;
  right:5vh;
  top:50vh;
  width:auto;
  height: 50vh;
  
`
const PositionLing = styled.img`
  position: absolute;
  top: 42vh;
  left: 8vw;
  width:3vw;
  animation: MoveUpDown 1s linear infinite;
  cursor:pointer; 

  @keyframes MoveUpDown {
    0% {
      top: 42vh;
    }
    50% {
      top: 40vh;
    }
    100% {
      top: 42vh;
    }
  }
`
const PositionYak = styled.img`
  position: absolute;
  top: 42vh;
  right: 10vw;
  width:3vw;
  animation: MoveUpDown 1s linear infinite;
  cursor:pointer; 

  @keyframes MoveUpDown {
    0% {
      top: 42vh;
    }
    50% {
      top: 40vh;
    }
    100% {
      top: 42vh;
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
    <PositionLing src='/static/image/double-arrow-down-128.png'/>
    <PositionYak src='/static/image/double-arrow-down-128.png'/>
    {/* <PositionStar src='/static/image/star.svg'/> */}
    {/* <PositionMountain src='/static/image/moutain.svg' /> */}
    {/* <PositionCloud src='/static/image/cloud-bottom.svg' /> */}
    <PositionMonkey src='/static/image/mongkey-Home.svg' />
    <PositionGiant src='/static/image/giantwithcloud.svg' />
    <PositionScrolldown src="/static/image/icon-arrow-white-down.png"/>
  </div>
)

export default Background