import React from 'react'
import styled from 'styled-components'
import {compose , lifecycle , withState} from 'recompose'
import Navbar from '../Core/Navbar'
import Bg from '../Core/BgStory'
import Cloud from './cloud'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'
import Color from '../Core/Color'
import theme from '../Intro/Background'

const Info = styled.div`
  margin-top: 5%;
`
const Test = styled.div`
  padding: 2px;

`

const Icon = styled.img`
  width:5em;
  @media (max-width:720px) {
    padding: .2em;
  }
`

const Mobile = styled.div`
  @media (max-width:720px) {
    text-align:center;
  }
`

const IconInfo = [
  {icon : "/static/image/Java prog.png", text: "Java Programming",t:"Java Programming"},
  {icon : "/static/image/itfun.png", text: "IT Fundamentals",t:"IT Fundamentals"},
  {icon : "/static/image/network.png", text: "Network",t:"Network"},
  {icon : "/static/image/web.png", text: "HTML5&CSS",t:"HTML5&CSS"}
]


const Space = styled.div`
  margin-top: 4.5%;
  margin-bottom: 10%;
  border: .2em solid rgba(57, 63, 102, 0.2);
  background-color: rgba(57, 63, 102, 0.2);
  border-radius: 2em;
  padding:2em;
`
const Relative = styled.div`
  position: relative;
  height:100vh;
`
const Moutain = styled.img`
  position: absolute;
  z-index: 0;
  bottom: 0vh;
`

const Bggueng = styled.div`
  background: ${props => props.themeColor || ''};
`

const Hidden = styled.div`
  @media(max-width:720px) {
    display: none;
  }
`
const BoxContent = styled.div`
border:  solid white;
`

const index = props => (
  // <Bg bgColor={Color.mongkey.what} className="">
  
  <Bggueng themeColor={props.bgColor.what}>
  <Relative>
    <Moutain src='/static/image/MoutainWho.svg'/>
    <div className="container px-5">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          {/* <Cloud /> */}
        </div>
        <Hidden className="col-lg-4"></Hidden>
       
        <Space className="col-12 col-sm-12 col-md-12 col-lg-8">
          <div className="row">
              <Mobile className="text-center col-12">
                <H1>WHAT</H1>
                <H2>ค่ายนี้คืออะไร ?</H2>
              </Mobile>
              <br />
            <div className="col-12">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;<strong>ครบรอบทศวรรษกับ ค่ายเส้นทางสู่ฝันนักไอที (WIP Camp)</strong> จะพาน้อง ๆ ออกตามล่าหากล่องดวงใจไปพร้อมกับเหล่ากองทัพยักษ์และกองทัพลิง 
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;<strong>ศึกครั้งนี้</strong> น้อง ๆ จะได้พบกับการเรียนจริง, เล่นจริง และปฏิบัติจริง ตลอดระยะเวลา 5 วัน 4 คืน ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี ไม่จำเป็นต้องมีพื้นฐาน ไม่ต้องกลัวกับการเผชิญหน้า จะรอช้าอยู่ใย มาร่วมพิชิตศึกตามล่ากล่องดวงใจไปด้วยกัน!    
              </p>
            </div>  
          </div>
          <Info className="row text-center">
          { 
            IconInfo.map((info, i) => (
              <Test key={i} className="col-6 col-md-3 img-responesive ">
                <Icon src={info.icon} alt={info.t}/>
                <p>{info.text}</p>
              </Test>
            ))
          }
          </Info>
        </Space>
         
      </div>
    </div>
    </Relative>
    </Bggueng>
  // </Bg>
)
export default compose (
  withState('bgColor','setBgColor',''),
  lifecycle({
    componentDidMount() {
      let theme = window.localStorage.getItem("color")
      const themeColor = JSON.parse(theme)
      this.props.setBgColor(themeColor)
    }
  })
)(index)
