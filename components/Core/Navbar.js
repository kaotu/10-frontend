import react from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import Burger from './Burger'
import GameBut from './GameBut'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const NavItem = styled.nav`
  color: #ffff;
  background-color:${props => props.color || ''};
  border-bottom:.2em  solid #fff;
  transition: all .02s ease-in-out;
  top: ${props => props.onScrollDown ? '-170px':'0px'};

  ${props => props.primaryNav && `
  background-color:#24372f; 
  `}   
  `
const Regis = styled.button`
  width: 7em;
  display:inline-block;
  color:#ecf0f1;
  font-size:1.4em;
  text-decoration:none;
  border-radius:5px;
  border:solid 1px #e53c35;
  background:#e53c35;
  text-align:center;
  padding:.3em .2em;
  transition: all 0.1s;
  margin-bottom:5%;
  margin-right:1.5vw;
  z-index:1000;
  box-shadow: 0px 6px 0px #871612;
  cursor:pointer;
  transition:all 200ms ease-in-out;
  &:hover{
    box-shadow: 0px 2px 0px #871612;
    position:relative;
    top:4px;
  }
  @media(max-width:1024px){
    font-size:1.3em;
  }
  @media(max-width:768px){
    font-size:1.3em;
  }
  @media(max-width:576px){
    font-size:1.05em;
  }
  @media(max-width:412px){
    font-size:1em;
  }
  @media(max-width:320px){
    font-size:.9em;
  }
`

const NavLink = styled(Link)`
  color: #fff;
  font-size : 1.4em;
  width:8vw;
  background-color:${props => props.color || ''};
  border: 0vw;
  cursor:pointer;
  transition:all 250ms ease-in-out;
  &:hover{
    color: #fff;
    text-decoration: none;
    transition:scale(1.1);
    background-color: rgba(0, 0, 0, 0.3);
    border: 2vw;
    border-radius: 12px;
    width:8vw;
  }
  &:focus{
    // background-color: rgba(0, 0, 0, 0.3) !important;
    color: #fff;
    border-radius: 12px; 
    outline: none;
  }
`;

const nav = [
  { to: 'home', text: "Home"},
  { to: 'what', text: "What"},
  { to: 'who', text: "Who"},
  { to: 'where', text: "Where"},
  { to: 'when', text: "When"},
  { to: 'faqs', text: "FAQs"},
  { to: 'contact', text: "Contact"}]

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: '',
      current: 'home',
      show: false,
      lastScrollPos: 0,
      color: '',
      isMobile: false
    };
  }

  componentDidMount() {
    let isMobile = window.mobilecheck = () => {
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    }
    this.setState({
      isMobile : isMobile()
    })
  
    window.addEventListener("scroll", this.onScroll.bind(this), true);
    let color = JSON.parse(window.localStorage.getItem('color'))
    this.setState({
      color
    })
    scrollSpy.update();
  }

  onScroll(event) {
    let { isMobile } = this.state
    if(isMobile) {
      if(this.state.lastScrollPos > window.pageYOffset) {
        this.setState({
          direction:'up',
          lastScrollPos:window.pageYOffset
        })
      } else if(this.state.lastScrollPos < window.pageYOffset) {
        this.setState({
          direction:'down',
          lastScrollPos:window.pageYOffset
        })
      }
    }
  }

  render() {
    return (
      <NavItem color={this.state.color.nav} className="sticky-top" onScrollDown={this.state.direction=='down'}>
        <Burger />
        <div>
          <div className="navbar navbar-expand-lg">
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
              <nav id="navbar-desktop" className="nav nav-pills navbar-nav  justify-content-center ">
                {nav.map((nav, i) => (
                  <NavLink
                    color={this.state.color.nav}
                    spy={true}
                    key={i}
                    to={nav.to}
                    smooth={true}
                    className="nav-item nav-link text-center"
                  >
                    {nav.text}
                  </NavLink>
                ))}
              </nav>
            </div>
            <a href='https://itim.wip.camp' target="_blank">
              <Regis>สมัครเลย</Regis>
            </a>
          </div>
          <GameBut />
        </div>
      </NavItem>
    )
  }
}

export default Navbar;

