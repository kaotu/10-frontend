import react from 'react'
import Bg from '../Core/BgStory'
import styled from 'styled-components'
import H1 from '../Core/FontH1'
import H2 from '../Core/FontH2'
import Color from '../Core/Color'

const Img = styled.img`
width:80vw;
position:relative;
top:0;
right:0;
@media (max-width: 720px) {
    width:80vw;
    position:relative;
    top:0;
    right:0;
}
`
const Front = styled.p`
  padding-top:0vw;
  margin-left:40vw;   
`
const Box1 = styled.div`
position:absolute;
background-color:white;
opacity:0.5;
width:22vw;
top:42vh;
left:0vw;
z-index:2;  
text-align:center;
@media (max-width: 720px) {
    
} 
`
const Box2 = styled.div`
position:absolute;
background-color:transparent;
width:20vw;
top:1vh;
right:30vw;
z-index:2;
text-align:center;
@media (max-width: 720px) {
}
`
const Box3 = styled.div`
position:absolute;
background-color:transparent;
width:20vw;
top:10vh;
right:35vw;
z-index:2;
text-align:center;
 @media (max-width: 720px) {
}
`
const Box4 = styled.div`
position:absolute;
background-color:transparent;
width:20vw;
top:20vh;
right:45vw;
z-index:2;
text-align:center;
 @media (max-width: 720px) {
}
`
const Div = styled.div`{
    @media (max-width: 720px) {
       margin-top:5vw;
      }
`
const Moblie = () => (
    <Bg bgColor={Color.mongkey.when}  className="d-flex">
        <div className="container-fluid">
            <div className="row">
                <Div className="col-12 col-sm-12 col-md-12">
                    <H1 className="text-center font-weight-bold">WHEN</H1>
                    <H2 className="text-center font-weight-bold">ค่ายนี้จัดเมื่อไหร่ ?</H2>
                </Div>
                <div className="col-12 col-sm-12 col-md-12">
                    <Img src="/static/image/Climming.svg" className="rounded float-right"  />
                        <Box1 className="text center">
                        <p>31 ม.ค. 61 <br /> วันค่าย</p>
                        </Box1>
                        <Box2 className="text center">
                        <p>31 ม.ค. 61 <br /> วันค่าย</p>
                        </Box2 >
                        <Box3 className="text center">
                        <p>31 ม.ค. 61 <br /> วันค่าย</p>
                        </Box3>
                        <Box4 className="text center">
                        <p>31 ม.ค. 61 <br /> วันค่าย</p>
                        </Box4>
                </div>
            </div>
        </div>
    </Bg>
)
export default Moblie