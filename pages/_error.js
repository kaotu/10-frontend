import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import injectGlobal from '../components/global-style'

injectGlobal()

const Container = styled.div`
  height: 100vh;
  margin-top: -100vh;
`

const Background = styled.div`
  height: 100vh;
  background: linear-gradient(to top , rgba(0,0,0,.65),rgba(255, 51, 0,1));
`

const StyledContainer = styled.div`
  background: red;
  height:100vh;
  position: relative;
  background:url('../static/image/error/when.png');
  background-size:cover;
`

const ErrorBlock = styled.div`
  position: absolute;
`

const StatusMsg = styled.span`
  color: black;
`
const Button1 = styled.button`
  width: auto;
  display:inline-block;
  color:#fff;
  font-size:1.4em;
  text-decoration:none;
  border-radius:5px;
  border:solid 1px #fff;
  background:transparent;
  text-align:center;
  padding: .5em 1em;
  transition: all .3s;
  margin-bottom:5%;
  margin-right:1.5vw;
  z-index:1000;
  cursor:pointer;
  transition:all 200ms ease-in-out;
  &:hover{
    background:#fff;
    color:#000;
  }
`
const TextError = styled.h1`
  color:#fff;
`

const Error = ({statusCode}) => (
  <StyledContainer>
    <Background />
    <Container className="d-flex justify-content-center align-items-center flex-column">
      <div className="row">
        <div className="col-12 text-center">
          <TextError>น้องเอ๋ย เจ้ามาผิดทาง</TextError>
          <Link href="/">
            <Button1>กลับไปทางสว่าง</Button1>
          </Link>
        </div>
      </div>
    </Container>
  </StyledContainer>
)

export default Error
