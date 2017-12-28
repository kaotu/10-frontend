import React from 'react'
import styled from 'styled-components'

const BarYak = styled.div `
    width: 50%;
    background-color : #FFA644;
`

const Scoreyak =()=> (
    <BarYak className="progress-bar" role="progressbar">50%</BarYak>
)

export default Scoreyak