import React from 'react'
import styled from 'styled-components'

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

const Model = styled.img`
    height: 100%;
`

const Text = styled.img`
margin-top: 50%;
`

const Select = () => (
    <Box className="row">
        <ImgBox className="col-sm-6">                 
            <Model class="img-fluid" src="../../static/image/Mongkey.svg"/>
        </ImgBox>
        <ImgBox className="col-sm-6">  
            <Text className="img-fluid" src="../../static/image/Teamling.png"/>    
        </ImgBox>
    </Box>
)
export default Select
