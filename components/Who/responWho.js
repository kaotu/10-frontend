import React, { Component } from 'react'
import Slider from '../Slider/slider'
import styled from 'styled-components'

const IconData = [
  { id: 0, image: '/static/image/question.svg', topic: 'น้อง ๆ มัธยมศึกษาตอนปลาย', content: 'แผนกการเรียนวิทย์-คณิต, ศิลป์-คำนวณ'},
  { id: 1, image: '/static/image/question.svg', topic: 'น้อง ๆ ที่มีความสนใจด้านไอที' , content: 'หรือต้องการค้นหาตนเองเพื่อศึกษาต่อ'},
  { id: 2, image: '/static/image/question.svg', topic: 'น้อง ๆ ที่ได้รับอนุญาตจากผู้ปกครอง' , content: 'โดยมีเอกสารเป็นลายลักษณ์อักษรถูกต้อง'},
  { id: 3, image: '/static/image/question.svg', topic: 'น้อง ๆ ที่สามารถอยู่ร่วมค่ายค้างคืนได้' , content: 'ตลอดระยะเวลา 5 วัน'},
]

const Img = styled.img`
  width: 15vw;
  margin-right: 0px;
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
              IconData.map((data, i)=> (
              <div key={i} className="container-fluid px-0">
                <div className="row float-left">
                    <div className="col-3 px-0">
                      <Img src={data.image}/>
                    </div>
                    <div className="col-9 px-0">
                      <strong>{data.topic}</strong>
                      <br/>
                      <span>{data.content}</span>
                      </div>
                  </div>
              </div>
              ))
            }
            </Slider>
          </div>
          </div>
      </div>
    );
  }
}
