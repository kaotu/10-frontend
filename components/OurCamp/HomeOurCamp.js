import react from 'react'
import Content from '../OurCamp/ContentOurCamp'
import Button from '../OurCamp/ButtonCon'
import RegisBut from '../Content/RegisBut'
import BgStory from '../Content/BgStory'
import Menu from '../Content/Burger'
 
const HomeOurCamp = () => (
    <BgStory id="outer-container">
        <Menu/>        
        <div id="page-wrap" className="container">
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
export default HomeOurCamp