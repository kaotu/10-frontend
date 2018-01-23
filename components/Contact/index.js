import react from 'react'
import Bg from '../Core/BgStory.js'
import styled from 'styled-components'
import HeartBox from './HeartBox'
import Footer from '../Core/Footer'

const DivWhere = styled.div`
  top:2000px;
  text-align: center;    
  width: 100%;  
`
const ImgLeft = styled.img`
  // margin-left:8em;
  padding-top:2em;
  width:15vw;
  @media(max-width:720px) {
    margin-left:0em;
    padding-top:2em;           
  }
`
const ImgCenter = styled.img`
  width:13%;
  margin-right:1em;
  cursor:pointer;
  padding-top:3em;
  @media(max-width:720px) {
    margin-right:1em;
    padding-top:2em;           
  }
`
const ImgRight = styled.img`
  right:0;
  width : 15vw;
  // margin-right:8em;
  padding-top:2em;
  // padding-top:5em;
  @media(max-width:720px) {
    margin-right:0em;
    padding-top:4em;           
  }
`
const Line = styled.div`
border-left: thick solid #fff;
border-right: thick solid #fff;

`

const index = () => (
  <DivWhere>
    <Bg contact className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Contact</h1>
            <p>ติดต่อเรา</p>
            <div className="row">
              <div className="col-sm-3 col-md-3 img-responsive">
                <ImgLeft src="/static/image/ContactPhone.svg" />
                <p>088-8888-888</p>
              </div>
              <Line className="col-sm-6 col-md-6">

                <ImgCenter src="/static/image/Facebook.svg" />
                <ImgCenter src="/static/image/Youtube.svg" />
                <ImgCenter src="/static/image/Ig.svg" />
                <ImgCenter src="/static/image/Lineicon.svg"/>
                <ImgCenter src="/static/image/Twitter.svg"/>
              </Line>
              <div className="col-sm-3 col-md-3 img-responsive">
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