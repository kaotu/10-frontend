import React from "react";
import styled from "styled-components"
import { compose, withState, lifecycle } from "recompose"
import BgStory from "../Core/BgStory"
import ResponWho from "./responWho"
import Block from "./Block"
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'
import Color from '../Core/Color'
import Router from 'next/router'

const state = withState("checkButton", "setCheck", 0)

const Topic = [
  "น้อง ๆ มัธยมศึกษาตอนปลาย",
  "น้อง ๆ ที่มีความสนใจด้านไอที",
  "น้อง ๆ ที่ได้รับอนุญาตจากผู้ปกครอง",
  "น้อง ๆ ที่สามารถอยู่ร่วมค่ายค้างคืนได้"
]
const Content = [
  "แผนการเรียนวิทย์-คณิต ศิลป์-คำนวณ หรือสาขาใกล้เคียง",
  "หรือต้องการค้นหาตนเองเพื่อศึกษาต่อในระดับมหาวิทยาลัย",
  "โดยมีเอกสารเป็นลายลักษณ์อักษรถูกต้อง",
  "ตลอดระยะเวลา 5 วัน 4 คืน"
]

const Bg = BgStory.extend`
  min-height: 100vh;
  overflow-x: hidden;
  @media(max-width:720px) {
    min-width:50vh;
  }
`

const Image = styled.img`
  width:7vw;
  transition:all 550ms ease-in-out;
  transition: .5s;
  width: ${props => props.active ? '7vw' : '6.5vw'};
  @media (max-width:720px) {
    width: 50%;
    padding: .2em;
  }
  &:hover{
    background: transparent;
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    border-radius: 0.5em;
    border: 4px solid transparent;
    
  }
  &.active{
  background: transparent;
  -moz-transform: scale(1.3);
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
  border-radius: 1em;
  border-radius: 0.5em;
  border: 4px solid transparent;
  }  
`

const PositionTextBox = [
  "14.5%",
  "39.5%",
  "65%",
  "91%"
]

const Icon = styled.div`
  margin-top: 10%;
  cursor: pointer;
  margin-left: 1%;
  margin-right: 1%;
`
const HideMobile = styled.div`
@media (max-width: 720px) {
  display: none;
}
`
const HideDesktop = styled.div`
@media (min-width: 721px) {
  display: none;
}
`
const Mobile = styled.div`
  text-align: center;
`

const Space = styled.div`
  margin-top: 20%;
  margin-bottom: 10%;
`

const H6 = styled.div`
  color: #fff;
`

const Relative = styled.div`
  position : relative;
  z-index:100;
`
const Zindex = styled.div`
  width:100vw;
`

const IconData = [
  { id: 0, image: "/static/image/moon.png", topic: 'น้อง ๆ ที่สามารถอยู่ร่วมค่ายค้างคืนได้', content: 'ตลอดระยะเวลา 5 วัน 4 คืน' },
  { id: 1, image: "/static/image/graduate.png", topic: 'น้อง ๆ มัธยมศึกษาตอนปลาย', content: 'แผนการเรียนวิทย์-คณิต ศิลป์-คำนวณ' },
  { id: 2, image: "/static/image/person.png", topic: 'น้อง ๆ ที่ได้รับอนุญาตจากผู้ปกครอง', content: 'โดยมีเอกสารเป็นลายลักษณ์อักษรถูกต้อง' },
  { id: 3, image: "/static/image/computer.png", topic: 'น้อง ๆ ที่มีความสนใจด้านไอที', content: 'หรือต้องการค้นหาตนเองเพื่อศึกษาต่อ' },
]

const H4 = styled.p`
  color: #000;
`

const H7 = H1.extend`
  margin-top : 10vh;
  @media (min-width: 1024px) {
    margin-top: 20vh;
  }
`




const index = (props) => (
  <Bg bgColor={Color.mongkey.who} who >
    <Relative>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="">
            <Mobile>
              <H7 className="text-center ">WHO</H7>
              <H2 className="text-center pb-5">ค่ายนี้เหมาะกับใคร ?</H2>
            </Mobile>
            {/* <HideMobile>
            <Icon className="row focus">
              {
                IconData.map((data, i) => ( 
                <div key={i} className="col-3" onClick={(e) => {
                  const activeImg = document.getElementsByClassName("who-img active");
                  if(activeImg.length) {
                    activeImg[0].classList.remove("active");
                  }
                  props.setCheck(data.id)
                  e.target.classList.add("active")
                } }>
                  <Image className={`who-img ${data.id === 0 ? 'active' : ''}`} src={data.image}/>
                </div>
              ))
              }
            </Icon>
            <H6 className="mt-5">
              <Block left= {`${PositionTextBox[props.checkButton]}`}>
                <h4>
                  <strong>{`${Topic[props.checkButton]}`}</strong>
                </h4>
                <p>{`${Content[props.checkButton]}`}</p>
              </Block>
            </H6>
          </HideMobile> */}
            <HideMobile>
              <div className="container">
                <div className="row">
                    {
                      IconData.map((data, i) =>
                        <div key={i} className="container-fluid d-flex justify-content-center">
                          <br />
                            <div className="col-6">
                              <div className="row ">
                                <div className="col-12 px-0 text-center">
                                  <Image src={data.image} />
                                </div>
                                <div className="col-12 px-0 text-center">
                                  <span><strong>{data.topic}</strong></span>
                                  <br />
                                  <span>{data.content}</span>
                                </div>
                              </div>
                            </div>
                                                 </div>
                      )
                    }
                </div>
              </div>
            </HideMobile>
            <HideDesktop>
              <ResponWho />
            </HideDesktop>
          </div>
        </div>
      </div>
    </Relative>
  </Bg>
)

export default compose(
  state,
  lifecycle({
    componentDidMount() {
      // let count = 0
      // setInterval( () => { this.props.setCheck(count) ; count++ ; count > 3 ? count = 0 : null}, 2000);
    }
  })
)(index)
