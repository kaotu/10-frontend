import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Yak from './Yak'
import Teamyak from './Teamyak'

const Img = styled.div`
    background-image: url(../../static/image/bbg2.svg);
    width: 100%;
    height: 100vh;
    @media (max-width: 720px) {
        height: 50vh;
    }
`

const Box = styled.div`
    background-color: #295949;
    width: 100%;
    height: 100vh;
    max-height: 100%;
    @media (max-width: 720px) {
        height: 50vh;
    }
`

const Choose = styled.h5`
    font-family: "Niramit";
    color : #FFA644;
    padding-top:0px;
    padding-left:20%;
    @media (max-width: 576px) {
        font-size: 3rem;
    }    
`
const SelectChar = styled.h1`
    color : #FFA644;
`

const Select =()=> (
    <div>
        <Link href="/what-y">
            {/* <Bgyak> */}
                <Box>
                    <Img opacity="0.1">
                        <Teamyak/>
                        <Choose>เลือก</Choose>  
                        <Yak/>
                    </Img>
                </Box> 
            {/* </Bgyak>         */}
        </Link>
    </div>
)
export default Select;