import react from 'react'
import Bg from '../Core/BgStory.js'
import styled from 'styled-components'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'

const DivContact = styled.div`
  text-align: center;    
  width: 100%;  
  height: 200%;  
  overflow: hidden;
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
  border-left: thick solid white;
  border-right: thick solid white;
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
    background-color: white;
  @media(min-width:576px){
    display : none;
  }
`

const Relative = styled.div`
  position : relative;
  height: 100vh;
`

const ContentBg = Bg.extend`
  height: 100vh;
`

const Bgheartbox = styled.img`
  position : absolute;
  z-index: 1;
  width : 120%;
  left : -10%;
  bottom: 0vh;
`
const Bgright = styled.img`
  position : absolute;
  z-index:0;
  height: 250vh;
  right: 0vw;
  top : 0vh;
`
const Bgleft = styled.img`
  position : absolute;
  z-index:0;
  height: 250vh;
  left: 0vw;
  top : 0vh;
`
const TextDeco = styled.a`
  &:hover{
    text-decoration:none;
  }
`
const FaceMobile = styled.a`
@media (min-height : 416px){
  display : none;
}
`
const FaceDestop = styled.a`
@media (max-height : 415px){
  display : none;
}
`

const Space = styled.div`
  z-index:3;
  top: 10vh;
  flex-direction: column;
`


const index = () => (
  <DivContact>
    <Relative>
      <Bgheartbox src='/static/image/Bgheartbox.png' />
      <ContentBg bgColor="#444B52" className="d-flex">
        <div className="container-fluid">
          <div className="row">
            <Space className="col-md-12 align-items-center">
              <H1>Contact</H1>
              <H2>ติดต่อเรา</H2>
              <div className="row">
                <div className=" col-sm-3 col-md-3">
                  <TextDeco href="tel://02-107-3576"><ImgLeft src="/static/image/ContactPhone.png" />
                    <p className="mt-3"><strong>Call Center: 02-107-3576</strong></p>
                  </TextDeco>
                </div>
                <Line className="col-sm-6 col-md-6">
                  <Linerespon />
                  <FaceMobile href="fb://page/250617067968">
                    <ImgCenter src="/static/image/facebook.png" className='img responsive' />
                  </FaceMobile>
                  <FaceDestop href="https://www.facebook.com/wipcamp/" target="_blank">
                    <ImgCenter src="/static/image/facebook.png" className='img responsive' />
                  </FaceDestop>

                  <a href="http://line.naver.jp/ti/p/Z_Qg6KlFnU#~" target="_blank">
                    <ImgCenter src="/static/image/line.png" className='img-responsive' />
                  </a>
                  <a href="https://twitter.com/WIPCamp" target="_blank">
                    <ImgCenter src="/static/image/twitter.png" className='img responsive' />
                  </a>
                  <a href="https://www.instagram.com/wipcamp/" target="_blank">
                    <ImgCenter src="/static/image/instagram.png" className='img responsive' />
                  </a>
                  <a href="https://www.youtube.com/channel/UC_Lhso9PxSlxNuw2wG9zYIA" target="_blank">
                    <ImgCenter src="/static/image/youtube.png" className='img responsive' />
                  </a>
                  <Linerespon />
                </Line>
                <div className="col-sm-3 col-md-3 ">
                  <TextDeco href="mailto:wippo@wipcamp.com"><ImgRight src="/static/image/ContactMail.png" className='img responsive' />
                    <p className="mt-3"><strong>wippo@wipcamp.com</strong></p>
                  </TextDeco>
                </div>
              </div>

            </Space>
          </div>
        </div>
      </ContentBg>
      <Bgleft src='/static/image/BgleftFAQs.png' />
      <Bgright src='/static/image/BgrightFAQs.png' />
    </Relative>
  </DivContact>

)

export default index
