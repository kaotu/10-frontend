import React from "react";
import styled from "styled-components";
import { compose, withState, lifecycle } from "recompose";

import Bg from "../Core/BgStory";
import ResponWho from "./responWho";
import Block from "./Block";

const state = withState("checkButton", "setCheck", 0);

const Topic = [
  "น้อง ๆ มัธยมศึกษาตอนปลาย",
  "น้อง ๆ ที่มีความสนใจด้านไอที",
  "น้อง ๆ ที่ได้รับอนุญาตจากผู้ปกครอง",
  "น้อง ๆ ที่สามารถอยู่ร่วมค่ายค้างคืนได้"
];
const Content = [
  "แผนกการเรียนวิทย์-คณิต, ศิลป์-คำนวณ หรือสาขาใกล้เคียง",
  "หรือต้องการค้นหาตนเองเพื่อศึกษาต่อในระดับมหาวิทยาลัย",
  "โดยมีเอกสารเป็นลายลักษณ์อักษรถูกต้อง",
  "ตลอดระยะเวลา 5 วัน"
];
const IconData = [
  { id: 0, image: "/static/image/question.svg" },
  { id: 1, image: "/static/image/question.svg" },
  { id: 2, image: "/static/image/question.svg" },
  { id: 3, image: "/static/image/question.svg" }
];

const Icon = styled.div`
  margin-top: 5%;
  cursor: pointer;
`;
const HideMobile = styled.div`
  @media (max-width: 720px) {
    display: none;
  }
`;
const HideDesktop = styled.div`
  @media (min-width: 721px) {
    display: none;
  }
`;
const Mobile = styled.div`
  text-align: right;
  @media (max-width: 720px) {
    text-align: center;
  }
`;

const index = props => (
  <Bg who className="d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 order-2 order-md-1">
          <Mobile>
            <h1>WHO</h1>
            {/* {`${props.checkButton}`} */}
            <span>ค่ายนี้เหมาะกับใคร</span>
          </Mobile>
          <HideMobile>
            <Icon className="row">
              {IconData.map(data => (
                <div className="col-3" onClick={() => props.setCheck(data.id)}>
                  <img src={data.image} />
                </div>
              ))}
            </Icon>
            <div className="mt-5">
              <Block>
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
          <img src="/static/image/halfHill.svg" />
        </div>
      </div>
    </div>
  </Bg>
);
export default compose(state)(index);
