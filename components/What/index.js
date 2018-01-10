import React from 'react'
import styled from 'styled-components'

import content from './content.json'
import Card from '../Core/Card'
import Story from './Story'

const index =()=> (
    <Card img={<Story/>} text={content.text} />
)
export default index