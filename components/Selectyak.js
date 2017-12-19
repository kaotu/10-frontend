import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Box = styled.div`
    background-color: blue;
    width: 100%;
    height: 50%;
    max-height: 100%;
`
const Text = styled.h3`
    padding-right:10%;
    padding-left:10%;
    padding-top: 10%;
    padding-bottom:0px;
    
    `
const Choose = styled.h5`
    padding-top:0px;
    padding-left:10%;
    padding-bottom:11%;
    
`

const Select =()=> (
    <div>
        <Link href="/whatyak">    
            <Box>
            <h1 className><center>เลือกตัวละคร</center></h1>
                <div className="container progress wide"> 
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '50%'}}>50%</div>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '50%'}}>50%</div>
                </div>
                <Text>ทีมพี่ยักษ์</Text>
                <Choose>เลือก</Choose>
            </Box>
        </Link>
    </div>
)
export default Select;