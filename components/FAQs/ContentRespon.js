import react from 'react'
import styled from 'styled-components'
import Content from '../FAQs/ContentFAQs'
import {compose,lifecycle,withState} from 'recompose'

const ImgLefe = styled.img`
  width:20vw;
  @media (max-width:720px) {
    width:20vw;
    margin: auto;
  }
`
const ImgRight = styled.img`
  width:10vw;
  @media (max-width:720px) {
    width:20vw;
    right:0;
  }  
`

const Box = styled.div`
  min-height: 10vw;    
  background-color:#FBFBEF;
  opecity:0.8;
  margin-top:1vw;
  margin-bottom:1vw;
  border-radius: 10px; 
  padding:1vw;
  @media (max-width:720px) {
    width:42.5vw;
  }
  ${props=>props.primary && `
    background-color:#FFFFFF;
  `}

`

const Black = styled.p`
  color: #000000;
  font-size:1em;
`


const ContentRespon = (props) => (
  <div className="container ">
    <div className="row">
      <div className="col-4">
        <div className=" align-self-center">
          <ImgLefe src={props.iconl.iconl} />
        </div>
      </div>
      <div className="col-8">
        <Box><Black dangerouslySetInnerHTML={{__html: props.Q}}/></Box>
      </div>
    </div>
    <div className="row">
      <div className="col-8">
        <Box primary><Black dangerouslySetInnerHTML={{__html: props.A}}/></Box>
      </div>
      <div className="col-4">
          <ImgRight src={props.iconr.iconr} />
      </div>
    </div>
  </div>

)
export default compose(
  withState('iconl','setIconl',''),
  withState('iconr','setIconr',''),
  lifecycle({
    componentDidMount() {
      let iconr = JSON.parse(window.localStorage.getItem("color"))
      this.props.setIconr(iconr)
      let iconl = JSON.parse(window.localStorage.getItem("color"))
      this.props.setIconl(iconl)
    }
  })
)(ContentRespon)
