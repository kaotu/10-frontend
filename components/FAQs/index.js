import react from "react";
import Bg from "../Core/BgStory.js";
import styled from "styled-components";
import Content from "./ContentFAQs";
import Respon from "./ResponFAQs";
import H1 from "../Core/FontH1";
import H2 from "../Core/FontH2";
import Color from "../Core/Color";

const DivWhere = styled.div`
  top: 200px;
  width: 100%;
`;

const DisplayDesktop = styled.div`
    margin-bottom: 10%; 
  @media (max-width: 720px) {
    display: none;
  }
`;
const DisplayMoblie = styled.div`
  margin-bottom: 10%;
  @media (min-width: 720px) {
    display: none;
  }
`;
const DisplayMoblie2 = styled.div`
  @media (max-width: 720px) {
    margin-top: 20px;
  }
`

const Space = styled.div`
  margin-top: 5%;
`

const Relative = styled.div`
  position : relative;
`

const index = props => (
  <DivWhere>
    <Relative>
    <Bg bgColor={Color.mongkey.faqs } className="">
      <div className="container-fluid">
        <div className="row">
          <Space className="col-md-12">
            <H1 className="text-center">FAQs</H1>
            <H2 className="text-center">คำถามที่พบบ่อย ?</H2>
            <DisplayMoblie2 />
          </Space>
        </div>
        <DisplayDesktop>
          <Content />
        </DisplayDesktop>
        <DisplayMoblie>
          <Respon />
        </DisplayMoblie>
        <br />
      </div>
    </Bg>
    </Relative>
  </DivWhere>
);
export default index;
