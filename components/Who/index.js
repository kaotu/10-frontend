import React from 'react'
import styled from 'styled-components'

import content from './content.json'
import Bg from '../Core/BgStory'

const Icon = styled.div`
    margin-top: 5%;
`

const Content = styled.div`
    
`

const index =()=> (
    <Bg>
        <div className="container">    
            <div className="row">
                <Content className="col-12 col-sm-12 col-md-6 order-2 order-md-1">
                    <h1>WHO</h1>
                    <span>ค่ายนี้เหมาะกับใคร?</span>
                    <Icon className="row">
                        <div className="col-3">
                            <img src="/static/image/question.svg"/>
                        </div>
                        <div className="col-3">
                            <img src="/static/image/question.svg"/>
                        </div>
                        <div className="col-3">
                            <img src="/static/image/question.svg"/>
                        </div>
                        <div className="col-3">
                            <img src="/static/image/question.svg"/>
                        </div>
                    </Icon>
                </Content>
                <div className="col-12 col-md-6 order-1 order-md-2">
                    <img src="/static/image/halfHill.svg"/>
                </div>
            </div>
        </div>
    </Bg>    
)
export default index
