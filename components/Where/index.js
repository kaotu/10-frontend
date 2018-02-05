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
  width:40%;
  margin-top : 3%;
  margin-bottom: 5%; 
  box-shadow: 1vw 1vw 2vw #000;
  @media (max-width:768px) {
    margin-top : 30%;
  }
`

const Mobile = styled.div`
  @media (max-width:720px) {
    text-align:center;
  }
`

const H4 = styled.h4`
  color: #fff;
`

const H3 = styled.h3`
  margin-top:2%;
  color:#fff;
`

const Space = styled.div`
  margin-top: 6%;
  margin-bottom: 10%;
  top:0vw;
`

const Bgmountain = styled.img`
bottom : 0%;
width : 100%;
margin-top : -95%;
@media (max-width:768px) {
  margin-top : -90%;
}
`

const Zindex = styled.div`
  z-index : 1;
`

const index = () => (
  <Bg bgColor={Color.mongkey.where} where className="">
    <Zindex className="container-fluid">
      <div className="row">
        <Space className="col-md-12">
          <Mobile className="text-center">
            <H1>WHERE</H1>
            <H2>ค่ายนี้จัดที่ไหน ?</H2>
          </Mobile>
          <div className="text-center">
            <a href="https://goo.gl/fC42M6" target="_blank" >
              <Local className="mb-1" src="/static/image/Sit.jpg" alt="คณะเทคโนโลยีสารสนเทศ"/>
            </a>
            {/* <p className="text-muted">คลิกที่รูปภาพเพื่อดูแผนที่</p> */}
            <H3>คณะเทคโนโลยีสารสนเทศ</H3>
            <H4>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</H4>
          </div>
        </Space>
      </div>
    </Zindex>
    <Bgmountain src = '/static/image/2.png'/>
  </Bg>
)
//asdasdasdasdasdadadasdasd
export default index
