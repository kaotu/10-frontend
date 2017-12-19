import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Box2 from '../components/boxyak'

const Box = styled.div`
    background-color: blue;
    width: 100vw;
    /* height: 50%; */
    /* min-height: 272px; */
    height: 50vh;
    padding-right: 0px;
    padding-left: 0px;
`
const Text = styled.h3`
    padding-right:10%;
    padding-left:10%;
    padding-top: 8%;
    padding-bottom:0px;
    
    `
const Choose = styled.h5`
    padding-top:0px;
    padding-left:10%;
    /* padding-bottom:2%; */
    
`

const Select =()=> (
    <div>
        
        <Link href="/whatyak">
            <Box2>
            <h3 className><center>เลือกตัวละคร</center></h3>
         <div className="container progress wide"> 
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '50%'}}>50%</div>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '50%'}}>50%</div>
            </div>  
               <div>
                <Text>ทีมพี่ยักษ์</Text>
                <Choose>เลือก</Choose>
                </div>
            </Box2>
        </Link>
    </div>
)
export default Select;