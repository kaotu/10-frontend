import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

import { getAll, insert } from '../Killer/firebaseHelper'
import { Layout, MinHeight } from '../Killer/Main'

const DiedLayout = Layout.extend`
  background-size: 80%;
`

const DiedBackground = styled(MinHeight)`
  /* background: linear-gradient(to top left,rgb(0, 30, 160),rgba(255, 252, 232, 0.65),rgb(255,24,0)); */
`

export default class DiedMain extends React.Component {
  state = {
    giantTeam: [],
    monkeyTeam: [],
    playersArray: [],
    diedArray: [],
    codeDied: [],
    diedPerson: [],
    diedReason: [],
    diedPersonWithReason: [],
    totalGiant: 0,
    totalMonkey: 0
  }

  fetchDied = async () => {
    await getAll(`players`).on('value', async snap => {
      const snapshot = snap.val()
      const arrayList = Object.values(snapshot)
      const totalGiant = await this.getFilterByTeam(arrayList, 'ยักษ์')
      const totalMonkey = await this.getFilterByTeam(arrayList, 'ลิง')
      this.setState({
        playersArray: arrayList,
        totalGiant: totalGiant.length,
        totalMonkey: totalMonkey.length
      })
    })
    await getAll(`died`).on('value', async snap => {
      const snapshot = snap.val()
      const snapKey = Object.keys(snapshot).reverse()
      const arrayList = Object.values(snapshot)
      const valueInArray = await arrayList.map(value => {
        return Object.values(value)[0]
      })
      this.setState({
        diedArray: arrayList,
        codeDied: valueInArray
      })

      await this.getDiedPerson()
      await this.getDiedReason()
      await this.getFullPersonList()
    })
  }
  getFilterByTeam = async (team, teamName) => {
    return team.filter((person) => person.team === teamName)
  }
  getDiedPerson = async () => {
    let { codeDied, playersArray } = this.state
    let diedPerson = await playersArray.filter(person => {
      return codeDied.includes(person.code) && person
    })
    await diedPerson.sort((a, b) => {
      return a.code.localeCompare(b.code)
    })
    this.setState({
      diedPerson
    })
  }
  getDiedReason = async () => {
    let { codeDied, diedArray } = this.state
    let diedReason = await diedArray.filter(person => {
      return codeDied.includes(person.code) && person
    })
    await diedReason.sort((a, b) => {
      return a.code.localeCompare(b.code)
    })
    this.setState({
      diedReason
    })
  }

  getFullPersonList = async () => {
    let { diedPerson, diedReason } = this.state
    let diedPersonWithReason = []
    await diedPerson.map((person, i) => {
      diedPersonWithReason.push(person)
      diedPersonWithReason[i].reason = []
        for (let j = 0; j < diedReason.length; j++) {
          if(person.code === diedReason[j].code) {
            diedPersonWithReason[i].reason.push(diedReason[j])
          }
        }
    })
      
    this.setState({
      diedPersonWithReason,
      giantTeam: await this.getFilterByTeam(diedPersonWithReason, 'ยักษ์'),
      monkeyTeam: await this.getFilterByTeam(diedPersonWithReason, 'ลิง')
    })
  }
  isNull = (value) => {
    return value !== '' && value !== undefined && value !== null
  }

  async componentWillMount () {
    this.fetchDied()
  }
  async componentDidMount () {
    setTimeout(() => {
      this.forceUpdate()
    }, 5000)
  }
  render() {
    let { diedReason, diedPerson, giantTeam, totalGiant, monkeyTeam, totalMonkey, playersArray, diedPersonWithReason } = this.state
    let  settings = {
      dots: true,
      infinite: true,
      speed: 800,
      autoplaySpeed: 5000,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      arrows: false,
      rows: 1,
      vertical: true,
      pauseOnHover: false
    }
    return (
      <DiedLayout className="container-fluid text-center">
        <DiedBackground className="row py-4">
          <div className="col-12 col-lg-4 text-white d-flex flex-column justify-content-center align-items-center">
            <h1 className='mt-5'><b>ผลพวงจากสงคราม</b></h1>
            <h1 className='mt-2'><b>ดับชีพไปแล้ว <u className='animated infinite pulse'>{diedPerson && diedPerson.length}</u> จาก {playersArray && playersArray.length} คน</b></h1>
            <h3 className='mt-2'><b>มีคนพยายามฆ่า {diedReason.length} ครั้ง</b></h3>
            <h3 className='mt-2'><b>ฝ่ายลิงตายไป {giantTeam && giantTeam.length} คงเหลือ {totalGiant - giantTeam.length} จากทั้งหมด {totalGiant} </b></h3>
            <h3 className='mt-2'><b>ฝ่ายยักษ์ตายไป {monkeyTeam && monkeyTeam.length} คงเหลือ {totalMonkey - monkeyTeam.length} จากทั้งหมด {totalMonkey}</b></h3>
            <h3 className='mt-2'><b>#wipcamp & #wipcamp10</b></h3>
          </div>
          <div className="col-12 col-lg-8">
            <h1 className='text-white mt-4'><b>สถานการณ์ปัจจุบัน</b></h1>
            <Slider {...settings} >
              {
                diedPersonWithReason && diedPersonWithReason.map((person) => {
                  return person.reason.map((killer) =>(
                    <div className='card'>
                      <div className="card-body">
                        <h2>
                        {`${killer.name} ได้จัดการ ${person.nickname} รส${person.flavor} โดย ${this.isNull(killer.weapon)? killer.weapon : 'จับขังห้องมืดจนตาย'}`}
                        </h2>
                        <h4>
                        {`โดยฝากข้อความว่า "${this.isNull(killer.message)? killer.message : '...'}"`}
                        </h4>
                      </div>
                    </div>
                  ))
                })
              }
            </Slider>
          </div>
        </DiedBackground>
      </DiedLayout>
    )
  }
}
