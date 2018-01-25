import react from 'react'
import Bg from '../Core/BgStory'
import styled from 'styled-components'

const Img = styled.img`
    width:40vw;
    right:0px;
`

const Mobile = styled.div`
    text-align: right;
    @media (max-width:720px) {
      text-align:center;
    }
`
const H1 = styled.div`
    font-size: 65px;
    margin-top:50px;
    margin-bottom:-25px;
    margin-left:px;
`
const H2 = styled.div`
    font-size: 30px;
    margin-top:0px;
    margin-bottom:-10px;
    padding-top:0.5em;
`
const Box1 = styled.div`
    width: 20vw;
    height: 55hw;    
    padding: 1vw;
    background-color:#FBFBEF;
    opecity:0.9;
    border-radius: 0.2em;
    margin-top:33vw;
    margin-left:18vw;   
`

const Front = styled.p`
    padding-top:0vw;
    margin-left:40vw;   
`


const index = () => (
  <Bg bgColor="#d5eff2" className="d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 ">
          <Mobile>
            <H1 className="text-center font-weight-bold">WHEN</H1>
            <H2 className="text-center font-weight-bold">ค่ายนี้จัดเมื่อไหร่ ?</H2>
          </Mobile>
        </div>
        <div className="col-12 col-sm-12 col-md-12  ">
          <Img src="/static/image/Climing.svg" className="rounded float-right" alt="Responsive image"/>       
          <Box1 className="text-center">
            <p>31 มค </p>
            <p>วันค่าย</p>
          </Box1> 
        </div>           
        </div>
      </div>
 
  </Bg>
) 
export default index