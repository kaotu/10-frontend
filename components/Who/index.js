import React from 'react'
import styled from 'styled-components'

import content from './content.json'
import Story from './Story'
import Bg from '../Core/BgStory'

const index =()=> (
    <Bg>
        <div className="container">    
            <div className="row">
                <div className="row col-12 col-md-6">
                    <h1>WHAT</h1>
                    <span>ค่ายนี้คืออะไร?</span>
                    
                    {content.text}
                    <div className="col-6 col-md-3">
                        <img   src="/static/image/question.svg"/>
                    </div>
                    <div className="col-6 col-md-3">
                        <img src="/static/image/question.svg"/>
                    </div>
                    <div className="col-6 col-md-3">
                        <img src="/static/image/question.svg"/>
                    </div>
                    <div className="col-6 col-md-3">
                        <img src="/static/image/question.svg"/>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                </div>
            </div>
        </div>
    </Bg>    
)
export default index
