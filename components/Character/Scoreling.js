import React from 'react'
import styled from 'styled-components'

const BarLing = styled.div `
    width: 50%;
`

const Scoreling =()=> (
    <BarLing className="progress-bar bg-danger" role="progressbar">50%</BarLing>
)

export default Scoreling