import React from 'react'
import styled from 'styled-components'

const BarYak = styled.div `
    width: 50%;
`

const Scoreyak =()=> (
    <BarYak className="progress-bar bg-warning" role="progressbar">50%</BarYak>
)

export default Scoreyak