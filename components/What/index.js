import React from 'react'
import styled from 'styled-components'
import Navbar from '../Core/Navbar'
import Bg from '../Core/BgStory'
import Cloud from './cloud'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'
import Color from '../Core/Color'

const Info = styled.div`
  margin-top: 5%;
`
const Test = styled.div`
  padding: 2px;
`

const Icon = styled.img`
    width:7vw;
  @media (max-width:720px) {
    width: 50%;
    padding: .2em;
  }
`

const Mobile = styled.div`
  @media (max-width:720px) {
    text-align:center;
  }
`

const IconInfo = [
  {icon : "/static/image/Java prog.png", text: "Java Programming"},
  {icon : "/static/image/itfun.png", text: "IT Fundamentals"},
  {icon : "/static/image/network.png", text: "Network"},
  {icon : "/static/image/web.png", text: "HTML5&CSS"}
]

const IMG = styled.img`

  @media (min-width:800px){
    position: absolute;
    margin-top : 5vw;
    height : 55vw;
    margin-left : -55vw;
    }
  @media (min-width:900px){
    position: absolute;
    margin-bottom : 5vw;
    height : 40vw;
    margin-left : -30vw;
    }
  @media (min-width:1000px){
    position: absolute;
    margin-bottom : 5vw;
    height : 40vw;
    margin-left : -30vw;
    }
  @media (min-width:1100px){
    position: absolute;
    // margin-bottom : 5vh;
    margin-top: 0vh;
    margin-bottom: 0vh;
    height : 40vw;
    margin-left : -30vw;
      }
  @media (min-width:1200px){
    position: absolute;
    margin-top : -10vw;
    height : 45vw;
    margin-left : -40vw;
    border-top : -100px;
      }

`
const Padding = styled.div`
  @media (max-width:720px){
    margin-top:60px;
  }
`

const Bgm = styled.img`
  height : 100vw;
  z-index : 10;
`

const index = props => (
  <Bg bgColor={Color.mongkey.what} className="d-flex align-items-center">
  {/* <Bgm src = "../../static/ima

ge/1.svg"/> */}
    <Padding className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          <Cloud />
          
        </div>
        <div className="col-12 col-sm-12 col-md-12">
          <Mobile>
            <H1>WHAT</H1>
            <H2>ค่ายนี้คืออะไร ?</H2>
          </Mobile>
          <br />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;<strong>ครบรอบทศวรรษกับ ค่ายเส้นทางสู่ฝันนักไอที (WIP Camp)</strong> จะพาน้อง ๆ ออกตามล่าหากล่องดวงใจไปพร้อมกับเหล่ากองทัพยักษ์และกองทัพลิง 
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;<strong>ศึกครั้งนี้</strong> น้อง ๆ จะได้พบกับการเรียนจริง, เล่นจริง และปฏิบัติจริง ตลอดระยะเวลา 5 วัน 4 คืน ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี ไม่จำเป็นต้องมีพื้นฐาน ไม่ต้องกลัวกับการเผชิญหน้า จะรอช้าอยู่ใย มาร่วมพิชิตศึกตามล่ากล่องดวงใจไปด้วยกัน!    
          </p>
          <Info className="row text-center">
          { 
            IconInfo.map((info, i) => (
              <Test key={i} className="col-6 col-md-3 img-responesive ">
                <Icon src={info.icon}/>
                <p>{info.text}</p>
              </Test>
            ))
          }
          </Info>
        </div>
      </div>
    </Padding>
  </Bg>
)
export default index
