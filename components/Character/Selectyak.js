import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Yak from './Yak'
import Teamyak from './Teamyak'
import Bgyak from './Bgyak'
import '../global-style'

const Box = styled.div`
    background-color:transparent;
    height: 50vh;
`
const Choose = styled.h5`
    font-family: 'My custom family';
    color : #FFA644;
    padding-top:0px;
    padding-left:20%;
    @media (max-width: 576px) {
        font-size: 3rem;
    }    
`
const SelectChar = styled.h1`
    font-family: 'My custom family';
    color : #FFA644;
`

const Select =()=> (
    <div>
        <Link href="/what-y">
            <Bgyak>
                <Box>
                    <SelectChar><center>เลือกตัวละคร</center></SelectChar>
                        <Scorebar/>
                            <Teamyak/>
                                <Choose>เลือก</Choose>  
                                    <Yak/>
                </Box> 
            </Bgyak>        
        </Link>
    </div>
)
export default Select;