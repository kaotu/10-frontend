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

const FrontFQAS = styled.div`
  color: #000000;
  font-size: 65px;
  margin-top:-25px;
  margin-bottom:-25px;

`

const P = styled.div`
  font-size: 25px;
  margin-top: 0px;
  padding-top:0.5em;
`

const DisplayDesktop = styled.div`
@media (max-width:720px){
    display:none;
}
`
const DisplayMoblie = styled.div`
@media (min-width:720px){
     display:none;
}
`
const index = () => (
    <DivWhere>
        <Bg bgColor="#d9f1f2" faqs className="d-flex align-items-center">
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-12 mt-4">
                        <FrontFQAS className="text-center font-weight-bold">FAQs</FrontFQAS>
                        <P className="text-center font-weight-bold">คำถามที่พบบ่อย ?</P>
                    </div>
                </div>
                <DisplayDesktop>
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                </DisplayDesktop>
                <DisplayMoblie>
                <Respon/>
                </DisplayMoblie>
                <br/>
            </div>            
        </Bg>
    </DivWhere>
)
export default index
