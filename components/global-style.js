import { injectGlobal } from 'styled-components';

export default injectGlobal`
  @font-face {
    font-family: 'Pridi';
    src: url('/static/font/Pridi-Light.ttf');
  }
  body {
    font-family: 'Pridi';
    overflow-x:hidden;
  }
  p {
    font-size:20px;
  }
  .nav-pills .nav-link.active {
    background-color: red;
  }

`
