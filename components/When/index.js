import react from 'react'
import Bg from '../Core/BgStory'
import styled from 'styled-components'

const Img = styled.img`
    width:30vw
`

const index = () => (
    <Bg>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 order-md-2">
                    <Img src="../../static/image/Climing.svg" />
                </div>
                <div className="col-12 col-sm-12 col-md-6  order-md-1">
                    <h1 className="text-center">When</h1>
                    <h3 className="text-center">ค่ายนี้จัดเมื่อไหร่</h3>
                </div>                
            </div>
        </div>
    </Bg>
)
export default index