import React from 'react'
import styled from 'styled-components'

const BarLing = styled.div `
    width: 50%;
    background-color : black;
`

const Scoreling =()=> (
    <BarLing className="progress-bar" role="progressbar">50%</BarLing>
)

export default Scoreling