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
          Discover events and venues based on what you like to do.Lorem ipsum
          dolor s. Vestibulum leo felis, dictum sit amet ullamcorper te.
          Vestibulum leo felis, dictum sit amet ullamcorper tempor, rutrum eget
          erat. Cras non dolor atmpor, rutrum eget erat. Cras non dolor atg
        </div>
      </section>
      <IphoneContainer>
        <IphoneX src={Iphone} alt="Soundcheq" />
        <ContentImg src={PhoneContent} alt="bleh" />
      </IphoneContainer>
    </Container>
  )
}

const f = 'display: flex'

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
  width: 35rem;
  height: 10.1rem;
  background: #a48ad4;
  margin-right: 1rem;
  padding: 2.5rem 1.5rem;
  letter-spacing: 1px;
  border-radius: 7px;
  color: white;
  ${f};
  position: relative;
`

const H1 = styled.div`
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 1rem;
`
