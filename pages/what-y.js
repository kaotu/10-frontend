import React from 'react'
import OurCamp from '../components/OurCamp/HomeOurCamp'
import HomeLearner from '../components/WhatLearner/HomeLearner'
import HomeWho from '../components/Who/HomeWho'
import FadeD from '../components/PageTransition/Fadein'

const WhatGiant = () => (
    <FadeD>
    <section>
        <OurCamp />        
        <HomeLearner />
        <HomeWho />
    </section>
    </FadeD>
)
export default WhatGiant
