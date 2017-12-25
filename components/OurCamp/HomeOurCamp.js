import react from 'react'
import Bg from '../Bg'
import Content from '../OurCamp/ContentOurCamp'
import NavOurCamp from '../OurCamp/NavOurCamp'

const HomeOurCamp = () => (

    <Bg>
        <button type="button" class="fixed-top btn btn-danger">ลงทะเบียน</button>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <NavOurCamp />
                    <Content />
                </div>
            </div>
        </div>
    </Bg>

)
export default HomeOurCamp