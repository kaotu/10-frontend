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
import Minicontent from "./minisize"

const Relative = styled.div`
  position: relative;
  /* overflow-x:hidden; */
`;

const FooterBg = styled.div`
  min-height: 10vh;
  background-color: ${props => props.bgColor || ""};
`;

const Overflow = styled.section`
  overflow:hidden;
`
const MiniSize = styled.div`
  @media(orientation:landscape)
  and (max-width:800px){
    display:none;
    background-color: black;!important
  }
`
const WhoWhere = styled.div`
  position: relative;
  overflow-x: hidden;
`
const Mountain = styled.img`
  position: absolute;
  z-index: 0;
  height: 200vh;
  top: 0vh;
  left: 50%;
  transform: translate(-50%, 0%);
  @media(min-width:412px) {
    height: 230vh;
  }
  @media(min-width:576px) {
    height: 180vh;
  }
  @media(min-width:576px) {
    height: 180vh;
  }
  @media(min-width:1024px) {
    height: 280vh;
  }
`
const index = props => (
 <div>
  <Minicontent/>
  <MiniSize>
    <Scroll>
      {/* <Loading /> */}
      <Relative>
        <Overflow id="home" name="home">
          <Intro />
        </Overflow>
        {/* <section id="sponsor">
          <Sponsor />
        </section> */}
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
          <WhoWhere>
          <section id="who" name="who">
            <Who />
          </section>
          <section id="where" name="where">
            <Where />
          </section>
          <Mountain src='/static/image/Who.png'/>
          </WhoWhere>
          <Overflow id="when" name="when">
            <When />
          </Overflow>
          <Overflow id="faqs" name="faqs">
            <Faqs />
          </Overflow>
          <Overflow id="contact" name="contact" className="element">
            <Contact />
          </Overflow>
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
   </MiniSize>  
   </div>

);

export default compose(
  withState("color", "setColor", ""),
  lifecycle({
    
    componentWillMount() {
      
      console.log("%c We Are 10 Developer. ",'background:red; color:#000; display:block; font-size:3em; font-family:Pridi;')
      console.log('If you interest our code :) Join WIP Camp #10.')
    },
    
    componentDidMount() {
      let theme = JSON.parse(window.localStorage.getItem("color"))
      this.props.setColor(theme)
      injectGlobal(theme.nav)
    }
  })
)(index);
