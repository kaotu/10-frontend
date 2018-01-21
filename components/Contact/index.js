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
  // margin-left:8em;
  padding-top:2em;
  width:15vw;
  @media(max-width:720px) {
    margin-left:0em;
    padding-top:2em;           
  }
`
const ImgCenter = styled.img`
  width:10%;
  margin-top:-21vw;
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
width:2px;
height:16vw;
background-color:white;
margin-top:3vw
@media(max-width:720px) {
            
}
`
const Line2 = styled.div`
width:2px;
height:16vw;
background-color:white;
margin-top:3vw

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
              <div className="col-sm-6 col-md-6">
              <Line/>
                <ImgCenter className="img-responsive" src="/static/image/Facebook.svg" />
                <ImgCenter className="img-responsive" src="/static/image/Youtube.svg" />
                <ImgCenter className="img-responsive" src="/static/image/Ig.svg" />
                <ImgCenter className="img-responsive" src="/static/image/Lineicon.svg"/>
                <ImgCenter className="img-responsive ml-auto" src="/static/image/Twitter.svg"/>
              <Line2/>
              </div>
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