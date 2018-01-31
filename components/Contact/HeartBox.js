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
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 img-responsive">
        <ImgHeart src="/static/image/BoxHeart.svg" className="img-responsive"/>
      </div>
    </div>
  </div>
)
export default BoxHeart
