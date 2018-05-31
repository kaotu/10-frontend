import React from 'react'
import { insert, getAll } from '../Killer/firebaseHelper'

export default class DiedMain extends React.Component {
  state = {
    died: {},
    diedKey: [],
    diedTable: [],
    player: {
      fullName: '',
      nickname: '',
      sex: '',
      team: 'ยักษ์',
      code: '',
      flavor: 'กระเจี๊ยบ',
    }
  }
  async componentWillMount () {
    let died = await getAll(`died`).on('value', snap => {
      const snapshot = snap.val()
      const snapKey = Object.keys(snapshot)
      this.setState({
        died: snapshot,
        diedKey: snapKey,
        diedTable: snapKey
      })
    })
    let players = await getAll(`players`).on('value', snap => {
      const snapshot = snap.val()
      const snapKey = Object.keys(snapshot)
      console.log(snapshot)
      console.log(snapKey)
    })
  }
  insertPlayer = async (e) => {
    e.preventDefault()
    let { player, player: { fullName, nickname, sex, team, code, flavor } } = this.state
    let diedResult = await insert(`players`, {
      fullName, nickname, sex, team, code, flavor
    })
    this.setState({
      player: {
        ...player,
        fullName: '',
        nickname: '',
        sex: '',
        code: '',
        // team: '',
        // flavor: '',
      }
    })
  }
  search = async (e) => {
    let { diedKey, died } = this.state
    let searchDied = diedKey
    if (e !== '') {
      searchDied = await this.state.diedKey.filter((personKey) => {
        let queryPerson = died[personKey]
        if (queryPerson.killer.includes(e) || 
          queryPerson.code.includes(e) || 
          (queryPerson.name && queryPerson.name.includes(e)) ||
          (queryPerson.message && queryPerson.message.includes(e)) ||
          (queryPerson.weapon && queryPerson.weapon.includes(e))
        ) {
          return personKey
        }
      })
    }
    this.setState({
      search: e,
      diedTable: searchDied
    })
  }
  async componentDidMount () {
    //
  }
  render() {
    let { died, diedKey, diedTable, search, player, player: { fullName, nickname, sex, team, code, flavor } } = this.state
    return (
      <div className='container-fluid'>
        <div className="row">
          <div className="col-12">
            <h1 className='mt-3'>Dashboard Died</h1>
            
            <hr />
            <h2>Add Player</h2>
            <div className="card">
              <div className="card-body">
                <form className='form-group col-12' onSubmit={e => this.insertPlayer(e)}>
                    <div className="row">
                      <input
                        placeholder='Full Name'
                        className='form-control my-2 col-4'
                        onChange={e => this.setState({
                        player: {
                          ...player,
                          fullName: e.target.value
                        }
                        })}
                        value={fullName}
                        required
                      />
                      <input
                        placeholder='Nickname'
                        className='form-control my-2 col-4'
                        onChange={e => this.setState({
                        player: {
                          ...player,
                          nickname: e.target.value
                        }
                        })}
                        value={nickname}
                        required
                      />
                      <input
                        placeholder='Sex'
                        className='form-control my-2 col-4'
                        onChange={e => this.setState({
                        player: {
                          ...player,
                          sex: e.target.value
                        }
                        })}
                        value={sex}
                        required
                      />
                      <input
                        placeholder='Team'
                        className='form-control my-2 col-4'
                        onChange={e => this.setState({
                        player: {
                          ...player,
                          team: e.target.value
                        }
                        })}
                        value={team}
                        required
                      />
                      <input
                        placeholder='Code'
                        className='form-control my-2 col-4'
                        onChange={e => this.setState({
                        player: {
                          ...player,
                          code: e.target.value
                        }
                        })}
                        value={code}
                        required
                      />
                      <input
                        placeholder='Flavor'
                        className='form-control my-2 col-4'
                        onChange={e => this.setState({
                        player: {
                          ...player,
                          flavor: e.target.value
                        }
                        })}
                        value={flavor}
                        required
                      />
                    </div>
                    <input className='btn btn-primary col-12' type={`submit`} value={`ADD!`} />
                </form>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-8">
            <h2>Game Logging // ตายไปแล้ว {diedTable.length} คน</h2>
            <input placeholder='Search...' className='form-control col-12' value={search} onChange={e => this.search(e.target.value)} />
            <div className="container">
              <div className="row">
              {
                diedTable.map((person, i) => {
                  return died && (
                    <div className='col-4 card my-3' key={i} >
                      <div className="card-body">
                        รหัสคนฆ่า: { died[person].killer } <br />
                        รหัสคนตาย: { died[person].code } <br /><br />
                        นามแฝง: { died[person].name } <br />
                        ข้อความ: { died[person].message } <br /><br />
                        ฆ่าด้วยวิธีการ: { died[person].weapon }
                      </div>
                    </div>
                  )
                })
              }
              </div>
            </div>
          </div>
          <div className="col-4">
            <h2>Player</h2>
            <input placeholder='Search...' className='form-control col-12' />
            
          </div>
        </div>
      </div>
    )
  }
}
