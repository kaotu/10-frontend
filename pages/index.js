import React from "react";
import Intro from "../components/Intro/";
import injectGlobal from "../components/global-style";
import Scroll from "../components/Core/Scroll";
import What from "../components/What/index";
import Who from "../components/Who/index";
import Where from "../components/Where/index";
import When from "../components/When/index";
import Faqs from "../components/FAQs";
import Contact from "../components/Contact";
import Navbar from "../components/Core/Navbar";
import Sponsor from "../components/Sponsor/index";
import styled from "styled-components";
import { compose, lifecycle, withState } from "recompose";
import Loading from "../components/Core/Loading";

const Relative = styled.div`
  position: relative;
`;

const FooterBg = styled.div`
  min-height: 10vh;
  background-color: ${props => props.bgColor || ""};
`;

injectGlobal;

const index = props => (
  // <Loading>
    <Scroll>
      <Relative>
        <section id="home" name="home">
          <Intro />
        </section>
        <section id="sponsor">
          <Sponsor />
        </section>
        <Navbar id="navbar-desktop" />
        <div
          data-spy="scroll"
          data-target="#navbar-desktop"
          data-offset="0"
          id="containerElement"
        >
          <section id="what" name="what">
            <What />
          </section>
          <section id="who" name="who">
            <Who />
          </section>
          <section id="where" name="where">
            <Where />
          </section>
          <section id="when" name="when">
            <When />
          </section>
          <section id="faqs" name="faqs">
            <Faqs />
          </section>
          <section id="contact" name="contact" className="element">
            <Contact />
          </section>
          <FooterBg
            bgColor={props.color.nav}
            className="d-flex justify-content-center align-items-center text-white"
          >
            <div className="fa fa-code" aria-hidden="true" />&nbsp;with&nbsp;<div
              className="fa fa-heart"
              aria-hidden="true"
            />&nbsp;by 10 I'm Developer
          </FooterBg>
        </div>
      </Relative>
    </Scroll>
  // </Loading>
);

export default compose(
  withState("color", "setColor", ""),
  lifecycle({
    componentDidMount() {
      let theme = JSON.parse(window.localStorage.getItem("color"));
      this.props.setColor(theme);
    }
  })
)(index);
