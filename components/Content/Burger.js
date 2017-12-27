import react from 'react'
import { slide as Menu } from 'react-burger-menu'

class Example extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (

      <div>
      <nav class="navbar navbar-expand-lg navbar-light">        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
        </Menu>
      </div>

    )
  }
}
export default Example