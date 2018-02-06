import React from 'react'
import styled from 'styled-components'
import { compose, lifecycle, withState } from 'recompose'
import Navbar from '../Core/Navbar'
import Bg from '../Core/BgStory'
import Cloud from './cloud'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'
import Color from '../Core/Color'
import theme from '../Intro/Background'

const Info = styled.div`
  margin-top: 2%;
`
const Test = styled.div`
  padding: 1px;

`

const Icon = styled.img`
  width:7em;
  @media (min-width:320px) {
    width:4em;
  }
  @media (min-width:420px) {
    margin-top: 2%;
    width:5em;
  }
  @media (min-width:576px) {
    margin-top: 2%;
    width:5em;
  }
  @media (min-width:768px) {
    margin-top: 5%;
    width:7em;
  }
  @media (min-width:1024px) {
    margin-top: 5%;
    padding: .2em;
    width:7em;
  }
`
const P = styled.p`
font-size:1.2em;
@media (min-width:320px) {
  font-size:0.7em;
}
@media (min-width:420px) {
  font-size:1em;
}
@media (min-width:576px) {
  font-size:1em;
}
@media (min-width:768px) {
  font-size:1em;
}
@media (min-width:1024px) {
  font-size:1.2em;
}
`
const Mobile = styled.div`
  @media (max-width:720px) {
    text-align:center;
  }
`

const IconInfo = [
  { icon: "/static/image/icon-what/java (2).png", text: "Java Programming", t: "Java Programming" },
  { icon: "/static/image/icon-what/IT fun (1).png", text: "IT Fundamentals", t: "IT Fundamentals" },
  { icon: "/static/image/icon-what/network (2).png", text: "Network", t: "Network" },
  { icon: "/static/image/icon-what/web (2).png", text: "HTML5&CSS", t: "HTML5&CSS" }
]


const Space = styled.div`
  margin-top: 4.5%;
  margin-bottom: 10%;
  border: .2em solid transparent;
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
const Font = styled.p`
@media (min-width:320px) {
  font-size: 0.9em;
}
@media (min-width:412px) {
  font-size: 1em;
}
@media (min-width:576px) {
  font-size: 1.1em;
}
@media (min-width:768px) {
  font-size: 1.2em;
}
@media (min-width:1024px) {
  font-size: 1.3em;
}
`
const index = props => (
  // <Bg bgColor={Color.mongkey.what} className="">

  <Bggueng themeColor={props.bgColor.what}>
    <Relative>
      <Moutain src='/static/image/MoutainWho.svg' />
      <div className="container px-3">
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
                <Font>
                  &nbsp;&nbsp;&nbsp;&nbsp;<strong>ครบรอบทศวรรษกับ ค่ายเส้นทางสู่ฝันนักไอที (WIP Camp)</strong> จะพาน้อง ๆ ออกตามล่าหากล่องดวงใจไปพร้อมกับเหล่ากองทัพยักษ์และกองทัพลิง
              </Font>
                <Font>
                  &nbsp;&nbsp;&nbsp;&nbsp;<strong>ศึกครั้งนี้</strong> น้อง ๆ จะได้พบกับการเรียนจริง, เล่นจริง และปฏิบัติจริง ตลอดระยะเวลา 5 วัน 4 คืน ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี ไม่จำเป็นต้องมีพื้นฐาน ไม่ต้องกลัวกับการเผชิญหน้า จะรอช้าอยู่ใย มาร่วมพิชิตศึกตามล่ากล่องดวงใจไปด้วยกัน!
              </Font>
              </div>
            </div>
            <Info className="row text-center">
              {
                IconInfo.map((info, i) => (
                  <Test key={i} className="col-6 col-md-3 ">
                    <Icon src={info.icon} alt={info.t} />
                    <P>{info.text}</P>
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
export default compose(
  withState('bgColor', 'setBgColor', ''),
  lifecycle({
    componentDidMount() {
      let theme = window.localStorage.getItem("color")
      const themeColor = JSON.parse(theme)
      this.props.setBgColor(themeColor)
    }
  })
)(index)
