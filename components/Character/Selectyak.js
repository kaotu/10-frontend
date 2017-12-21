import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Scorebar from './Scorebar'
import Yak from './Yak'
import Teamyak from './Teamyak'

const Box = styled.div`
    background-color:transparent;
    width: 100%;
    height: 50vh;
    max-height: 100%;
`
const Text = styled.h3`
    padding-right: 20%;
    padding-left: 20%;
    padding-top: 5%;
    padding-bottom:0px;

`
const Choose = styled.h5`
    font-family: "Niramit";
    color : #FFA644;
    padding-top:0px;
    padding-left:20%;
`
const SelectChar = styled.h1`
    font-family: "Niramit";
    color : #FFA644;
`

const Select =()=> (
    <div>
        <Link href="/what-y">
            <body className="bgYak">
            <Box>
            <SelectChar><center>เลือกตัวละคร</center></SelectChar>
         <Scorebar/>
                <Teamyak/>
                <Choose>เลือก</Choose>  
                <Yak/>
            </Box> 
            </body>        
        </Link>
    </div>
)
export default Select;