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
          <link rel="icon" type="image/png" href="../static/image/favicon.png" />
          <title>WIP Camp #10 : Ways to IT Professionals Camp</title>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta name="description" content="WIP Camp #10 : Ways to IT Professionals Camp ค่ายเส้นทางสู่ฝันนักไอที : ค่าย สำหรับน้องๆ มัธยม ปลาย ที่จะพาน้องๆมาทำความรู้จักกับ ไอที อย่างเต็มตัว ตลอดทั้ง ค่าย น้องๆจะได้รับ ความรู้ ความสนุกสนาน จากพี่ๆ ไอที บางมด แล้วเจอกันนะครับ"/>
          <meta name="keywords" content="wipcamp,itcamp,ค่ายไอที,ค่ายคอม"/>
          <meta property="og:title" content="WIP Camp #10 : Ways to IT Professionals Camp : ค่ายเส้นทางสู่ฝันนักไอที "/>
          <meta property="og:type" content="company"/>
          <meta property="og:url" content="http://wip.camp/"/>
          <meta property="og:image" content="/static/image/bg.png"/>
          <meta property="og:site_name" content="WIP Camp #9 : Ways to IT Professionals Camp : ค่ายเส้นทางสู่ฝันนักไอที"/>
          <meta name="theme-color" content="#463b6b"/>
          <meta name="msapplication-TileImage" content="/static/image/Favicon.png"/>
          <style>{`body { margin: 0; } /* custom! */`}</style>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/image/Favicon.png"/>
          <link rel="icon" type="image/png" href="/static/image/Favicon.png" sizes="16x16"/>
          <link rel="icon" sizes="32x32" href="/static/image/Favicon.png"/>
          <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="/static/css/fontawesome-all.min.css"/>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> 
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script> */}
      </html>
    )
  }
}