import React from 'react'
import styled from 'styled-components'

import Ling from './Ling'
import Teamling from './Teamling'

const ImgBox = styled.div`
    padding: 0px;
`

const Box = styled.div`
    margin: 0;
    background-color: #002D40;
    height: 100%;
    cursor: pointer;
    &:hover {
        /* ใส่รูปพื้นหลังผ่าครึ่งตรงนี้ */
        background-image: url('../../static/image/Artboardling.svg');
        background-repeat: no-repeat;
        background-size: cover;
    }

    @media (max-width: 720px) {
        height: 50%;
    }
`

const Select = () => (
    <Box className="row">
        <ImgBox className="col-sm-6">                 
            <Ling />     
        </ImgBox>
        <ImgBox className="col-sm-6">  
            <Teamling />    
        </ImgBox>
    </Box>
)
export default Select
