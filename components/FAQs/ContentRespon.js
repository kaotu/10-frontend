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
  min-height: 10vw;    
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

const ContentRespon = (props) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-3">
        <div className="img-responesive align-self-center">
          <ImgLefe src="/static/image/question.svg" />
        </div>
      </div>
      <div className="col-9">
        <Box><div dangerouslySetInnerHTML={{__html: props.Q}}/></Box>
      </div>
    </div>
    <div className="row">
      <div className="col-9">
        <Box><div dangerouslySetInnerHTML={{__html: props.A}}/></Box>
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
