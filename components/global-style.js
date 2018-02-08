import { injectGlobal } from 'styled-components'

export default (colors) => injectGlobal`
  @font-face {
    font-family: 'Pridi';
    src: url('/static/font/Pridi-Light.ttf');
  }
  html {
    
    overflow-x: hidden;
  }
  body,html  {
    font-family: 'Pridi';
  }
  p {
    font-size:20px;
    color : white;
    letter-spacing: 0.03579em;
  }
  .nav-pills .nav-link.active {
    background-color:rgba(0,0,0,.3);
    border-radius: 12px;
  }
  .slick-prev,
  .slick-next {
    top : 50px !important;
  }
  .bm-menu {
    background-color: ${ colors };
  }
`
