import React from 'react'
import styled from 'styled-components'

import Yak from './Yak'
import Teamyak from './Teamyak'
import MoveUp from '../PageTransition/MoveUp';


const ImgBox = styled.div`
    /* background-image: url('../../static/image/kanok.svg'); */
    padding: 0px;
    /*width: 100%;
    height: 100vh;
    @media (max-width: 720px) {
        height: 50vh;
    }*/
`
const Box = styled.div`
    margin: 0px;
    background-color: #295949;
    height: 100%;
    cursor: pointer;
    &:hover {
        /* ใส่รูปพื้นหลังผ่าครึ่งตรงนี้ */
        background-image: url('../../static/image/Artboardyak.svg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    
    @media (max-width: 720px) {
        height: 50%;
    }
`


const Select = props => (
    <Box className="row">
        <ImgBox className="col-sm-6">   
            <Teamyak />   
        </ImgBox>
        <ImgBox className="col-sm-6 text-right">                
            <Yak />      
        </ImgBox>
    </Box>
)


export default Select