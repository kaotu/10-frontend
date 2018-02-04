import react from 'react'
import Bg from '../Core/BgStory.js'
import styled from 'styled-components'
import HeartBox from './HeartBox'
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
  min-height: 100vh;
`

const Space = styled.div`
  margin-top: 5%;
  margin-bottom: 0%;
`

const Relative = styled.div`
  position : relative;
`

const Bgheartbox = styled.img`
  width : 105%;
  margin-left : -2%;
  margin-top : -20%;
`
const Bgright = styled.img`
  width : 10%;
  margin-top : -10%;
`
const Bgleft = styled.img`
  width : 10%;
  margin-top : -10%;
`


const index = () => (
<div>
  <DivContact>
    <Relative>
    <ContentBg bgColor="#444B52" className="">
      <div className="container-fluid">
        <div className="row">
          <Space className="col-md-12">
            <H1>Contact</H1>
            <H2>ติดต่อเรา</H2>
            <div className="row">
              <div className="col-sm-3 col-md-3">
              <a href="tel://083-082-2189"><ImgLeft src="/static/image/ContactPhone.png" /></a>
                <p className="mt-3"><strong>พี่วิปโป้: 08-3082-2189</strong></p>
              </div>
              <Line className="col-sm-6 col-md-6">
                <Linerespon />
                <a href="https://www.facebook.com/wipcamp/" target="_blank">
                  <ImgCenter src="/static/image/facebook ci logo.png" />
                </a>
                <a href="http://line.naver.jp/ti/p/Z_Qg6KlFnU#~" target="_blank">
                  <ImgCenter src="/static/image/LINEa ci logo.png" />
                </a>
                <a href="https://twitter.com/WIPCamp" target="_blank">
                  <ImgCenter src="/static/image/Twiiter ci logo.png" />
                </a>
                <a href="https://www.instagram.com/wipcamp/" target="_blank">
                  <ImgCenter src="/static/image/ig ci logo.png" />
                </a>
                <a href="https://www.youtube.com/channel/UC_Lhso9PxSlxNuw2wG9zYIA" target="_blank">
                  <ImgCenter src="/static/image/Youtube ci logo.png" />
                </a>
                <Linerespon />
              </Line>
              <div className="col-sm-3 col-md-3">
                <a href="mailto:wippo@wipcamp.com"><ImgRight src="/static/image/ContactMail.png" /></a>
                <p className="mt-3"><strong>wippo@wipcamp.com</strong></p>
              </div>
            </div>
            <Bgleft src = '/static/image/BgleftFAQs.png'/>
  <Bgright src = '/static/image/BgrightFAQs.png'/>
  <Bgheartbox src = '/static/image/Bgheartbox.png'/>
          </Space>
        </div>
      </div>
    </ContentBg>
    </Relative>
  </DivContact>
  
</div>
)

export default index
