import React from 'react'
import styled from 'styled-components'

const Bar = styled.div `
    width: 50%;
    background-color : #E53D36;    
`

const Score =()=> (
    <Bar className="progress-bar" role="progressbar">50%</Bar>
)

export default Score