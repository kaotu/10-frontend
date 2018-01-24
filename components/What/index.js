import React from 'react'
import styled from 'styled-components'

import Navbar from '../Core/Navbar'
import Bg from '../Core/BgStory'
import Cloud from './cloud'

const Info = styled.div`
  margin-top: 5%;
`

const Icon = styled.img`
  @media (max-width:720px) {
    width: 50%;
  }
`

const Mobile = styled.div`
  @media (max-width:720px) {
    text-align:center;
  }
`

const IconInfo = [
  {icon : "/static/image/question.svg", text: "Java programming"},
  {icon : "/static/image/question.svg", text: "IT Fundamentals"},
  {icon : "/static/image/question.svg", text: "Network"},
  {icon : "/static/image/question.svg", text: "HTML5&CSS"}
]

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
`
const IMG = styled.img`
  margin-top:60px;
`
const Padding = styled.div`
  @media (max-width:720px){
  padding : 50px;
  }
`


const index = props => (
  <Bg className="d-flex align-items-center">
    <Padding className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6">
          <Cloud />
          <IMG src="/static/image/fullHill.svg" />
        </div>
        <div className="col-12 col-sm-12 col-md-6">
          <Mobile>
            <H1 className="font-weight-bold">WHAT</H1>
            <H2 className="font-weight-bold">ค่ายนี้คืออะไร ?</H2>
          </Mobile>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;<strong>ครบรอบทศวรรษกับ ค่ายเส้นทางสู่ฝันนักไอที (WIP Camp)</strong> ค่ายนี้จะกลับมาตอกย้ำอีกครั้งให้รู้ว่าการเป็นนักไอทีของน้อง ๆ จะไม่หยุดอยู่เพียงความฝันอีกต่อไป 
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;<strong>10 ปี</strong> WIP Camp นี้จะพาน้อง ๆ ไปพบกับการเรียนจริง, เล่นจริง และปฏิบัติจริง ตลอดระยะเวลา 5 วัน 4 คืน ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี ไม่จำเป็นต้องมีพื้นฐาน ไม่ต้องกลัวกับการเผชิญหน้า มาร่วมตอกย้ำฝันไปด้วยกัน!   
          </p>
          <Info className="row text-center">
          { 
            IconInfo.map((info, i) => (
              <div key={i} className="col-6 col-md-3 img-responesive ">
                <Icon src={info.icon}/>
                <p>{info.text}</p>
              </div>
            ))
          }
          </Info>
        </div>
      </div>
    </Padding>
  </Bg>
)
export default index
