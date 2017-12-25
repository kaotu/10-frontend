import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Yak from './Yak'
import Teamyak from './Teamyak'

const Img = styled.div`
    background-image: url('../../static/image/kanok.svg');
    width: 100%;
    height: 50vh;
    max-height: 100%;
    
`
const Box = styled.div`
    background-color:transparent;
    height: 50vh;
`
const Choose = styled.h5`
    background-color: #295949;
    width: 100%;
    height: 100vh;
    max-height: 100%;
    cursor: pointer;
    div:hover {
        /* ใส่รูปพื้นหลังผ่าครึ่งตรงนี้ */
        background-image: url('../../static/image/Artboardyak.svg');
        background-size: 100%;
    }
    
    @media (max-width: 720px) {
        height: 50vh;
    }
`

const Select =()=> (
    <div>
        <Link href="/what-y">
            <Box>
                <Img>
                    <Teamyak/> 
                    <Yak/>
                </Img>
            </Box> 
        </Link>
    </div>
)
export default Select;