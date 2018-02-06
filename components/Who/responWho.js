import React, { Component } from 'react'
import Slider from '../Slider/slider'
import styled from 'styled-components'

const IconData = [
  { id: 0, image: "/static/image/moon.png", topic: 'น้อง ๆ ที่สามารถอยู่ร่วมค่ายค้างคืนได้' , content: 'ตลอดระยะเวลา 5 วัน'},
  { id: 1, image: "/static/image/graduate.png", topic: 'น้อง ๆ มัธยมศึกษาตอนปลาย', content: 'แผนกการเรียนวิทย์-คณิต, ศิลป์-คำนวณ'},
  { id: 2, image: "/static/image/person.png", topic: 'น้อง ๆ ที่ได้รับอนุญาตจากผู้ปกครอง' , content: 'โดยมีเอกสารเป็นลายลักษณ์อักษรถูกต้อง'},
  { id: 3, image: "/static/image/computer.png", topic: 'น้อง ๆ ที่มีความสนใจด้านไอที' , content: 'หรือต้องการค้นหาตนเองเพื่อศึกษาต่อ'},
]


const Img = styled.img`
  width: 15vw;
  margin-right: 0px;
`

const Strong = styled.strong`
  color:#fff;
`

const Span = styled.span`
  color:#fff;
`

const Margin = styled.div`
  margin-right : -1em;
`

const WhoWrapper = styled.div`
  min-height: 100px
`

export default class AdaptiveHeight extends Component {
  render() {
    var settings = {
      className: '',
      dots: true,
      infinite: true,
      slidesToShow: 0.9,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Slider {...settings}>
            {
              IconData.map((data,i)=>
              <div key={i} className="container-fluid">
              <br/>
                <WhoWrapper className="row">
                    <Margin className="col-3 px-0">
                      <Img src={data.image}/>
                    </Margin>
                    <Margin className="col-7 px-0">
                      <Strong>{data.topic}</Strong>
                      <br/>
                      <Span>{data.content}</Span>
                      </Margin>
                  </WhoWrapper>
              </div>
              )
            }
            </Slider>
          </div>
          </div>
      </div>
    );
  }
}
