import React from 'react'
import styled from 'styled-components'

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
`

const Model = styled.img`
    height: 100%;
`

const Text = styled.img`
    margin-top: 50%;
`

const Select = props => (
    <Box className="row">
        <ImgBox className="col-6 col-sm-6 col-md-6">   
            <Text className="img-fluid" src="../../static/image/Teamyak.png"/>   
        </ImgBox>
        <ImgBox className="col-6 col-sm-6 col-md-6 text-right">                
            <Model class="img-fluid" src="../../static/image/Giant.svg"/>     
        </ImgBox>
    </Box>
)


export default Select