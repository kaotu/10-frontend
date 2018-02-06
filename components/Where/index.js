import react from 'react'
import Bg from '../Core/BgStory.js'
import styled from 'styled-components'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'
import Color from '../Core/Color'


const Story = styled.img`
  width:40%;
  @media (max-width:768px) {
    width: 40%;
  }
`

const Local = styled.img`
  width:70%;
  margin-top : 3%;
  margin-bottom: 5%; 
  box-shadow: 1vw 1vw 2vw #000;
`

const Mobile = styled.div`
  @media (max-width:720px) {
    text-align:center;
  }
`

const Font1 = styled.p`
  font-size : 1em;
  @media (min-width:320px) {
    font-size: 1.1em;
  }
  @media (min-width:412px) {
    font-size: 1.2em;
  }
  @media (min-width:576px) {
    font-size: 1.3em;
  }
  @media (min-width:768px) {
    font-size: 1.4em;
  }
  @media (min-width:1024px) {
    font-size: 1.6em;
  }
`

const Font2 = styled.p`
  font-size : 0.9em;
  @media (min-width:320px) {
    font-size: 1em;
  }
  @media (min-width:412px) {
    font-size: 1.1em;
  }
  @media (min-width:576px) {
    font-size: 1.2em;
  }
  @media (min-width:768px) {
    font-size: 1.3em;
  }
  @media (min-width:1024px) {
    font-size: 1.5em;
  }
`

const Font3 = styled.p`
  font-size : 0.7em;
  @media (min-width:320px) {
    font-size: 0.8em;
  }
  @media (min-width:412px) {
    font-size: 0.9em;
  }
  @media (min-width:576px) {
    font-size: 1em;
  }
  @media (min-width:768px) {
    font-size: 1.1em;
  }
  @media (min-width:1024px) {
    font-size: 1.3em;
  }
`

const Space = styled.div`
  margin-top: 6%;
  margin-bottom: 10%;
  top:0vw;
`

const Bgmountain = styled.img`
  bottom : 0vh;
  width : 100%;
  margin-top : -95%;
  @media (max-width:768px) {
    margin-top : -90%;
}
`

const Zindex = styled.div`
  z-index : 1;
`

const Hidden = styled.div`
  @media(max-width:720px) {
    display: none;
  }
`

const index = () => (
  <Bg bgColor={Color.mongkey.where} where className="">
    <Zindex className="container-fluid">
      <div className="row">
        <Hidden className="col-5"></Hidden>
        <Space className="col-md-7">
          <Mobile className="text-center">
              <H1>WHERE</H1>
              <H2>ค่ายนี้จัดที่ไหน ?</H2>
          </Mobile>
          <div className="text-center">
            <a href="https://goo.gl/fC42M6" target="_blank" >
              <Local className="mb-1" src="/static/image/Sit.jpg" alt="คณะเทคโนโลยีสารสนเทศ"/>
            </a>
            {/* <p className="text-muted">คลิกที่รูปภาพเพื่อดูแผนที่</p> */}
            <Font3>คลิกที่รูปภาพเพื่อดูแผนที่</Font3>
            <Font1>คณะเทคโนโลยีสารสนเทศ</Font1>
            <Font2>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</Font2>
          </div>
        </Space>
      </div>
    </Zindex>
    <Bgmountain src = '/static/image/2.png'/>
  </Bg>
)
//asdasdasdasdasdadadasdasd
export default index
