import react from 'react'
import Bg from '../Content/BgStory'
import NavOurCamp from '../Content/NavOurCamp'
import ConWho from '../Who/ContentWho'

const HomeWho = () => (

    <Bg>
        <NavOurCamp />
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ConWho/>
                </div>
            </div>
        </div>
    </Bg>

)

export default HomeWho