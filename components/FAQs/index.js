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

const FrontFQAS = styled.h1`
  color: #000000;
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
        <Bg faqs className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <FrontFQAS>FAQs</FrontFQAS>
                        <p>คำถามที่พบบ่อย</p>
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