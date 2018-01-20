import React from 'react'
import styled from 'styled-components'

import RegisBut from '../Core/RegisBut'

const Footer = () => (
  <div>
    {/* พื้นหลังของ div นี้เป็นก้อนเมฆ (จะได้ไม่ต้องจัดตำแหน่งซ้อน) */}
    <div className="row">
      <div className="col-9">
        {/* รอปุ่มเกม ไว้ริมซ้าย */}
      </div>
      <div className="col-3">
        <RegisBut />
      </div>
    </div>
  </div>
)
export default Footer
