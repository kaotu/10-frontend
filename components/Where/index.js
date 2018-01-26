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
  color: #082A3D;
`

const index = () => (
  <Bg bgColor={Color.mongkey.where} where className="d-flex align-items-center">
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md-6 text-center mt-4">
          <Story src="static/image/LookOver-01.svg" />
        </div>
        <div className="col-md-6">
          <Mobile className="text-center mt-4">
            <H1 className="font-weight-bold">WHERE</H1>
            <H2 className="font-weight-bold">ค่ายนี้จัดที่ไหน ?</H2>
          </Mobile>
          <div className="text-center">
            <a href="https://goo.gl/fC42M6" target="_blank" >
              <Local className="mb-1" src="static/image/sit-kmutt.jpg" />
            </a>
            <p className="text-muted">คลิกที่รูปภาพเพื่อดูแผนที่</p>
            <h3>คณะเทคโนโลยีสารสนเทศ</h3>
            <H4>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</H4>
          </div>
        </div>
      </div>
    </div>
  </Bg>
)
export default index
