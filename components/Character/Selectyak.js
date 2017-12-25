import React from 'react'
import styled from 'styled-components'

import Yak from './Yak'
import Teamyak from './Teamyak'
import MoveUp from '../PageTransition/MoveUp';


const Img = styled.div`
    background-image: url('../../static/image/kanok.svg');
    width: 100%;
    height: 50vh;
    max-height: 100%;
    
`
const Box = styled.div`
    background-color:transparent;
    height: 50vh;
`
const Choose = styled.h5`
    background-color: #295949;
    width: 100%;
    height: 100vh;
    max-height: 100%;
    cursor: pointer;
    div:hover {
        /* ใส่รูปพื้นหลังผ่าครึ่งตรงนี้ */
        background-image: url('../../static/image/Artboardyak.svg');
        background-size: 100%;
        transition: 1s;
    }
    
    @media (max-width: 720px) {
        height: 50vh;
    }
`


const Select = props => (
    <div>
            <Box >
                <Img>
                    <Teamyak/> 
                    <div className="d-flex justify-content-end">
                        <Yak />
                    </div>
                </Img>
            </Box> 
    </div>
)


export default Select