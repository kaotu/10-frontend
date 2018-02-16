import React from 'react'
import styled from 'styled-components'
import { content } from './data.json'
console.log(content)

const BackgroundContainer = styled.div`
  background-image: url('/static/image/legal/background.png');
  min-height: 100vh;
  background-size: cover;
  background-position: 50% 100%;
  background-attachment: fixed;
`

const StyledContent = styled.div`
  color: #032e51;
  background: #fff;
  margin-bottom: 5em;
  border-radius: 10px;
`

const Header = styled.h3`
  background: #336699;
  color: #fff;
  padding: 10px 0;
  text-align: center;
  margin: 0;
  border-radius: 10px 10px 0 0;
`

const ContentComponent = ({data, component = undefined}) => {
  switch (component) {
    case 'header':
      return <h4>{data}</h4>

    case 'ol':
      return (
        <ol>
          {
            data.map(text => (
              <li>
                {text}
              </li>
            ))
          }
        </ol>
      )
    default: 
      return (
        <p
          className='text-dark' 
          dangerouslySetInnerHTML={{__html: data}}
        />
      )
  }
}

const LegalComponent = () => (
  <BackgroundContainer>
    <div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-6'>
            <img src='/static/image/logofinals.png' className='img-fluid'/>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-10' >
            <StyledContent className=''>
              <Header>
                ข้อมูลด้านกฎหมาย
              </Header>
              <div className='row'>
                <div className='col-12'>
                  <div className=' px-3 pt-3 pb-5' >
                    {
                      content.map((c, key) => (
                        <ContentComponent
                          key={key}
                          {...c}
                        />
                      ))
                    }
                  </div>
                </div>
              </div>
            </StyledContent>
          </div>
        </div>

      </div>
    </div>
  </BackgroundContainer>
)

export default LegalComponent
