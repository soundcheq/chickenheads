import React from 'react'
import styled from 'styled-components'
import Iphone from '../../../assets/IphoneXNew.png'
import PhoneContent from '../../../assets/mobile-modal.png'

export default function iPhoneX() {
  return (
    <Container>
      <section style={{ width: '74%' }}>
        <H1>Welcome to Soundcheq</H1>
        <div style={{ textAlign: 'left' }}>
          Discover events based on what your mood and taste.  Connect with your favorite artists and venues so you can sieze every moment.   
        </div>
      </section>
      <IphoneContainer>
        <IphoneX src={Iphone} alt="Soundcheq" />
        <ContentImg src={PhoneContent} alt="bleh" />
      </IphoneContainer>
    </Container>
  )
}

const IphoneX = styled.img`
  height: 18rem;
  overflow: hidden;
  z-index: 1;
  position: absolute;
`
const IphoneContainer = styled.section`
  position: relative;
  top: -101px;
  right: -16px;
`
const ContentImg = styled.img`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 123px;
  height: 17rem;
`

const Container = styled.section`
  width: 560px;
  background: #a48ad4;
  margin-right: 1rem;
  padding: 2.5rem 1.5rem;
  letter-spacing: 1px;
  border-radius: 7px;
  color: white;
  display: flex;
  position: relative;
`

const H1 = styled.div`
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 1rem;
`
