import react from 'react'
import Bg from '../Core/BgStory.js'
import styled from 'styled-components'
import HeartBox from './HeartBox'

const DivWhere = styled.div`
  text-align: center;    
  width: 100%;  
`
const ImgLeft = styled.img`
  width:5vw;
  @media(max-width:720px) {
  }
`
const ImgCenter = styled.img`
  width:5vw;
  cursor:pointer;
  @media(max-width:720px) {
  }
`
const ImgRight = styled.img`
  width : 5vw;
  @media(max-width:720px) {
  }
`
const Line = styled.div`
  border-left: thick solid #fff;
  border-right: thick solid #fff;
`

const ContentBg = Bg.extend`
  min-height: 95vh;
`

const FooterBg = Bg.extend`
  min-height: 5vh;
  background-color: #FFFFFF;
`

const index = () => (
  <DivWhere>
    <ContentBg contact className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Contact</h1>
            <p>ติดต่อเรา</p>
            <div className="row">
              <div className="col-sm-3 col-md-3 img-responsive">
                <ImgLeft src="/static/image/ContactPhone.svg" />
                <p className="mt-3"><strong>พี่วิปโป้: 088-8888-888</strong></p>
              </div>
              <Line className="col-sm-6 col-md-6">
                <ImgCenter src="/static/image/Facebook.svg" />
                <ImgCenter src="/static/image/Youtube.svg" />
                <ImgCenter src="/static/image/Ig.svg" />
                <ImgCenter src="/static/image/Lineicon.svg" />
                <ImgCenter src="/static/image/Twitter.svg" />
              </Line>
              <div className="col-sm-3 col-md-3 img-responsive">
                <ImgRight src="/static/image/ContactMail.svg" />
                <p className="mt-3"><strong>konlao@gmail.com</strong></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <HeartBox />
          </div>
        </div>
      </div>
    </ContentBg>
    <FooterBg>
      <span>Footer</span>
    </FooterBg>
  </DivWhere>
)

export default index
