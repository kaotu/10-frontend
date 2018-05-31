import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

import { getAll, insert } from '../Killer/firebaseHelper'
import { Layout, MinHeight } from '../Killer/Main'

export default class DiedMain extends React.Component {
  state = {
    died: {},
    diedKey: [],
    diedTable: [],
    isShow : false
  }

  fetchDied = async () => {
    await getAll(`died`).on('value', snap => {
      const snapshot = snap.val()
      const snapKey = Object.keys(snapshot).reverse()
      this.setState({
        died: snapshot,
        diedKey: snapKey,
        diedTable: snapKey
      })
    })
  }

  async componentWillMount () {
    this.fetchDied()
  }
  render() {
    let { died, diedKey, diedTable, isShow } = this.state
    let  settings = {
      dots: true,
      infinite: true,
      speed: 800,
      autoplaySpeed: 5000,
      slidesToShow: 6,
      slidesToScroll: 2,
      autoplay: true,
      dots: false,
      rows: 3,
      pauseOnHover: false
    }
    return (
      <Layout className="container-fluid text-center">
        <MinHeight className="row">
          <div className="col-12 text-white">
            <h1 className='mt-5'><b>Who's Death ?</b></h1>
            <h3 className='mt-2'><b>ตายไปแล้ว {diedTable.length} คน</b></h3>
          </div>
          <div className="col-12">
            <Slider {...settings} >
              {
                diedTable.map((person, i) => {
                  return died && (
                    <div key={i} className="col-12">
                      <div key={i} className='card my-3' >
                        <div className="card-body">
                          <h5>
                            {`
                              ${ died[person].name ? died[person].name : '[KILLER]' }
                              ได้ฆ่า ${ died[person].code }
                              ด้วยวิธีการ ${ died[person].weapon !== '' ? died[person].weapon : 'ขังห้องมืดตาย' }
                            `}
                          </h5>
                        </div>
                        <div className="card-footer">
                        { died[person].message !== '' ? `"${died[person].message}"` : '[ไม่มีข้อความ]'  }
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </MinHeight>
      </Layout>
    )
  }
}
