import React, { Component } from 'react'
import styled from 'styled-components'
import SignUp from './splashpage/Signup'
import IphoneXContent from './splashpage/Iphonex'
import Banner from './splashpage/Banner'

const bannerItems = [
  'NU-DISCO',
  'BREAKBEAT',
  'DRUM AND BASS',
  'DUBSTEP',
  'TRAP',
  'HIP HOP',
  'TECHNO',
  'METAL',
  'LOUNGE',
  'DEEP HOUSE',
  'POP',
  'PUNK',
  'JAZZ',
  'AVANT-GARDE',
  'REGGAE'
]

const fontStyles = {
  color: 'white',
  fontFamily: 'sans-serif'
}

const bannerStyles = {
  backgroundColor: '#544666',
  height: '35px'
}

const iconStyles = {
  color: '#85769A'
}

export default class SplashPageView extends Component {
  render() {
    return (
      <MainContainer>
        <Banner
          bannerItems={bannerItems}
          bannerStyles={bannerStyles}
          fontStyles={fontStyles}
          iconStyles={iconStyles}
          icon="fas fa-circle"
        />
        <H1Section>
          <div>Soundcheq</div>
          <div>LOREM IPSUM </div>
          <div />
        </H1Section>
        <MidContainer>
          <div />
          <IphoneXContent />
          <SignUp />
        </MidContainer>
      </MainContainer>
    )
  }
}

const f = 'display: flex'

const MidContainer = styled.section`
  ${f} justify-content: center;
  align-items: center;
  height: 94%;
`
const MainContainer = styled.section`
  height: 100vh;
`

const H1Section = styled.section`
  ${f} flex-direction:column;
  justify-content: center;
  text-align: center;
`
