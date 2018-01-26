import react from 'react'
import Bg from '../Core/BgStory.js'
import styled from 'styled-components'
import HeartBox from './HeartBox'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'

const DivWhere = styled.div`
  text-align: center;    
  width: 100%;  
`
const ImgLeft = styled.img`
  width:5vw;
  @media(max-width:720px) {
    width : 13vw;
  }
`
const ImgCenter = styled.img`
  width:5vw;
  cursor:pointer;
  margin-top : 17px;
  margin-left : 1vw;
  margin-right : 1vw;
  @media(max-width:720px) {
    width : 13vw;
  }
`
const ImgRight = styled.img`
  width : 5vw;
  @media(max-width:720px) {
    margin-top : 7vw;
    width : 13vw;
  }
`
const Line = styled.div`
  border-left: thick solid #000;
  border-right: thick solid #000;
  @media(max-width:575px) {
    border-left: none;
    border-right: none;
  }
`

const Linerespon = styled.div`
    width : 50vw;
    height : 2px;
    margin-left : 20vw;
    margin-top : 5vw;
    background-color: #000;
  @media(min-width:576px){
    display : none;
  }
`

const ContentBg = Bg.extend`
  min-height: 90vh;
`

const FooterBg = Bg.extend`
  min-height: 10vh;  
`

const FrontFooter = styled.i`
  padding-top:  2em;
  padding-bottom: 2em;  
`

const index = () => (
  <DivWhere>
    <ContentBg bgColor="#e7f6fa" className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <H1>Contact</H1>
            <H2 className="font-weight-bold">ติดต่อเรา</H2>
            <div className="row">
              <div className="col-sm-3 col-md-3 img-responsive">
                <ImgLeft src="/static/image/ContactPhone.svg" />
                <p className="mt-3"><strong>พี่วิปโป้: 08-3082-2189</strong></p>
              </div>
              <Line className="col-sm-6 col-md-6">
                <Linerespon />
                <a href="https://www.facebook.com/wipcamp/">
                  <ImgCenter src="/static/image/Facebook.svg" />
                </a>
                <a href="http://line.naver.jp/ti/p/Z_Qg6KlFnU#~">
                  <ImgCenter src="/static/image/Lineicon.svg" />
                </a>
                <a href="https://twitter.com/WIPCamp">
                  <ImgCenter src="/static/image/Twitter.svg" />
                </a>
                <a href="https://www.instagram.com/wipcamp/">
                  <ImgCenter src="/static/image/Ig.svg" />
                </a>
                <a href="https://www.youtube.com/channel/UC_Lhso9PxSlxNuw2wG9zYIA">
                  <ImgCenter src="/static/image/Youtube.svg" />
                </a>                
                <Linerespon />
              </Line>
              <div className="col-sm-3 col-md-3 img-responsive">
                <ImgRight src="/static/image/ContactMail.svg" />
                <p className="mt-3"><strong>wippo@wipcamp.com</strong></p>
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
    
    <FooterBg >    
    <FrontFooter className="fa fa-code" aria-hidden="true"/> with <FrontFooter className="fa fa-heart" aria-hidden="true"/> by 10 I'm Developer
    </FooterBg>
  </DivWhere>
)

export default index
