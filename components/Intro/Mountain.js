import React from 'react'
import styled, { keyframes } from 'styled-components'

const Bg = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    top: -100vh;
`
const MountainLeft = styled.img`
    position : absolute;
    z-index:2;
    height : 50vh;
    bottom: 0vh;
    left : 0vw;
`
const MountainCenter = styled.img`
    position : absolute;
    z-index:4;
    height : 80vh;
    bottom:0vh;
    left: 50%;
    transform: translate(-50%, 0%);
    @media (min-width: 768px) {
        z-index:3; 
    }
`
const MountainRight = styled.img`
    position : absolute;
    z-index:3;
    height : 50vh;
    bottom: 0vh;
    right: 0vw;
    @media (min-width: 768px) {
        z-index:4; 
    }
`
const MountainIndex = () => (
  <Bg>
    <MountainLeft src='/static/image/Left.png' />
    <div className="text-align:center">
      <MountainCenter src='/static/image/ภูเขา (1).svg' />
    </div>
    <MountainRight src='/static/image/MountainRight.svg' />
  </Bg>
)
export default MountainIndex
