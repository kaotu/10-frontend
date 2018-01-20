
import react from 'react'
import styled from 'styled-components'

const ImgLefe = styled.img`
  width:20%;
  margin-left:15vw;
  right: 0;
`
const ImgRight = styled.img`
  width:20%;
  margin-right:15vw;
  right: 0;
`
const FrontFQAS = styled.p`
  color: #FFFFFF;
`
const Box = styled.div`
  width: 46vw;
  height: 35hw;    
  padding: 1vw;
  background-color:white;
  opecity:0.8;
  margin-top:1vw;
  margin-bottom:1vw;
`
const Content = () => (
	<div className="container-fluid">
		<div className="row d-flex">
			<div class="col img-responesive align-self-center">
				<ImgLefe src="/static/image/question.svg" />
			</div>
			<div class="col-6 bg-dark">
				<Box>ถามสิ่</Box>
			</div>
			<div class="col">
			</div>
		</div>
		<div className="row d-flex">
			<div class="col">
			</div>
			<div class="col-6 bg-dark">
				<Box>ตอบสิ่</Box>
			</div>
			<div class="col img-responesive align-self-center">
				<ImgRight src="/static/image/question.svg" />
			</div>
		</div>
	</div>
)
export default Content