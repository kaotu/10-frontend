import React from "react";
import styled from "styled-components"
import { compose, withState, lifecycle } from "recompose"
import Bg from "../Core/BgStory"
import ResponWho from "./responWho"
import Block from "./Block"
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'
import Color from '../Core/Color'

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
  @media (max-width:720px) {
    width: 50%;
    padding: .2em;
  }
`
const IconData = [
  { id: 0, image: "/static/image/edu.png" },
  { id: 1, image: "/static/image/computer.png" },
  { id: 2, image: "/static/image/Mom.png" },
  { id: 3, image: "/static/image/night.png" }
]

const PositionTextBox =[
  "12%",
  "36.5%",
  "60.5%",
  "85.5%"
]

const Icon = styled.div`
  margin-top: 5%;
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
  @media (max-width: 720px) {
    text-align: center;
    margin-bottom : 25px;
  }
`
const Padding = styled.div`
  padding : 4vw;
`

const index = props => (
  <Bg bgColor={Color.mongkey.who} who className="d-flex align-items-center">
    <Padding className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 order-2 order-md-1">
          <Mobile>
            <H1 className="text-center">WHO</H1>
            <H2 className="text-center">ค่ายนี้เหมาะกับใคร</H2>
          </Mobile>
          <HideMobile>
            <Icon className="row">
              {
                IconData.map((data, i) => (
                <div key={i} className="col-3" onClick={() => props.setCheck(data.id)}>
                  <Image src={data.image} />
                </div>
              ))
              }
            </Icon>
            <div className="mt-5">
              <Block left= {`${PositionTextBox[props.checkButton]}`}>
                <h4>
                  <strong>{`${Topic[props.checkButton]}`}</strong>
                </h4>
                <p>{`${Content[props.checkButton]}`}</p>
              </Block>
            </div>
          </HideMobile>
          <HideDesktop>
            <ResponWho />
          </HideDesktop>
        </div>
        <div className="col-12 col-md-6 order-1 order-md-2">
          <img src="/static/image/Whomoutain.svg" />
        </div>
      </div>
    </Padding>
  </Bg>
);
export default compose(state)(index)
