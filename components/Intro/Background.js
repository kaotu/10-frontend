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
  @media(max-width: 720px){
    width:auto;
    right: 5vw;
    height: 20vh;
    bottom:5vh;
  }
`
const PositionGiant = styled.img`
  position:absolute;
  right:0px;
  top:50vh;
  width:auto;
  height: 50vh;
`


const Background = () => (
  <div>
    {/* <PositionStar src='/static/image/star.svg'/> */}
    {/* <PositionMountain src='/static/image/moutain.svg' />
    <PositionCloud src='/static/image/cloud-bottom.svg' />
    <PositionMonkey src='/static/image/mongkey-Home.svg' />
    <PositionGiant src='/static/image/giantwithcloud.svg' /> */}
  </div>
)

export default Background