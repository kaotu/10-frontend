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

<<<<<<< HEAD
const Box = styled.div`
    background-color:transparent;
    height: 50vh;
`
const Choose = styled.h5`
    font-family: 'My custom family';
    color : #FFA644;
    padding-top:0px;
    padding-left:10%;
    display: flex;
    position: absolute;
    z-index: 2;
    margin-top: 54%;

`

=======
>>>>>>> c0f3e08... [chang] button [fix] selectling,selectyak
const Select =()=> (
    <div>
        <Link href="/what-y">
            <Bgyak>
                <Box>
<<<<<<< HEAD
                    <SelectChar><center>เลือกตัวละคร</center></SelectChar>
                        <Scorebar/>
                            <Teamyak/>
                                <Choose>เลือก</Choose>  
                                    <Yak/>
=======
                    <Img>
                        <Teamyak/> 
                        <Yak/>
                    </Img>
>>>>>>> c0f3e08... [chang] button [fix] selectling,selectyak
                </Box> 
            </Bgyak>        
        </Link>
    </div>
)
export default Select;