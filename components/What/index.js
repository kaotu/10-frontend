import React from 'react'
import styled from 'styled-components'

import content from './content.json'
// import Card from '../Core/Card'
import Navbar  from '../Core/Navbar'
import Bg from '../Core/BgStory'

const Info = styled.div`
    margin-top: 5%;
`
const Cloud = styled.img`
    width: 20%;
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 20%;
` 
const Cloud2 = styled.img`
    width: 20%;
    position: absolute;
    z-index: 2;
    left: 35%;
    top: 30%;
` 

const Icon = styled.img`
    @media (max-width:720px) {
        width: 50%;
    }
`

const Mobile = styled.div`
    @media (max-width:720px) {
        text-align:center;
    }
`

const index =()=> ( 
    <Bg className="d-flex align-items-center">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6">
                    <div>
                        <Cloud src="/static/image/clound-yak-back.svg"/>
                        <Cloud2 src="/static/image/clound-yak-back.svg"/>
                        <img src="/static/image/fullHill.svg"/>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <Mobile>
                        <h1>WHAT</h1>
                        <span>ค่ายนี้คืออะไร</span>
                    </Mobile>
                    <br/>
                    {content.text}
                    <Info className="row text-center">
                        <div className="col-6 col-md-3 img-responesive ">
                            <Icon src="/static/image/question.svg"/>
                            <p>Java programing</p>
                        </div>
                        <div className="col-6 col-md-3 img-responesive ">
                            <Icon src="/static/image/question.svg"/>
                            <p>IT Functions</p>
                        </div>
                        <div className="col-6 col-md-3 img-responesive ">
                            <Icon src="/static/image/question.svg"/>
                            <p>Network</p>
                        </div>
                        <div className="col-6 col-md-3 img-responesive  ">
                            <Icon src="/static/image/question.svg"/>
                            <p>HTML5&CSS</p>
                        </div>
                
                    </Info>
                </div>
            </div>
        </div>
    </Bg>
)
export default index