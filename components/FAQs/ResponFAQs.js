import react from 'react'
import Slider from '../Slider/slider'
import React, { Component } from 'react'
import styled from 'styled-components'
import Content from './ContentFAQs'
import ContentRespon from './ContentRespon'

const Bg = styled.div`
margin-top:10vw;
`

export default class AdaptiveHeight extends Component {
  render() {
    var settings = {
      className: '',
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    return (
      <Bg>
        
        <div className="row d-flex ">
          <div className="col img-responesive align-self-center">
            <p></p>
          </div>

          <div className="col-10">
            <Slider {...settings}>
              <div>
                <ContentRespon />
              </div>
              <div>
                <ContentRespon />
              </div>
              <div>
                <ContentRespon />
              </div>
              
            </Slider>
          </div>

          <div className="col">
          </div>
        </div>
      </Bg>
    );
  }
}
