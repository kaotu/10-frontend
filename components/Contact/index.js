import react from 'react'
import Bg from '../Core/BgStory.js'
import styled from 'styled-components'
import HeartBox from './HeartBox'
import Footer from '../Core/Footer'

const DivWhere = styled.div`
  top:200px;
  text-align: center;    
  width: 100%;  
`
const ImgLeft = styled.img`
  width:40%;
  margin-left:8em;
  padding-top:4em;
  @media(max-width:720px) {
    width:10%;
    margin-left:0em;
    padding-top:2em;           
  }
`
const ImgCenter = styled.img`
  width:10%;
  margin-top:2vw;
  margin-right:1em;
  cursor:pointer;
  padding-top:3em;
  @media(max-width:720px) {
    width:10%;
    margin-right:1em;
    padding-top:2em;           
  }
`
const ImgRight = styled.img`
  width:50%;
  right:0;
  margin-right:8em;
  padding-top:1.5em;
  padding-top:5em;
  @media(max-width:720px) {
    width:10%;
    margin-right:0em;
    padding-top:4em;           
  }
`

const index = () => (
  <DivWhere>
    <Bg className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Contact</h1>
            <p>ติดต่อเรา</p>
            <div className="row">
              <div className="col-sm ">
                <ImgLeft src="/static/image/ContactPhone.svg" />
                <p>088-8888-888</p>
              </div>
              <div className="col-5-sm ">
                <ImgCenter src="/static/image/Facebook.svg" />
                <ImgCenter src="/static/image/Youtube.svg" />
                <ImgCenter src="/static/image/Ig.svg" />
                <ImgCenter src="/static/image/Lineicon.svg"/>
                <ImgCenter src="/static/image/Twitter.svg"/>
              </div>
              <div className="col-sm ">
                <ImgRight src="/static/image/ContactMail.svg" />
                <p>konlao@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <HeartBox/>
          </div>
          </div>
          <div className="row">
          <div className="col-md-12">
            <Footer/>
          </div>
          </div>
      </div>
    </Bg>
  </DivWhere>
)
export default index