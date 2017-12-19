import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Box = styled.div`
    background-color: red;
    width: 100%;
    min-height: 290px;
    height: 100%;
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
            <Box>
                <Text>ทีมพี่ลิง</Text>
                <Choose>เลือก</Choose>
            </Box>
        </Link>
    </div>
)
export default Select;
