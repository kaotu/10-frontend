import React from 'react'
import styled from 'styled-components'

const BarLing = styled.div `
    width: 50%;
    background-color : #E53D36;
`

const Scoreling =()=> (
    <BarLing className="progress-bar" role="progressbar">50%</BarLing>
)

export default Scoreling