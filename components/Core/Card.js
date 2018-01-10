import React from 'react'
import styled from 'styled-components'

import BgStory from './BgStory'
import Menu from './Burger'


const Div = styled.div`
    height: 80vh;
`
const Row = styled.div`
    @media(max-width: 720px) {
        margin-top: 50px;
    }
`

const HiddenRespone = styled.div`
    @media(max-width: 720px) {
        display: none;
    }
`

const HomeOurCamp = (props) => (
    <BgStory id="outer-container">
        <Menu />
        <div id="page-wrap" className="container">
            <Div className="d-flex flex-column">
                    <Nav/>  
                <Row className="d-flex p-2 row justify-content-center">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="bg-secondary float-left" style={{ width: '100%' }}>
                            <article>Lorem Ipsum คืออะไร?</article>
                            <p>{props.text}</p>
                        </div>
                    </div>
                </Row>
            </Div>
        </div>
    </BgStory>
)
export default HomeOurCamp