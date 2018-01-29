import react from 'react'
import styled from 'styled-components'
import Content from '../FAQs/ContentFAQs'

const ImgLefe = styled.img`
  width:10vw;
  @media (max-width:720px) {
    width:17vw;
    margin: auto;
  }
`
const ImgRight = styled.img`
  width:5vw;
  margin-left:0vw;
  @media (max-width:720px) {
    width:17vw;
    margin: auto;
  }  
`

const Box = styled.div`
  min-height: 10vw;    
  padding: 1vw;
  background-color:#FBFBEF;
  opecity:0.8;
  margin-top:1vw;
  margin-bottom:1vw;
  border-radius: 10px; 
  @media (max-width:720px) {
    width:44vw;
  }
`


const ContentRespon = (props) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-4">
        <div className="img-responesive align-self-center">
          <ImgLefe src="/static/image/hanumanscore-new-01.svg" />
        </div>
      </div>
      <div className="col-8">
        <Box><div dangerouslySetInnerHTML={{__html: props.Q}}/></Box>
      </div>
    </div>
    <div className="row">
      <div className="col-8">
        <Box><div dangerouslySetInnerHTML={{__html: props.A}}/></Box>
      </div>
      <div className="col-4">
        <div className="col img-responesive  ">
          <ImgRight src="/static/image/yakscore-new-01.svg" />
        </div>
      </div>
    </div>
  </div>

)
export default ContentRespon
