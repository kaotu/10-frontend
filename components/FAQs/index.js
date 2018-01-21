import react from 'react'
import Bg from '../Core/BgStory.js'
import styled from 'styled-components'
import Content from './ContentFAQs'
import Respon from './ResponFAQs'

const DivWhere = styled.div`
  top:200px;
  text-align: center;    
  width: 100%;  
`
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
const FrontFQAS = styled.h1`
  color: #000000;
`
const Box = styled.div`
  width: 47vw;
  height: 35hw;    
  padding: 1vw;
  background-color:white;
  opecity:0.8;
  margin-top:1vw;
`
const index = () => (
    <DivWhere>
        <Bg faqs className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <FrontFQAS>FAQs</FrontFQAS>
                        <p>คำถามที่พบบ่อย</p>
                    </div>
                </div>
                <Content />
                <Content />
                <Content />
                <Content />
                <Respon/>
            </div>
        </Bg>
    </DivWhere>
)
export default index