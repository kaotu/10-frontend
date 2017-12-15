import React from 'react'
import Link from 'next/link'
import Selectling from '../components/Selectling'

// const Myoppa = [
//     {
//         message: 'love'
//     },
//     {
//         message: 'you'
//     },
//     {
//         message: 'so'
//     },
//     {
//         message: 'much'
//     },
//     {
//         message: 'susjew'
//     }
// ]

const home =()=> (
    <div className="container-fluid">
        {/* <div className="row">
            <div class=" col-sm-12 col-md-6">
                <article>1 of 2</article>
            </div>
            <div class=" col-sm-12 col-md-6">
                <article>2 of 2</article>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-8">.col-12 .col-md-8</div>
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>
        <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">love</div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-8s">love</div>
        </div>
        <div className="row">
            {
                Myoppa.map(myoppa => (
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">{myoppa.message}</div>
                ))
            }
        </div> */}
        
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Selectling/>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                
            </div>

        </div>
    </div>
)

export default home;










