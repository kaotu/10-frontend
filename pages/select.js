import React from 'react'
import Link from 'next/link'
import Selectling from '../components/Selectling'
import Selectyak from '../components/Selectyak'


const Index = ()=> (

<div className ="container-fluid" >      
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Selectyak/>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Selectling/>      
      </div>
    </div>
  
</div>
)

export default Index