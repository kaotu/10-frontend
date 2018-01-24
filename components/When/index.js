import react from 'react'
import Bg from '../Core/BgStory'
import styled from 'styled-components'

const Img = styled.img`
  width:40vw;
`

const Mobile = styled.div`
  text-align: right;
  @media (max-width:720px) {
    text-align:center;
  }
`

const H1 = styled.div`
  font-size: 90px;
  margin-top:15vh;
  margin-bottom:-25px;
`
const H2 = styled.div`
  font-size: 35px;
  margin-top: 0px;
`

const index = () => (
  <Bg bgColor="#d5eff2" className="d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 order-2 text-right">
          <Img src="/static/image/Climing.svg" />
        </div>
        <div className="col-12 col-sm-12 col-md-6 order-1">
          <Mobile>
            <H1 className="text-center font-weight-bold">WHEN</H1>
            <H2 className="text-center font-weight-bold">ค่ายนี้จัดเมื่อไหร่ ?</H2>
          </Mobile>
        </div>
      </div>
    </div>
  </Bg>
) 
export default index