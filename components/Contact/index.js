import react from 'react'
import Bg from '../Core/BgStory.js'
import styled from 'styled-components'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'

const DivContact = styled.div`
  text-align: center;    
  width: 100%;  
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

const ContentBg = Bg.extend`
  height: 100vh;
`

const Space = styled.div`
  z-index:3;
  margin-top: 6%;
  margin-bottom: 10%;
`

const Relative = styled.div`
  position : relative;
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


const index = () => (
<div>
  <DivContact>
    <Relative>
    <Bgheartbox src = '/static/image/Bgheartbox.png'/>
    <ContentBg bgColor="#444B52" className="">
      <div className="container-fluid">
        <div className="row">
          <Space className="col-md-12">
            <H1>Contact</H1>
            <H2>ติดต่อเรา</H2>
            <div className="row">
              <div className="col-sm-3 col-md-3">
              <a href="tel://02-107-3576"><ImgLeft src="/static/image/ContactPhone.png" /></a>
                <p className="mt-3"><strong>พี่วิปโป้: 02-107-3576</strong></p>
              </div>
              <Line className="col-sm-6 col-md-6">
                <Linerespon />
                <a href="https://www.facebook.com/wipcamp/" target="_blank">
                  <ImgCenter src="/static/image/facebook.svg" className='img responsive'/>
                </a>
                <a href="http://line.naver.jp/ti/p/Z_Qg6KlFnU#~" target="_blank">
                  <ImgCenter src="/static/image/line.svg" className='img-responsive'/>
                </a>
                <a href="https://twitter.com/WIPCamp" target="_blank">
                  <ImgCenter src="/static/image/twitter.svg" />
                </a>
                <a href="https://www.instagram.com/wipcamp/" target="_blank">
                  <ImgCenter src="/static/image/instagram.svg" />
                </a>
                <a href="https://www.youtube.com/channel/UC_Lhso9PxSlxNuw2wG9zYIA" target="_blank">
                  <ImgCenter src="/static/image/youtube.svg" />
                </a>
                <Linerespon />
              </Line>
              <div className="col-sm-3 col-md-3">
                <a href="mailto:wippo@wipcamp.com"><ImgRight src="/static/image/ContactMail.png" /></a>
                <p className="mt-3"><strong>wippo@wipcamp.com</strong></p>
              </div>
            </div>

          </Space>
        </div>
      </div>
    </ContentBg>
    <Bgleft src = '/static/image/BgleftFAQs.png'/>
    <Bgright src = '/static/image/BgrightFAQs.png'/>
    </Relative>
  </DivContact>
  
</div>
)

export default index
