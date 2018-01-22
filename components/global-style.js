import { injectGlobal } from 'styled-components';

export default injectGlobal`
  @font-face {
    font-family: 'Pridi';
    src: url('/static/font/Pridi-Light.ttf');
  }
  body {
    font-family: 'Pridi';
  }
`