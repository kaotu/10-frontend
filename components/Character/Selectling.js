import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Ling from './Ling'
import Teamling from './Teamling'

const Img = styled.div`
    background-image: url('../../static/image/kanok.svg');
    width: 100%;
    height: 100vh;
    @media (max-width: 720px) {
        height: 50vh;
    }
`

const Box = styled.div`
    background-color: #002D40;
    width: 100%;
    height: 50vh;
    max-height: 100%
    
`
const Choose = styled.h5`
    font-family: 'My custom family';
    color : #FFA644;
    padding-top:0px;
    padding-right:0%;
    padding-bottom:11%;
    text-align: right;
    display: flex;
    position: absolute;
    z-index: 2;
    margin-top: 54%;
    margin-left: 81%;

    @media (max-width:720px) {
        margin-left: 74.5%;
    }
`

const Select =()=> (
    <div>
        <Link href="/what-l">
        {/* <Bgling>    */}
            <Box>
                <Img>
                <Teamling/>
                <Choose>เลือก</Choose>  
                <Ling/>
                </Img>             
            </Box>
            {/* </Bgling> */}
        </Link>
        
    </div>
)
export default Select;
