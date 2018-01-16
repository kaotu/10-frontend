import react from 'react'
import Bg from '../Core/BgStory.js'
import styled from 'styled-components'

const DivWhere = styled.div`
    top:200px;
    text-align: center;    
    width: 100%;  
    
`
const Img = styled.img`
width:50%;
`


const index = () => (
    <DivWhere>    
        <Bg>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6"><Img src="../../static/image/LookOver-01.svg" className ="img-responsive"></Img></div>
                <div className="col-md-6">
                    <div className="display-1">Where ค่ายนี้จัดที่ไหน</div>
                    <div className ><img src="../../static/image/SITLOGO.png"></img></div>
                    <div className>คลิกที่รูปภาพเพื่อดูแผนที่</div>
                </div>
            </div>
        </div>
        </Bg>
    </DivWhere>        
)
export default index