import react from 'react'
import styled from 'styled-components'

const Minicon = styled.div`
  display:none;
  width:100%;
  height: 100vh;
  background-color: #002D40;
  @media(orientation:landscape)
  and (max-width:1024px){
    display:flex;
    justify-content:center;
    align-items:center;
  }
`

const index =()=> (
    <Minicon>
        {/* <img className="img-fluid" src="../static/image/mini.png"/> */}
        <p className="text-center">จอเจ้าเล็กไปน้องเอ๋ย เจ้าจงหมุนหน้าจอเป็นแนวตรง ปรับขนาดหน้าต่างเบราเซอร์ <br />
        หรือใช้ <a href='https://goo.gl/sSUKGW'>เครื่องคณิตกรณ์</a> ที่ขนาดมโหฬารกว่านี้</p>
    </Minicon>
)
export default index