import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Ling from './Ling'
import Teamling from './Teamling'

const Img = styled.div`
    background-image: url('../../static/image/kanok.svg');
    width: 100%;
    height: 100vh;
    
    @media (max-width: 720px) {
        height: 50vh;
    }
`

const Box = styled.div`
    background-color: #002D40;
    width: 100%;
    height: 50vh;
    max-height: 100%;
    cursor: pointer;
    div:hover {
        /* ใส่รูปพื้นหลังผ่าครึ่งตรงนี้ */
        background-image: url(''); 
    }

    @media (max-width: 720px) {
        height: 50vh;
    }
`

const Select =()=> (
    <div>
        <Link href="/what-l">
        {/* <Bgling>    */}
            <Box>
                <Img>
                <Teamling/> 
                <Ling/>
                </Img>             
            </Box>
            {/* </Bgling> */}
        </Link>
        
    </div>
)
export default Select;
