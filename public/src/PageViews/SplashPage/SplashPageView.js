import React, { Component } from 'react'
import styled from 'styled-components'
import SignUp from './splashpage/Signup'
import IphoneXContent from './splashpage/Iphonex'
import Banner from './splashpage/Banner'
import Soundcheq from '../../assets/BandW-animated-logo.gif'
import landingBackground from '../../assets/landingBackground.jpg'
import bannerItems from '../../utils/banner_items'

export default class SplashPageView extends Component {
  render() {
    return (
      <MainContainer>
        <Banner icon="fas fa-circle" bannerItems={bannerItems} />
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
  height: 70%;
  position: relative;
`
const MainContainer = styled.section`
   background: url(${landingBackground});
  opacity: 0.98;
  height: 100vh;
  width: 100%;
  color: #ffffff;
  letter-spacing: 2px;
`

const H1Section = styled.section`
  ${f};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const SoundcheqLogo = styled.img`
  width: 30rem;
  margin-bottom: 0.5rem;
  margin-left: 55px;
  margin-top: 1rem;
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
  color: white;''
`

const Line = styled.div`
  border-bottom: 1px solid white;
  width: 44%;
  margin-top: 2rem;
`
