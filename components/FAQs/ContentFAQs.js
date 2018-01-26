import react from 'react'
import styled from 'styled-components'

const ImgLefe = styled.img`
  width:20%;
  margin-left:15vw;
  right: 0;
`

const ImgRight = styled.img`
  width:20%;
  margin-right:15vw;
  right: 0;
`

const Box = styled.div`
  width: 46vw;
  min-height: 35hw;    
  padding: 1vw;
  background-color:#FBFBEF;
  opecity:0.8;
  margin-top:1vw;
	margin-bottom:1vw;
	border-radius: 10px;
`

const FAQs = [
  { Q: "Q: อยากเป็นส่วนหนึ่งของค่ายนี้มาก ๆ ต้องทำอย่างไร ?", A: "A: น้อง ๆ เพียงแค่ตอบคำถามในการสมัครด้วยตัวเองเพื่อแสดงถึงตัวตนของน้อง และมีความตั้งใจในการตอบคำถาม เพียงแค่น้องมีความตั้งใจ พี่เชื่อว่าน้อง ๆ จะได้มีส่วนร่วมในค่ายนี้อย่างแน่นอนครับ รวมถึงสิ่งสำคัญ คือ อย่าลืมอัพโหลดเอกสารให้ครบถ้วนและถูกต้องตามที่กำหนดด้วยนะครับ" },
  { Q: "Q: ไม่มีความรู้เกี่ยวกับคอมพิวเตอร์มากนัก จะเข้าค่ายนี้ได้หรือไม่ ?", A: "A: ได้สิครับ คนเราไม่ใช่เทพทุกคนสักหน่อย ขอแค่พอมีพื้นฐานมาบ้าง ให้ฟังที่พี่พูดเกี่ยวกับไอทีรู้เรื่องก็พอแล้วครับ" },
  { Q: "Q: ค่ายนี้เป็นค่ายวิชาการ เครียดมากไหม มีกิจกรรมไหม ?", A: "A: ค่ายนี้มีวิชาการ และกิจกรรมพอๆ กันเลยครับ ไม่ต้องห่วงว่าน้องจะเครียด เพราะแค่เห็นหน้าพวกพี่ก็ไม่เครียดแล้วครับ รับรองได้ว่าพี่ๆ มีกิจกรรมสนุกๆ เพื่อไม่ให้น้องๆ เครียด อยู่ตลอดเวลาครับ" },
  { Q: "Q: นอนที่ไหน ห้องน้ำเป็นอย่างไรบ้าง ?", A: "A: สำหรับเรื่องการค้างคืนในค่าย จะค้างในหอพักของมหาวิทยาลัยครับ โดยจะมีพี่ๆ ดูแลตลอด 24 ชั่วโมง รวมถึงพี่พยาบาลที่ได้รับการอบรมโดยตรงจากทางมหาวิทยาลัยในกรณีที่น้องๆไม่สบาย และพร้อมจะปฐมพยาบาลเบื้องต้นให้น้องๆ ตลอดระยะเวลาค่าย บอกผู้ปกครองได้เลยครับว่าไม่ต้องกังวล" },
]

const Content = () => (
  <div className="container-fluid">
    {
      FAQs.map((data, i) => (
        <div key={i}>
          <div className="row d-flex">
            <div className="col img-responesive align-self-center">
              <ImgLefe src="/static/image/question.svg" />
            </div>
            <div className="col-6">
              <Box>{data.Q}</Box>
            </div>
            <div className="col">
            </div>
          </div>
          <div className="row d-flex">
            <div className="col">
            </div>
            <div className="col-6">
              <Box>{data.A}</Box>
            </div>
            <div className="col img-responesive align-self-center">
              <ImgRight src="/static/image/question.svg" />
            </div>
          </div>
        </div>
      ))
    }
  </div>
)
export default Content
