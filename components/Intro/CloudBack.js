import React from 'react'
import styled, { keyframes } from 'styled-components'
const Bg = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
`
const SlideCloud = keyframes`
    from {background-position: 20vw 0;}
    to {background-position: 220vw 0;}
`
const CloudBack = styled.div`
    position:absolute;
    bottom : 0vh;
    z-index: 0;
    height:60vh;
    width:200vw;
    background: url('/static/image/CloudBG.svg');
    // background: url(${props => props.cloud || ''}) repeat 0 0;
    animation: ${SlideCloud} 50s linear normal none infinite ;
    background-repeat: repeat-x;
    @media (min-width: 412px) {
        height:65vh;
      }
      @media (min-width: 768px) {
        height:70vh;
      }
      @media (min-width: 1024px) {
        height:80vh;
      }
`
const CloudIndex = () => (
    <Bg>
        <CloudBack/>
    </Bg>
)
export default CloudIndex
