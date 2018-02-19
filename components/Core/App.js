import React from "react"
import styled from 'styled-components'


import Intro from "../Intro/";
import injectGlobal from "../global-style";
import Scroll from "../Core/Scroll";
import What from "../What/index";
import Who from "../Who/index";
import Where from "../Where/index";
import When from "../When/index";
import Faqs from "../FAQs";
import Contact from "../Contact";
import Navbar from "../Core/Navbar";
import Sponsor from "../Sponsor/index";
import Loading from "../Core/Loading";
import Minicontent from "./minisize"
import Game from "../Game/index"



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
  overflow: hidden;
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

export default class App extends React.Component {
  state = {
    color: {}
  };

  setColor = async (theme) => {
    this.setState({
      color: theme
    })
    setTimeout(() => {
      
    }, 1000);
  }

  async componentWillMount() {
    console.log("%c We Are 10 Developer. ",'background:red; color:#000; display:block; font-size:3em; font-family:Pridi;')
    console.log('If you interest our code :) Join WIP Camp #10.')
  }

  async componentDidMount() {
    let theme = JSON.parse(window.localStorage.getItem("color"))
    this.setColor(theme)
    injectGlobal(theme.nav)
  }

  render() {
    return (
      <div>
        <Minicontent />
        <MiniSize>
          <Scroll>
            {/* <Loading /> */}
            <Relative>
              <Overflow id="home" name="home">
                <Intro color={this.state.color} setColor={this.setColor} />
              </Overflow>
              {/* <section id="sponsor">
         <Sponsor />
       </section> */}
              <Navbar id="navbar-desktop" color={this.state.color}/>
              <div
                data-spy="scroll"
                data-target="#navbar-desktop"
                data-offset="0"
                id="containerElement"
              >
                <section id="what" name="what">
                  <What color={this.state.color} />
                </section>
                <WhoWhere>
                  <section id="who" name="who">
                    <Who />
                  </section>
                  <section id="where" name="where">
                    <Where />
                  </section>
                  <Mountain src="/static/image/Who.png" />
                </WhoWhere>
                <Overflow id="when" name="when">
                  <When color={this.state.color}/>
                </Overflow>
                <Overflow id="faqs" name="faqs">
                  <Faqs color={this.state.color}/>
                </Overflow>
                <Overflow>
                    <Game/>
                </Overflow>              
                <Overflow id="contact" name="contact" className="element">
                  <Contact />
                </Overflow>
                <FooterBg
                  bgColor={this.state.color.nav}
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
  }
}
