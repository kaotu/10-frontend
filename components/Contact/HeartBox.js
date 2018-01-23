import react from 'react'
import styled from 'styled-components'

const ImgHeart = styled.img`
    width:20vw;
    @media(max-width:720px) {
    }
`
const BoxHeart = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 img-responsive">
        <ImgHeart src="/static/image/BoxHeart.svg" />
      </div>
    </div>
  </div>
)
export default BoxHeart
