import React from 'react'
import styled from 'styled-components'
import campers from './campers.json'

const Layout = styled.div`
  background: url('/static/image/legal/background.png');
  background-attachment: fixed;
  background-size: cover;

  img {
    max-height: 100px;
  }
`

const Background = styled.div`
  background-color: #fff;
  padding-top: 1.5em;
  padding-left: 2em;
  padding-right: 2em;
  
  .card-header {
    background-color: #002D40;
  }
  img {
    max-width: 130px;
  }
  p {
    color: #000 !important;
  }
`

const Announce = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <img className='mx-auto mt-4 mb-1' src="/static/image/logofinals.png" alt="wipcamp10"/>
        <Background className="col-12 mt-3 text-center rounded-top">
          <h1 className='mt-4'>ประกาศผลรายชื่อผู้มีสิทธิ์เข้าค่าย</h1>
        </Background>
        <Background className="col-12">
          <div className="container">
            <div className="row">
              <div className="col-12 table-responsive">
                <div class="card">
                  <div class="card-header text-white">
                    ภารกิจแรกของพวกเจ้า!
                  </div>
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>
                        ขอแสดงความยินดีกับพวกเจ้านะน้องเอ๋ย ที่ได้เข้ามาเป็นส่วนหนึ่งกับกองทัพทั้งฝ่ายวานรและยักษา <br />
                        สิ่งที่พวกเจ้าต้องทำต่อไปคือ <b>ยืนยันสิทธิ์การเป็นส่วนหนึ่งกับกองทัพ</b> <br />
                        โดยขั้นตอนมีดังนี้
                        <li>กรอกสถานที่ ที่พวกเจ้าอยากให้พี่ ๆ ไปรับนะน้องเอ๋ย</li>
                        <li>บอกขนาดเสื้อที่พวกสามารถใส่ได้</li>
                        <li>
                          อัพโหลดหลักฐานการโอนเงินที่สามารถดูข้อมูลได้อย่างชัดเจน เป็นจำนวนเงิน <b>450 บาท</b><br />
                          <div className='text-center my-2'>
                            < div class="card">
                              <div class="card-body">
                                <img src="/static/image/scb.jpg" alt="scb"/> <br />
                                <b>ธนาคารไทยพาณิชย์</b> เลชที่บัญชี <b>237-222168-5</b> <br />
                                <b>ชื่อบัญชี นาย ฉันทวัฒน์ ประดิษฐ และ/หรือ นางสาว ณัฏฐณัฐ วิเมลืองตระกูล</b> <br />
                                <b>สาขามหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</b>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>หลังจากนั้นให้พวกเจ้าเข้ากลุ่ม Facebook WIP Camp #10 และรอคอยวันที่พวกเจ้าจะได้พบกับพี่ ๆ นะน้องเอ๋ย</li>
                      </p>
                      <h5>
                        สามารถยืนยันสิทธิ์ ได้ที่ <a href="https://itim.wip.camp"><b>ลิงค์นี้</b></a> <br />
                        พวกเจ้ามีเวลารายงานตัวได้วันที่ <b>2 เมษายน 2561</b> ถึง <b>11 เมษายน 2561</b>
                      </h5>
                      <p>พวกพี่ ๆ จะรอคอยการมาถึงของพวกเจ้านะน้องเอ๋ย !</p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Background>
        <Background className="col-12 mb-5 rounded-bottom">
          <table class="table mt-3">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">WIP ID</th>
                <th scope="col">ชื่อ - นามสกุล</th>
                <th scope="col">ชื่อเล่น</th>
                <th scope="col">โรงเรียน</th>
              </tr>
            </thead>
            <tbody>
              {
                campers.map( ({no, wip_id, full_name, nickname, school}) => {
                  let ascii = school.charCodeAt(0)
                  return (
                    <tr key={no}>
                      <th>{no}</th>
                      <td>{wip_id}</td>
                      <td>{full_name}</td>
                      <td>{nickname}</td>
                      <td>{ ascii > 64 && ascii < 123 ? school : `โรงเรียน${school}`}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          <div className="col-12 text-center">
            <button className='mt-3 mb-4 mx-auto btn btn-primary'>
              <a className='text-white mx-auto' href="https://wip.camp">กลับไปหน้าแรก</a>
            </button>
          </div>
        </Background>
      </div>
    </div>
  </Layout>
)

export default Announce
