import { injectGlobal } from 'styled-components';

export default injectGlobal`
  @font-face {
    font-family: 'Pridi';
    src: url('/static/font/Pridi-Light.ttf');
  }
  body {
    font-family: 'Pridi';
  }
  .navbar-toggle:focus {
    background-color: #fff;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
		color: #00ace9;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
		color: #ffffff;
  }
  .nav-item{margin-bottom:0px}
  nav-link{
    display:block;
    padding:0rem 0rem}
  .nav-link:focus{
    background-color: #fff;
  }
`