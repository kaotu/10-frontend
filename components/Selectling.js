import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Box1 from '../components/boxling'

<<<<<<< HEAD
const Box = styled.div`
    background-color: red;
    width: 100vw;
    /* min-height: 290px; */
    height: 50vh;
    padding-right: 0px;
    padding-left: 0px;
`
=======
>>>>>>> adef320... no message
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
