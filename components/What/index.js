import React from 'react'
import styled from 'styled-components'

import content from './content.json'
import Card from '../Core/Card'
import Story from './Story'
import Navbar  from '../Core/Navbar'
import Bg from '../Core/BgStory'


const index =()=> (
    <Bg>
        <Navbar/>
        <Card img={<Story/>} text={content.text} />
    </Bg>
)
export default index