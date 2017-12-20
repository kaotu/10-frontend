import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Box1 from '../components/boxling'

const Box = styled.div`
    background-color: red;
    width: 100%;
    height: 50vh;
    max-height: 100%
`

const Text = styled.h3`
    padding-right:10%;
    padding-top: 5%;
    padding-bottom:0px;
    text-align: right;
`
const Choose = styled.h5`
    padding-top:0px;
    padding-right:10%;
    padding-bottom:11%;
    text-align: right;
`

const Select =()=> (
    <div>
        <Link href="/whatling">    
            <Box1>
                
                <Text>ทีมพี่ลิง</Text>
                <Choose>เลือก</Choose>
            </Box1>
        </Link>
        
    </div>
)
export default Select;
