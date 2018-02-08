import React from 'react'
import styled, { keyframes } from 'styled-components'

const Bg = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
`

const SlideCloud = keyframes`
    0% {
        left: -100%
    }

    100% {
        left: 100%
    }
`

const SlideCloud2 = keyframes`
    0% {
        left: -100%
    }

    100% {
        left: 100%
    }
`

const CloudBack = styled.div`
    position:absolute;
    bottom : 0vh;
    z-index: 0;
    height:55vh;
    width:100vw;
    background: url('/static/image/CloudBG.svg');
    animation: ${SlideCloud} 60s linear normal none infinite ;
    background-repeat: repeat-x;
      @media (min-width: 768px) {
        height:70vh;
      }
      @media (min-width: 1024px) {
        height:80vh;
      }
`

const CloudBack2 = styled.div`
    position:absolute;
    bottom : 0vh;
    z-index: 0;
    height:60vh;
    width:100vw;
    background: url('/static/image/CloudBG.svg');
    animation: ${SlideCloud2} 40s linear normal none infinite ;
    background-repeat: repeat-x;
      @media (min-width: 768px) {
        height:70vh;
      }
      @media (min-width: 1024px) {
        height:80vh;
      }
`

const CloudIndex = () => (
  <Bg>
    <CloudBack />
    <CloudBack2 />
  </Bg>
)
export default CloudIndex
