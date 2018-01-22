import react from 'react'
import styled from 'styled-components'
import Content from '../FAQs/ContentFAQs'

const ImgLefe = styled.img`
  width:5vw;
  margin-left:8vw;

  @media (max-width:720px) {
    width:8vw;
    margin: auto;
  }
`
const ImgRight = styled.img`
  width:5vw;
  margin-left:1vw;

  @media (max-width:720px) {
    width:8vw;
    margin: auto;
  }  
`

const BoxR = styled.div`
  width: 46vw;
  height: 35hw;    
  padding: 1vw;
  background-color:white;
  opecity:0.8;
  margin-top:1vw;
  margin-bottom:1vw;

  @media (max-width:720px) {
    width:42vw;
  }
`
const BoxL = styled.div`
  width: 49vw;
  height: 35hw;    
  padding: 1vw;
  background-color:white;
  opecity:0.8;
  margin-top:1vw;
  margin-bottom:1vw;

  @media (max-width:720px) {
    width:42vw;
  }

`


const ContentRespon = () => (
    
    <div className="container-fluid bg-secondary">        
        <div class="row">
            <div className="col-3">
                <div className="img-responesive align-self-center">
                    <ImgLefe src="/static/image/question.svg" />
                </div>
            </div>
            <div className="col-9 bg-dark">
                <BoxR>คำถาม</BoxR>
            </div>
        </div>
        <div className="row">
            <div className="col-9 bg-dark">
                <BoxL>คำตอบ</BoxL>
            </div>
            <div className="col-3">
                <div class="col img-responesive align-self-center">
                    <ImgRight src="/static/image/question.svg" />
                </div>
            </div>
        </div>
    </div>
    
)
export default ContentRespon