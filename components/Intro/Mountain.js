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
    height : 100vh;
    bottom: 0vh;
    left : 0vw;
    @media (min-width: 1024px) {
        height : 100vh;
        top : 0vh;
    }
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
    height : 100vh;
    bottom: 0vh;
    right: 0vw;
    @media (min-width: 768px) {
        z-index:4; 
    }
    @media (min-width: 1024px) {
        height : 80vh;
    }
`
const MountainIndex = () => (
  <Bg>
    <MountainLeft src='/static/image/MountainLeft.svg' />
    <div class="text-align:center">
      <MountainCenter src='/static/image/ภูเขา (1).svg' />
    </div>
    <MountainRight src='/static/image/MountainRight.svg' />
  </Bg>
)
export default MountainIndex
