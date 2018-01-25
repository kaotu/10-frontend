import react from 'react'
import Bg from '../Core/BgStory'
import styled from 'styled-components'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'

const Img = styled.img`
    width:40vw;
`

const Mobile = styled.div`
    text-align: right;
    @media (max-width:720px) {
      text-align:center;
    }
`

const Box1 = styled.div`
    width: 20vw;
    height: 55hw;    
    padding: 1vw;
    background-color:#FBFBEF;
    opecity:0.9;
    border-radius: 0.2em;
    margin-top:20vw;
    margin-left:18vw;   
`


const index = () => (
  <Bg bgColor="#d5eff2" className="d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 order-2 text-center ">
          <div className="col-12 col-sm-12 col-md-6 ">
          <Img src="/static/image/Climing.svg" />
        </div>       
        </div>
        <div className="col-12 col-sm-12 col-md-6 order-1 ">
          <Mobile>
            <H1 className="text-center font-weight-bold">WHEN</H1>
            <H2 className="text-center font-weight-bold">ค่ายนี้จัดเมื่อไหร่ ?</H2>
        <div className="col-12 col-sm-12 col-md-6 ">
          <Box1 className="text-center">
            <p>31 มค </p>
            <p>วันค่าย</p>
          </Box1>
        </div>          
          </Mobile>
        </div>
      </div>
    </div>
  </Bg>
) 
export default index