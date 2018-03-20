import react from 'react'
import styled from 'styled-components'
import {compose, lifecycle, withState} from 'recompose'

const ImgLefe = styled.img`
  width:30%;
  margin-left:15vw;
  right: 0;
`

const ImgRight = styled.img`
  width:30%;
  margin-right:15vw;
  right: 0;
`

const Box1 = styled.div`
  width: 46vw;
  min-height: 30hw;    
  padding: 1vw;
  background-color:${props => props.color || ''};
  margin-top:1vw;
	margin-bottom:1vw;
	border-radius: 10px;
  &.arrow_box {
    position: relative;
    background: ${props => props.color || ''};
  }
  &.arrow_box:after {
    right: 100%;
    top: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-right-color:${props => props.color || ''};
    border-width: 1vw;
    margin-top: -1vw;
  }
`
const Box = styled.div`
width: 46vw;
min-height: 30hw;    
padding: 1vw;
background-color:#fff;
margin-top:1vw;
margin-bottom:1vw;
border-radius: 10px;
&.arrow_box {
  position: relative;
  background: #FFf;
}
&.arrow_box:after {
	left: 100%;
	top: 50%;
	border: solid transparent;
	content: " ";
	position: absolute;
	pointer-events: none;
	border-left-color:#FFF;
	border-width: 1vw;
	margin-top: -1vw;
}
`
const Zindex = styled.div`
  z-index : 10;
`

const FAQs = [
  { Q: "<strong>Q:</strong> <strong>อยากเป็นส่วนหนึ่งของค่ายนี้</strong>มาก ๆ ต้องทำอย่างไร ?", A: "<strong>A:</strong> น้องเอ๋ย สิ่งที่น้องต้องทำมีเพียงตอบคำถามในการสมัครด้วยตัวเองเพื่อแสดงถึงตัวตนของน้อง จงใช้ความตั้งใจในการตอบคำถาม และอีกสิ่งหนึ่งที่จะลืมไม่ได้ น้องเอ๋ย โปรดจงอัพโหลดเอกสารให้ครบถ้วน และถูกต้องตามที่กำหนดเสียด้วย" },
  { Q: "<strong>Q:</strong> <strong>ไม่มีความรู้เกี่ยวกับคอมพิวเตอร์</strong>มากนัก จะเข้าค่ายนี้ได้ หรือไม่ ?", A: "<strong>A:</strong> น้องเอ๋ย ไม่มีใครเก่งทุกอย่างได้โดยไร้การฝึกฝน เพียงแค่น้องมีความมุ่งมั่นที่จะศึกษาเรียนรู้ หรือมีพื้นฐานมาทางด้านไอทีมาบ้าง และเปิดใจที่จะทำความเข้าใจในโลกไอที น้องก็สามารถสมัครค่ายนี้ได้" },
  { Q: "<strong>Q:</strong> ค่ายนี้เป็นค่ายวิชาการ <strong>เครียดมากไหม</strong> มีกิจกรรมไหม ?", A: "<strong>A:</strong> ค่ายนี้เต็มที่ทั้งวิชาการ และกิจกรรม น้องเอ๋ย น้องจะได้รับทั้งความรู้ และความสนุกสนาน น้องไม่ต้องกลัวว่าจะเครียด หรือว่าค่ายนี้จะโหด พี่ ๆ ทุกคนในค่ายเป็นกันเอง พี่ ๆ พร้อมให้ความรู้และความบันเทิงแก่น้อง ๆ ตลอดเวลา" },
  { Q: "<strong>Q:</strong> นอนที่ไหน ห้องน้ำเป็นอย่างไรบ้าง ?", A: "<strong>A:</strong> น้องเอ๋ย น้องจะได้พักค้างแรมภายในหอพักของทางมหาวิทยาลัย ซึ่งจะมีพี่ ๆ คอยดูแลตลอด 24 ชั่วโมง รวมถึงพี่พยาบาลที่จะช่วยเหลือในกรณีน้อง ๆ ไม่สบาย และพร้อมจะปฐมพยาบาลเบื้องต้นให้น้อง ๆ ตลอดระยะเวลาค่าย น้อง ๆ สามารถบอกผู้ปกครองได้เลยว่าไม่ต้องกังวล" },
  { Q: "<strong>Q:</strong> น้อง ๆ จะ<strong>ได้รับอะไร</strong>จากการมาค่าย ?", A: "<strong>A:</strong> น้องจะได้รู้ว่ากล่องดวงใจสำหรับตัวน้องคืออะไร น้องจะได้รับความรู้ด้านไอที จากพี่ ๆ หลักสูตรเทคโนโลยีสารสนเทศ คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรีครับ รวมถึงความสนุกสนานที่พี่ ๆ เตรียมไว้สำหรับน้อง ๆ ทุกคน อีกทั้งยังได้มิตรภาพจากเพื่อน ๆ และพี่ ๆ ภายในค่าย ที่สำคัญนะน้องเอ๋ย น้องจะได้รับประกาศนียบัตรจากทางค่าย เพื่อรับรองว่าน้องได้มาเข้าค่ายนี้" },
  { Q: "<strong>Q:</strong> ค่ายนี้มี<strong>ค่าใช้จ่าย</strong>ไหม ถ้ามีต้องจ่ายเท่าไหร่?", A: "<strong>A:</strong> ค่ายนี้มีค่าใช้จ่าย 450 บาท น้องเอ๋ย สามารถชำระได้ผ่านธนาคาร ติดตามได้ทางแฟนเพจนะน้องเอ๋ย" }

]

const Black = styled.p`
  color: #000000;
`

const Content = props => (
  <div className="container-fluid">
    {
      FAQs.map((data, i) => (
        <div key={i}>
          <div className="row d-flex">
            <div className="col img-responesive align-self-center">
              <ImgLefe src={props.color.iconl} />
            </div>
            <Zindex className="col-6">
              <Box1 color={props.team.faqs} className=" arrow_box" ><Black dangerouslySetInnerHTML={{__html: data.Q}} /></Box1>
            </Zindex>
            <div className="col">
            </div>
          </div>
          <div className="row d-flex">
            <div className="col">
            </div>
            <Zindex className="col-6">
              <Box className="arrow_box" primary><Black dangerouslySetInnerHTML={{__html: data.A}} /></Box>
            </Zindex>
            <div className="col img-responesive align-self-center">
              <ImgRight src={props.color.iconr} />
            </div>
          </div>
        </div>
      ))
    }
  </div>
)
export default compose(
  withState('iconleft','setIconleft',''),
  withState('iconright','setIconright',''),
  withState('team','setTeam',''),
  lifecycle({
    componentDidMount() {
      let iconl = JSON.parse(window.localStorage.getItem("color"))
      this.props.setIconleft(iconl)
      let iconr = JSON.parse(window.localStorage.getItem("color"))
      this.props.setIconright(iconr)
      let team = JSON.parse(window.localStorage.getItem("color"))
      this.props.setTeam(team)
    }
  })
)(Content)
