import React from 'react'
import styled from 'styled-components'

const LgSIT = styled.img`
width: 8%;
margin-top: 0%;

@media(max-width: 720px){
    width: 20%;
    margin-top: 0%;
}
`
const LogoSIT =()=> (
     <LgSIT src="../../static/image/SIT.png" /> 
)

export default LogoSIT