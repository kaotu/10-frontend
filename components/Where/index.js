import react from 'react'
import Bg from '../Core/BgStory.js'
import styled from 'styled-components'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'
import Color from '../Core/Color'


const Story = styled.img`
  width:40%;
  @media (max-width:720px) {
    width: 40%;
  }
`

const Local = styled.img`
  width:70%;
  margin-top : 5%;
  margin-bottom: 5%; 
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

const index = () => (
  <Bg bgColor={Color.mongkey.where} where className="">
    <div className="container-fluid">
      <div className="row">
        <Space className="col-md-12">
          <Mobile className="text-center">
            <H1>WHERE</H1>
            <H2>ค่ายนี้จัดที่ไหน ?</H2>
          </Mobile>
          <div className="text-center">
            <a href="https://goo.gl/fC42M6" target="_blank" >
              <Local className="mb-1" src="static/image/sit-kmutt.jpg" />
            </a>
            {/* <p className="text-muted">คลิกที่รูปภาพเพื่อดูแผนที่</p> */}
            <H3>คณะเทคโนโลยีสารสนเทศ</H3>
            <H4>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</H4>
          </div>
        </Space>
      </div>
    </div>
  </Bg>
)
export default index
