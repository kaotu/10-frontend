import react from 'react'
import styled from 'styled-components'

const ImgHeart = styled.img`
    position: absolute;
    z-index: 2;
    width:20vw;
    left: 39vw;
    @media(max-width:1500px) {
      bottom:-3em;
    }
    @media(max-width:1025px) {
      margin-bottom:-5em;
    }
    @media(max-width:720px) {
      bottom:-1em;
    }
`
const BoxHeart = () => (
  <ImgHeart src="/static/image/BoxHeart.svg"/>
) 
export default BoxHeart
