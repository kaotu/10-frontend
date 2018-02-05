// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import styled, { ServerStyleSheet } from 'styled-components'



export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
          <title>WIP Camp #10 : Ways to IT Professionals Camp</title>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta name="description" content="WIP Camp #10 : Ways to IT Professionals Camp ค่ายเส้นทางสู่ฝันนักไอที : ค่าย สำหรับน้องๆ มัธยม ปลาย ที่จะพาน้องๆมาทำความรู้จักกับ ไอที อย่างเต็มตัว ตลอดทั้ง ค่าย น้องๆจะได้รับ ความรู้ ความสนุกสนาน จากพี่ๆ ไอที บางมด แล้วเจอกันนะครับ"/>
          <meta name="keywords" content="wipcamp,itcamp,ค่ายไอที,ค่ายคอม"/>
          <meta property="og:title" content="WIP Camp #10 : Ways to IT Professionals Camp : ค่ายเส้นทางสู่ฝันนักไอที "/>
          <meta property="og:type" content="company"/>
          <meta property="og:url" content="https://wip.camp/"/>
          <meta property="og:image" content="https://frontend.freezer.wip.camp/static/image/bg.jpg"/>
          <meta property="og:site_name" content="WIP Camp #10 : Ways to IT Professionals Camp : ค่ายเส้นทางสู่ฝันนักไอที"/>
          <style>{`body { margin: 0; } /* custom! */`}</style>
          <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="/static/css/fontawesome-all.min.css"/>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> 
          <link rel="shortcut icon" href="/static/image/favicon.ico" type="image/x-icon"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon.png"/>
          <link rel="icon" href="/static/image/favicon.ico" type="/image/x-icon"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/static/image/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/image/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/static/image/favicon/site.webmanifest"/>
          <link rel="mask-icon" href="/static/image/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content=" #002D40"/> 
          <meta name="theme-color" content=" #002D40"/>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
          <div dangerouslySetInnerHTML={{__html: 
          `
          <!-- Hotjar Tracking Code for https://frontend.kati.wip.camp/ -->
          <script>
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:770336,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          </script>
          `
          }} />>
        </body>
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script> */}
        
      </html>
    )
  }
}
