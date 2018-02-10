import React from 'react'
import styled, { keyframes } from 'styled-components'

const Bg = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
`

const SlideCloud = keyframes`
    0% {
        left: -70%
    }

    100% {
        left: 100%
    }
`

const CloudBack = styled.img`
    position:absolute;
    top : 40vh;
    z-index: 0;
    width:70vw;
    animation: ${SlideCloud} 40s linear normal none infinite ;
    //   @media (min-width: 768px) {
    //     height:70vh;
    //   }
      @media (min-width: 1024px) {
        animation: ${SlideCloud} 60s linear normal none infinite ;      
    }
`

const CloudBack2 = styled.img`
    position:absolute;
    top : 43vh;
    z-index: 0;
    width:70vw;
    animation: ${SlideCloud} 30s linear normal none infinite ;
    //   @media (min-width: 768px) {
    //     height:70vh;
    //   }
    @media (min-width: 1024px) {
        animation: ${SlideCloud} 70s linear normal none infinite ;      
    }
`

const CloudIndex = () => (
  <Bg>
    <CloudBack src='/static/image/CloudbackIntro1.png'/>
    <CloudBack2 src='/static/image/CloudbackIntro2.png'/>
  </Bg>
)
export default CloudIndex
