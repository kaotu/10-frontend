import react from 'react'
import styled from 'styled-components'

const Box = styled.div`
height: 35hw;    
padding: 1vw;
background-color:#000;
opecity:0.8;
margin-top:1vw;
margin-bottom:1vw;
`

const ContentRespon = () => (
    <div className="container-fluid">
    <div className="row">
    <div className="col-8">
        <Box></Box>
    </div>
    </div>
    </div>
)
export default ContentRespon