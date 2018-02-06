import { injectGlobal } from 'styled-components';

export default injectGlobal`
  @font-face {
    font-family: 'Pridi';
    src: url('/static/font/Pridi-Light.ttf');
  }
  body,html  {
    font-family: 'Pridi';
    overflow-x : hidden;
  }
  p {
    font-size:20px;
    color : white;
  }
  .nav-pills .nav-link.active {
    background-color:rgba(0,0,0,.3);
    border-radius: 12px;
  }
  .slick-prev,
  .slick-next {
    top : 50px !important;
  }

`
