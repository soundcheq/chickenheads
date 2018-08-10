import React, { Component } from 'react'
import styled from 'styled-components'
import SignUp from './splashpage/Signup'
import IphoneXContent from './splashpage/Iphonex'
import Banner from './splashpage/Banner'
import Soundcheq from '../../assets/WhiteLogo.PNG'

export default class SplashPageView extends Component {
  render() {
    return (
      <MainContainer>
        <Banner />
        <H1Section>
          <SoundcheqLogo src={Soundcheq} />
          <P>Your Night, Rediscovered.</P>
          <Line />
        </H1Section>
        <MidContainer>
          <div />
          <IphoneXContent />
          <SignUp />
        </MidContainer>
        <FooterContainer>
          <FP style={{ marginLeft: '55px' }}>About</FP>
          <FP>Terms</FP>
          <FP>Privacy</FP>
          <FP>2018 Soundcheq LLC</FP>
        </FooterContainer>
      </MainContainer>
    )
  }
}

const f = 'display: flex'

const MidContainer = styled.section`
  ${f};
  justify-content: center;
  align-items: center;
  height: 73%;
  position: relative;
`
const MainContainer = styled.section`
  height: 100vh;
`

const H1Section = styled.section`
  ${f};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: lightgray;
  text-align: center;
`
const SoundcheqLogo = styled.img`
  width: 30rem;
  margin-bottom: 0.5rem;
  margin-left: 55px;
`

const P = styled.div`
  color: white;
  font-size: 1.25rem;
`

const FooterContainer = styled.section`
  ${f};
  justify-content: center;
  position: relative;
  bottom: 15px;
  text-align: center;
`

const FP = styled.div`
  margin-right: 10px;
  ${'' /* color: white; */} color: black;
`

const Line = styled.div`
  border-bottom: 1px solid gray;
  width: 44%;
  margin-top: 2rem;
`
