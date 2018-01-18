import react from 'react'
import Bg from '../Core/BgStory'
import styled from 'styled-components'

const Img = styled.img`
    width:40vw;
`

const Mobile = styled.div`
    text-align: right;
    @media (max-width:720px) {
        text-align:center;
    }
`

const index = () => (
    <Bg className="d-flex align-items-center">
        <div className="container">
            <div className="row">
                <div className="col-8 order-2 text-right">
                    <Img src="/static/image/Climing.svg" />
                </div>
                <div className="col-4 order-1">
                    <Mobile>
                        <h1>WHEN</h1>
                        <span>ค่ายนี้จัดเมื่อไหร่</span>
                    </Mobile>
                </div>                
            </div>
        </div>
    </Bg>
)
export default index