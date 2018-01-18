import react from 'react'
import Bg from '../Core/BgStory.js'
import styled from 'styled-components'

const Img = styled.img`
width:50%;
`

const index = () => (
    <DivWhere>
        <Bg>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <Img src="static/image/LookOver-01.svg" className="img-responsive"/>
                    </div> 
                    <div className="col-md-6">
                            <h1>Where</h1>
                            <span>ค่ายนี้จัดที่ไหน</span>
                        <div>
                            <Img src="static/image/SITLOGO.png"/>
                        </div>
                        <div>คลิกที่รูปภาพเพื่อดูแผนที่</div>
                    </div>
                </div>
            </div>
        </Bg>
    </DivWhere>
)
export default index