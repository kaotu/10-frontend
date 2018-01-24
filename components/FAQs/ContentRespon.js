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

const Box = styled.div`
  width: 46vw;
  height: 20vw;    
  padding: 1vw;
  background-color:#FBFBEF;
  opecity:0.8;
  margin-top:1vw;
  margin-bottom:1vw;
  border-radius: 10px; 

  @media (max-width:720px) {
    width:42vw;
  }
`

const ContentRespon = () => (
    
    <div className="container-fluid">        
        <div className="row">
            <div className="col-3">
                <div className="img-responesive align-self-center">
                    <ImgLefe src="/static/image/question.svg" />
                </div>
            </div>
            <div className="col-9">
                <Box>Q : อยากเป็นส่วนนึงของค่ายนี้มากๆ ต้องทำอย่างไร ?</Box>
            </div>
        </div>
        <div className="row">
            <div className="col-9">
                <Box>A : น้องๆ เพียงแค่ตอบคำถามในการสมัครด้วยตนเองเพื่อแสดงถึงตัวตนของน้องๆ และมีความตั้งใจในการตอบคำถาม</Box>
            </div>
            <div className="col-3">
                <div className="col img-responesive align-self-center">
                    <ImgRight src="/static/image/question.svg" />
                </div>
            </div>
        </div>
    </div>
    
)
export default ContentRespon
