import React from 'react'
import styled from 'styled-components'

import content from './content.json'
// import Card from '../Core/Card'
import Story from './Story'
import Navbar  from '../Core/Navbar'
import Bg from '../Core/BgStory'

const Icon = styled.div`
    margin-top: 5%;
`

const index =()=> (
    <Bg className="row">
        <div className="col-12 col-sm-12 col-md-6"><img src="../../static/image/fullHill.svg"/></div>
        <div className="col-12 col-sm-12 col-md-6">
            <h1>WHAT</h1>
            <span>ค่ายนี้คืออะไร?</span>
            {content.text}
            <Icon className="row">
                <div className="col-6 col-md-3 img-responesive">
                    <img src="../../static/image/question.svg"/>
                </div>
                <div className="col-6 col-md-3 img-responesive">
                    <img src="../../static/image/question.svg"/>
                </div>
                <div className="col-6 col-md-3 img-responesive">
                    <img src="../../static/image/question.svg"/>
                </div>
                <div className="col-6 col-md-3 img-responesive">
                    <img src="../../static/image/question.svg"/>
                </div>
            </Icon>
            <div className="row text-center">
                <div className="col-6 col-md-3">Java programing</div>
                <div className="col-6 col-md-3">IT Functions</div>
                <div className="col-6 col-md-3">Network</div>
                <div className="col-6 col-md-3">HTML5&CSS</div>
            </div>
        </div>
    </Bg>
)
export default index