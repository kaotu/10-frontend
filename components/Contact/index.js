import react from 'react'
import Bg from '../Core/BgStory.js'
import styled from 'styled-components'

const DivWhere = styled.div`
  top:200px;
  text-align: center;    
  width: 100%;  
`
const Img1 = styled.img`
  width:40%;
  padding:3vw;
`
const Img2 = styled.img`
  width:28%;
  padding:1.5vw;
`
const FrontCon = styled.h1`
  color: #000000;
`

const index = () => (
  <DivWhere>
    <Bg className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <FrontCon>Contact</FrontCon>
            <p>ติดต่อเรา</p>
            <div className="row">
              <div className="col-sm">
                <Img1 src="/static/image/ContactPhone.svg" />
                <p>088-8888-888</p>
              </div>
              <div className="col-sm">
                <Img2 src="/static/image/Facebook.svg" />
                <Img2 src="/static/image/Youtube.svg" />
                <Img2 src="/static/image/Ig.svg" />
              </div>
              <div className="col-sm">
                <Img1 src="/static/image/ContactMail.svg" />
                <p>konlao@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>รอรูปกล่องดวงใจ</p>
          </div>
        </div>
      </div>
    </Bg>
  </DivWhere>
)
export default index