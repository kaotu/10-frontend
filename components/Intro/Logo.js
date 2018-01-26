import React from 'react'
import styled from 'styled-components'

const Wip = styled.img`
  width: 50%;
  position: relative;
  z-index: 8;
  left: 25vw;
  top:-30vh;
  margin-top: 50vh;
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
`
const Logo = () => (
	<Wip src="/static/image/WIPlogo.svg" />
)

export default Logo;