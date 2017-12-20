import react from 'react'

import Scoreling from './Scoreling'
import Scoreyak from './Scoreyak'

const Scorebar = () => (
    <div className="container progress wide"> 
        <Scoreyak/>
        <Scoreling/>
    </div>

)
export default Scorebar