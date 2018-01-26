import react from 'react'
import styled from 'styled-components'

const ImgHeart = styled.img`
    width:10vw;
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
      <br/><br/><br/><br/><br/><br/><br/>
        <ImgHeart src="/static/image/BoxHeart.svg" />
      </div>
    </div>
  </div>
)
export default BoxHeart
