import React from 'react'
import styled from 'styled-components'

const Relative = styled.div`
  position : relative;
`
const Img = styled.img`
  width: 70%;
  height: 90%;
  @media(max-width: 720px){
    width: 100%;
    height: auto%;   
  }
`
const Bg = styled.div`
  background-color: #444B52;
`

const Button = styled.img`
  width: 40%;
  height: 20%; 
  @media(max-width:800px){
    width: 80%;
    height: 50%; 
  }
`

const A = styled.a`
  position: absolute;
  z-index: 1; 
  // @media(max-width:800px){
  //   position: static;
  //   z-index:0;
  // } 
`

const index =()=> (
  <Relative>
    <Bg className="row">
      <div className="col-12 d-flex justify-content-center align-items-center">
        <Img src="/static/image/gameStone.png"/>
        <A href="/faqs" className="d-flex justify-content-center">
          <Button src="/static/image/gameButton.png"/>
        </A>
      </div>
    </Bg>
  </Relative>
)
export default index

