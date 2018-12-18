import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from '../../assets/Soundcheq-Logo-Animated.gif'
import Q from '../../assets/soundcheqQ.png'
import Dashboard from '../../assets/icons8-dashboard-64.png'
import Calendar from '../../assets/icons8-calendar-160.png'

export default class LeftPanel extends Component {
  render() {



    return (
      <Container>
        <GifContainer>
          <GifLogo src={Logo} alt="logogif" />
        </GifContainer>
        <MenuWrapper>
          <Menu>Menu</Menu>
          <MenuContainer>
            <OptionContainer>
              <Icon src={Dashboard}></Icon>
              <Option>Dashboard</Option>
            </OptionContainer>
            <OptionContainer>
              <Icon src={Calendar}></Icon>
              <Option>Calendar</Option>
            </OptionContainer>
            <OptionContainer>
              <Icon src={Calendar}></Icon>
              <Option>Inventory</Option>
            </OptionContainer>
            <OptionContainer>
              <Icon src={Calendar}></Icon>
              <Option>Spotlight</Option>
            </OptionContainer>
          </MenuContainer>
          <Menu style={{ marginTop: '4.8rem' }}>Create</Menu>
          <OptionContainer>
            <Icon src={Calendar}></Icon>
            <Option>Event</Option>
          </OptionContainer>
          <OptionContainer>
            <Icon src={Calendar}></Icon>
            <Option>Special</Option>
          </OptionContainer>
        </MenuWrapper>
        <Footer>
          <Footerp>2013 Soundcheq</Footerp>
          <Footerp>Terms Of Service</Footerp>
        </Footer>
      </Container>
    )
  }
}

const f = 'display: flex'

const Container = styled.section`
  width: 13%;
  height: 100vh;
  background-color: #12171d;
  background-image: url("${Q}");
  background-repeat: no-repeat;
  background-position: bottom 15px right;
  color: white;
  z-index: 1;
`

const GifContainer = styled.section`
  padding: 1.1rem;
  background: #a48ad4;
`
const GifLogo = styled.img`
  width: 100%;
`

const Icon = styled.img`
  width: 28px;
  height: auto;
  margin-right: 10px;
`

const MenuContainer = styled.section``
const Menu = styled.section`
  font-size: 11px;
  opacity: 0.3;
  letter-spacing: 0.25px;
  margin-bottom: 1.25rem;
  margin-left: 5px;
`
const MenuWrapper = styled.section`
  padding: 3rem 1.5rem;
`
const OptionContainer = styled.section`
  ${f};
  justify-content: left;
  align-items: center;
  margin-left: 6px;
  padding: 0.4rem;
  cursor: pointer;
  opacity: 0.9;
  margin-bottom: 1.5px;

  &:hover {
    background: #1b242b;
    border-radius: 6px;
  }
`

const Option = styled.section`
  font-size: 11px;
  margin-top: 3px;
  letter-spacing: 0.5px;
`

// * FOOTER

const Footer = styled.section`
  bottom: 15px;
  left: -10px;
  position: absolute;
  white-space: nowrap;
  ${f};
`
const Footerp = styled.div`
  width: 100%;
  font-size: 9px;
  margin-left: 1rem;
  opacity: 0.7;
  cursor: pointer;
`
