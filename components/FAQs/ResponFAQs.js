import react from 'react'
import Slider from '../Slider/slider'
import React, { Component } from 'react'
import styled from 'styled-components'
import Content from './ContentFAQs'
import ContentRespon from './ContentRespon'

const Bg = styled.div`
margin-top:10vw;
@media (max-width: 720px) {
  width:100vw;
}
`

const FAQs = [
  { Q: "<strong>Q:</strong> <strong>อยากเป็นส่วนหนึ่งของค่ายนี้</strong>มาก ๆ ต้องทำอย่างไร ?", A: "<strong>A:</strong> เพียงตอบคำถามในการสมัครด้วยตัวเองเพื่อแสดงถึงตัวตนของเจ้า และอีกสิ่งหนึ่งที่จะลืมไม่ได้ โปรดอัพโหลดเอกสารให้ครบถ้วนและถูกต้องตามที่กำหนดไว้ด้วย" },
  { Q: "<strong>Q:</strong> <strong>ไม่มีความรู้เกี่ยวกับคอมพิวเตอร์</strong>มากนัก จะเข้าค่ายนี้ได้หรือไม่ ?", A: "<strong>A:</strong> <strong>ได้สิครับ</strong> คนเราไม่ใช่เทพทุกคนสักหน่อย ขอแค่พอมีพื้นฐานมาบ้าง ให้ฟังที่พี่พูดเกี่ยวกับไอทีรู้เรื่องก็พอแล้วครับ" },
  { Q: "<strong>Q:</strong> ค่ายนี้เป็นค่ายวิชาการ <strong>เครียดมากไหม</strong> มีกิจกรรมไหม ?", A: "<strong>A:</strong> ค่ายนี้มีวิชาการ และกิจกรรมพอๆ กันเลยครับ ไม่ต้องห่วงว่าน้องจะเครียด เพราะ<strong>แค่เห็นหน้าพวกพี่ก็ไม่เครียดแล้วครับ</strong> รับรองได้ว่าพี่ ๆ มีกิจกรรมสนุก ๆ เพื่อไม่ให้น้อง ๆ เครียด อยู่ตลอดเวลาครับ" },
  { Q: "<strong>Q:</strong> นอนที่ไหน ห้องน้ำเป็นอย่างไรบ้าง ?", A: "<strong>A:</strong> สำหรับเรื่องการค้างคืนในค่าย จะ<strong>ค้างในหอพักของมหาวิทยาลัยครับ</strong> โดยจะมีพี่ ๆ ดูแลตลอด <strong>24 ชั่วโมง</strong> บอกผู้ปกครองได้เลยครับว่าไม่ต้องกังวล" },
  { Q: "<strong>Q:</strong> น้อง ๆ จะ<strong>ได้รับอะไร</strong>จากการมาค่าย ?", A: "<strong>A:</strong> น้อง ๆ จะได้รับข้อมูล<strong>ทางด้านไอที</strong> ในหลักสูตรเทคโนโลยีสารสนเทศ ครับ รวมถึง<strong>ความสนุกสนาน</strong>ที่พี่ ๆ เตรียมไว้สำหรับน้อง ๆ ทุกคน และน้อง ๆ จะได้รับ<strong>ประกาศนียบัตรจากทางค่าย</strong> เพื่อรับรองว่า น้อง ๆ ได้มาเข้าค่ายนี้ครับ" }
]

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
      <Bg className="container ">
        <div className="justify-content-center ">
          <div className="col-11">
            <Slider {...settings}>
              {
                FAQs.map((data, i) => (
                  <div key={i}>
                    <ContentRespon  Q={data.Q} A={data.A} />
                  </div>
                ))
              }
            </Slider>
          </div>
        </div>
      </Bg>
    );
  }
}
