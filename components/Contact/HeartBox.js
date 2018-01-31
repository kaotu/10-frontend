import react from 'react'
import styled from 'styled-components'

const ImgHeart = styled.img`
    position: absolute;
    z-index: 2;
    width:20vw;
    left: 39vw;
    @media(max-width:720px) {
      width: 30%;
      height: auto;
      margin-bottom:5vh;
    }
`
const BoxHeart = () => (
  <ImgHeart src="/static/image/BoxHeart.svg" className="img-responsive"/>
) 
export default BoxHeart
