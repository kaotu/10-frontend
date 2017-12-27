import React from 'react'
import styled from 'styled-components'

import Content from './ContentWho'
import Story from './StoryWho'
import BgStory from '../Content/BgStory'
import Footer from '../Content/Footer'
import Menu from '../Content/Burger'


const Div = styled.div`
    height: 80vh;
`

const HiddenRespone = styled.div`
    @media(max-width: 720px) {
        display: none;
    }
`

const Home = () => (
    <BgStory>
        <Menu/>        
        <div className="container">
            <Div className="d-flex flex-column">
                <div className="d-flex p-2 row justify-content-center">
                    <HiddenRespone className="col-md-5 col-lg-5">
                        <Story/>
                    </HiddenRespone>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <Content/>
                    </div>
                    <HiddenRespone className="col-md-1 col-lg-1">
                        <p>รอบาร์อยู่เด้อ</p>
                    </HiddenRespone>
                </div>
                <div className="d-flex mt-auto p-2">
                    <Footer/>
                </div>
            </Div>
        </div>
    </BgStory>
)
export default Home