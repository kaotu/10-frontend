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
const H1 = styled.div`
  font-size: 80px;
  margin-top:20px;
  margin-bottom:-25px;
  
`;
const H2 = styled.div`
font-size: 35px;
margin-top:0px;
margin-bottom:0px;
padding-top:0.3em;
`

const index = () => (
  <Bg bgColor="#ade6df" where className="d-flex align-items-center">
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md-6 text-center mt-4">
          <Story src="static/image/LookOver-01.svg" />
        </div>
        <div className="col-md-6">
          <Mobile className="text-center mt-4">
            <H1 className="text-center font-weight-bold">WHERE</H1>
            <H2 className="text-center font-weight-bold">ค่ายนี้จัดที่ไหน ?</H2>
          </Mobile>
          <div className="text-center">
            <a href="https://goo.gl/fC42M6" target="_blank" >
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
