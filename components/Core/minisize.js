import react from 'react'
import styled from 'styled-components'

const Minicon = styled.div`
  display:none;
  width:100%;
  height: 100vh;
  background-color: #002D40;
  padding : 2vw;
  @media(orientation:landscape)
  and (max-width:800px){
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
  }
`
const Miniimg = styled.img`
  justify-content:center;
  width : 10vw;
`

const Link = styled.a`
  color: red;
`

const index =()=> (
    <Minicon>
        <Miniimg className="img-fluid" src="../static/image/Newmini.png"/>
        <p className="text-center mt-3">จอเจ้าเล็กไปน้องเอ๋ย เจ้าจงหมุนหน้าจอเป็นแนวตรง ปรับขนาดหน้าต่างเบราเซอร์
        หรือใช้ <Link href='https://goo.gl/sSUKGW'>เครื่องคณิตกรณ์</Link> ที่ขนาดมโหฬารกว่านี้</p>
    </Minicon>
)
export default index