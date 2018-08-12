import React, { Component } from 'react'
import styled from 'styled-components'
import SignUp from './splashpage/Signup'
import IphoneXContent from './splashpage/Iphonex'
import Banner from './splashpage/Banner'

export default class SplashPageView extends Component {
  render() {
    return (
      <MainContainer>
        <Banner icon="fas fa-circle" />
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
  justify-content: center;
  display: flex;
`
const MainContainer = styled.section`
  height: 100vh;
`

const H1Section = styled.section`
  ${f} flex-direction:column;
  justify-content: center;
  text-align: center;
`
