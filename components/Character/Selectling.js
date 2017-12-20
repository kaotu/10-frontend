import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
<<<<<<< HEAD
import Box1 from '../components/boxling'
=======
import Ling from './Ling'
>>>>>>> 1d8f38c... component yak ling

const Box = styled.div`
    background-color: red;
    width: 100%;
    height: 50vh;
    max-height: 100%
`

const Text = styled.h3`
    padding-right:20%;
    padding-top: 5%;
    padding-bottom:0px;
    text-align: right;
    @media (max-width: 576px) {
        font-size: 4rem;
    }
`
const Choose = styled.h5`
    padding-top:0px;
    padding-right:20%;
    padding-bottom:11%;
    text-align: right;
    @media (max-width: 576px) {
        font-size: 3rem;
    }
`

const Select =()=> (
    <div>
        <Link href="/what-l">    
            <Box>
                <Text>ทีมพี่ลิง</Text>
                <Choose>เลือก</Choose>  
                <Ling/>             
            </Box>
        </Link>
        
    </div>
)
export default Select;
