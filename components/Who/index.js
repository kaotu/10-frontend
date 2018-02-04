import React from "react";
import styled from "styled-components"
import { compose, withState, lifecycle } from "recompose"
import Bg from "../Core/BgStory"
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
  "แผนกการเรียนวิทย์-คณิต, ศิลป์-คำนวณ หรือสาขาใกล้เคียง",
  "หรือต้องการค้นหาตนเองเพื่อศึกษาต่อในระดับมหาวิทยาลัย",
  "โดยมีเอกสารเป็นลายลักษณ์อักษรถูกต้อง",
  "ตลอดระยะเวลา 5 วัน"
]
const Image = styled.img`
    width:7vw;
    transition:all 550ms ease-in-out;
    transition: .5s;
    width: ${props => props.active ? '7vw': '6.5vw'};
  @media (max-width:720px) {
    width: 50%;
    padding: .2em;
  }
  &:hover{
    background: #fff;
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    border-radius: 0.5em;
    border: 4px solid #fff;
    
  }
  &.active{
  background: #fff;
  -moz-transform: scale(1.3);
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
  border-radius: 1em;
  border-radius: 0.5em;
  border: 4px solid #fff;
  }  
`

const PositionTextBox =[
  "12.7%",
  "39.4%",
  "65.25%",
  "91.7%"
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
text-align: right;
margin-top: 15%;
text-align: center;
@media (max-width: 720px) {
}
`

const Space = styled.div`
margin-top: 10%;
margin-bottom: 10%;
`

const H6 = styled.div`
  color: #fff;
`

const Bgmountain = styled.img`
position : absolute;
z-index : 0;
top : 0vh;
`

const Relative = styled.div`
position : relative
`

const IconData = [
  { id: 0, image: "/static/image/edu.png"},
  { id: 1, image: "/static/image/computer.png"},
  { id: 2, image: "/static/image/Mom.png" },
  { id: 3, image: "/static/image/night.png"}
]

const H4 = styled.p`
color: #000;
`


const index = (props) => (
  <Bg bgColor={Color.mongkey.who} who >
  <Relative>
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 order-2 order-md-1">
          <Mobile>
            <H1 className="text-center ">WHO</H1>
            <H2 className="text-center ">ค่ายนี้เหมาะกับใคร</H2>
          </Mobile>
          <HideMobile>
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
          </HideMobile>
          <HideDesktop>
            <ResponWho />
          </HideDesktop>
        </div>
      </div>
    </div>
    </Relative>
  </Bg>
);
export default compose(state)(index)
