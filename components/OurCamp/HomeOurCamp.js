import react from 'react'

import Content from '../OurCamp/ContentOurCamp'
import NavOurCamp from '../Content/NavOurCamp'
import Button from '../OurCamp/ButtonCon'
import RegisBut from '../Content/RegisBut'
import BgStory from '../Content/BgStory'

const HomeOurCamp = () => (
    <BgStory>
        <NavOurCamp />
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Content />
                </div>
            </div>
        </div>
        <Button />
        <RegisBut />
    </BgStory>
)
export default HomeOurCamp