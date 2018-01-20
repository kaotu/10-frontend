import react from 'react'
import Bg from '../Core/BgStory.js'
import styled from 'styled-components'


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

const index = () => (
  <Bg className="d-flex align-items-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 text-center">
          <Story src="static/image/LookOver-01.svg" />
        </div>
        <div className="col-md-6">
          <Mobile className="text-center">
            <h1>WHERE</h1>
            <span>ค่ายนี้จัดที่ไหน</span>
          </Mobile>
          <div className="text-center">
            <a href="https://www.google.co.th/maps/place/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%84%E0%B9%82%E0%B8%99%E0%B9%82%E0%B8%A5%E0%B8%A2%E0%B8%B5%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%A8/@13.6525855,100.4914216,17z/data=!3m1!4b1!4m5!3m4!1s0x30e2a251a57396f5:0x2fd829cd26be9e23!8m2!3d13.6525855!4d100.4936103" target="_blank" >
              <Local src="static/image/sit-kmutt.jpg" />
            </a>
            <p className="text-muted">คลิกที่รูปภาพเพื่อดูแผนที่</p>
            <p>คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
          </div>
        </div>
      </div>
    </div>
  </Bg>
)
export default index