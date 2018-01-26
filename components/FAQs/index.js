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
  @media (max-width: 720px) {
    display: none;
  }
`;
const DisplayMoblie = styled.div`
  @media (min-width: 720px) {
    display: none;
  }
`;
const DisplayMoblie2 = styled.div`
  @media (max-width: 720px) {
    margin-top: 20px;
  }
`;

const index = props => (
  <DivWhere>
    <Bg bgColor={Color.mongkey.faqs } className="d-flex align-items-center">
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-md-12 mt-4">
            <H1 className="text-center font-weight-bold">FAQs</H1>
            <H2 className="text-center font-weight-bold">คำถามที่พบบ่อย ?</H2>
            <DisplayMoblie2 />
          </div>
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
  </DivWhere>
);
export default index;
