import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Scorebar from './Scorebar'
import Yak from './Yak'

const Box = styled.div`
    background-color: blue;
    width: 100%;
    height: 50vh;
    max-height: 100%;
`
const Text = styled.h3`
    padding-right: 20%;
    padding-left: 20%;
    padding-top: 5%;
    padding-bottom:0px;
    @media (max-width: 576px) {
        font-size: 4rem;
    }    
`
const Choose = styled.h5`
    padding-top:0px;
    padding-left:20%;
    @media (max-width: 576px) {
        font-size: 3rem;
    }    
`

const Select =()=> (
    <div>
        
        <Link href="/what-y">
            <Box>
            <h1 className><center>เลือกตัวละคร</center></h1>
         <Scorebar/>
                <Text>ทีมพี่ยักษ์</Text>
                <Choose>เลือก</Choose>  
                <Yak/>
            </Box>         
        </Link>
    </div>
)
export default Select;