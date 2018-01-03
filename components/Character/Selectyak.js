import React from 'react'
import styled from 'styled-components'

import MoveUp from '../PageTransition/MoveUp';

const ImgBox = styled.div`
    padding: 0px;
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

const Model = styled.img`
    height: 100%;
`

const Text = styled.img`
    margin-top: 50%;
`

const Select = props => (
    <Box className="row">
        <ImgBox className="col-sm-6">   
            <Text className="img-fluid" src="../../static/image/Teamyak.png"/>   
        </ImgBox>
        <ImgBox className="col-sm-6 text-right">                
            <Model class="img-fluid" src="../../static/image/Giant.svg"/>     
        </ImgBox>
    </Box>
)


export default Select