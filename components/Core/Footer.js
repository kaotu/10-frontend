import React from 'react'
import styled from 'styled-components'

import RegisBut from '../Core/RegisBut'

const Foot = styled.div`

`

const Footer =()=> (
    <div> 
        {/* พื้นหลังของ div นี้เป็นก้อนเมฆ (จะได้ไม่ต้องจัดตำแหน่งซ้อน) */}
        <div className="row">
                <div className="col-9">
                    {/* รอปุ่มเกม ไว้ริมซ้าย */}
                    สภาพเดิมไว้อย่างไม่มีการเปลี่ยนแปลง มันได้รับความนิยมมากขึ้นในยุค ค.ศ. 1960 เมื่อแผ่น Letraset วางจำหน่ายโดยมีข้อความบนนั้นเป็น Lorem Ipsum และล่าสุดกว่านั้น คือเมื่อซอฟท์แวร์การทำสื่อสิ่งพิมพ์ (Desktop Publishing) อย่าง Aldus PageMaker ได้รวมเอา Lorem Ipsum เวอร์ชั่นต่างๆ เข้าไว้ในซอฟท์แวร์ด้วย
                </div>
                <div className="col-3">
                    <RegisBut />
                </div>
            </div>        
    </div>
)
export default Footer;
