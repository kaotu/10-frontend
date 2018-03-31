import React from 'react'
import styled from 'styled-components'
import campers from './campers.json'

const Layout = styled.div`
  background: url('/static/image/legal/background.png');
  background-attachment: fixed;
  background-size: cover;
`

const Container = styled.div`
  background-color: #fff;
  padding-top: 1.5em;
  padding-left: 2em;
  padding-right: 2em;
`


const Announce = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <Container className="col-12 mt-3 text-center">
          <h1>ประกาศผลรายชื่อผู้มีสิทธิเข้าค่าย WIP Camp #10</h1>
        </Container>
        <Container className="col-12 mb-3">
        <table class="table">
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
        </Container>
      </div>
    </div>
  </Layout>
)

export default Announce
