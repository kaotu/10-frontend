import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Ling from './Ling'
import Teamling from './Teamling'

const Box = styled.div`
    background-color: #002D40;
    width: 100%;
    height: 100vh;
    max-height: 100%;
    @media (max-width: 720px) {
        height: 50vh;
    }
`

const Choose = styled.h5`
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
                <Teamling/>
                <Choose>เลือก</Choose>  
                <Ling/>             
            </Box>
            {/* </Bgling> */}
        </Link>
        
    </div>
)
export default Select;
