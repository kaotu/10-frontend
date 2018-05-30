import React from 'react'
import styled from 'styled-components'
import { insert } from './firebaseHelper'

const Layout = styled.div`
  background-repeat: no-repeat;
  background-position: center bottom;
  background-image: url('/static/image/monkeyxgiant.png');
`

const MinHeight = styled.div`
  background: linear-gradient(to top , rgba(0,0,0,.65),rgba(255, 51, 0,1));
  min-height: 100vh;
`

const Modal = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;
  min-height: 100vh;
  min-width: 100vw;
  background: rgba(39, 20, 20, 0.95);
  top: 0;
  left: 0;
  transition: .5s;
`

export default class KillerMain extends React.Component {
  state = {
    code: '',
    modal: false
  }
  sentDied = async () => {
    let diedResult = await insert(`died`, {
      code: this.state.code
    })
    this.setState({
      code: ''
    })
  }
  closeModal = () => {
    this.setState({ modal: false })
  }
  render() {
    return (
      <Layout className='container'>
        <div className="row">
          <MinHeight className="col-12 d-flex justify-content-center align-items-center flex-column">
            <form className='form-group' onSubmit={(e) => {
              e.preventDefault()
              this.setState({
                modal: true
              })
            }} >
              <h1 className='text-white text-center'>Code Killer</h1>
              <h6 className='text-white text-center'>#wipcamp & #wipcamp10</h6>
              <input className='form-control col-12 mt-5 mb-3' type='text' value={this.state.code} onChange={(e) => this.setState({ code: e.target.value })} />
              <input type='submit' value='ฆ่า !' className='btn btn-danger col-12' />
            </form>
          </MinHeight>
        </div>
        <Modal show={this.state.modal}>
          <div className="container">
            <MinHeight className="row d-flex justify-content-center align-items-center">
              <div className="col-12 text-center">
                <h1 className='text-white mb-5'>ยืนยันที่จะฆ่า​?</h1>
              <button onClick={() => {
                this.sentDied()
                this.closeModal()
              }} className='btn btn-danger col-12 mb-3'>
                ยืนยัน
              </button>
              <button
                onClick={this.closeModal}
                className='btn btn-light col-12 mb-3'>
                ยกเลิก
              </button>
              </div>
            </MinHeight>
          </div>
        </Modal>
      </Layout>      
    )
  }
}
