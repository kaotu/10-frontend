import React from 'react'
import styled from 'styled-components'

const Wip = styled.img`
    width: 50%;
    margin-top: 15%;
    
    @media(max-width: 720px){
        width: 100%;
        margin-top: 15%;
    }
`

const Logo =()=> (
    <Wip src="../../static/image/LOGO-TH.svg"/>
)

export default Logo;