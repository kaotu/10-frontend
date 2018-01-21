import react from 'react'
import styled from 'styled-components'

const ImgHeart = styled.img`
    width:20vw;
    margin-top:10em;
    @media(max-width:720px) {
        margin-top:4em;          
    }
`
const BoxHeart = () =>(
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 img-responsive">
        <ImgHeart src="/static/image/BoxHeart.svg"/>
    </div>
    </div>
    </div>
)
export default BoxHeart