import react from 'react'
import NavOurCamp from '../Content/NavOurCamp';
import Bg from '../Content/BgStory';
import ContentLearner from '../WhatLearner/ContentLearner'

const HomeLearner = () => (
    <Bg>
        <NavOurCamp />
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <ContentLearner />
                </div>
            </div>
        </div>
    </Bg>
)
export default HomeLearner