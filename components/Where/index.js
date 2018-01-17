import react from 'react'
import Bg from '../Core/BgStory.js'
import styled from 'styled-components'

const Img = styled.img`
width:50%;
`

const index = () => (

    <Bg>
        <div className="container">
            <div className="row">
                <div className="col-md-6"><Img src="../../static/image/LookOver-01.svg" className="img-responsive"></Img></div>
                <div className="col-md-6">
                    <div className="display-4">Where ค่ายนี้จัดที่ไหน</div>
                    <div className ><img src="../../static/image/SITLOGO.png"></img></div>
                    <div className>คลิกที่รูปภาพเพื่อดูแผนที่</div>
                </div>
            </div>
        </div>
    </Bg>

)
export default index