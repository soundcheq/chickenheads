import React, { Component } from 'react'
import styled from 'styled-components'
import Bars from './SignUp/purpleBars'
import { API } from '../../../config'

export default class SignUp extends Component {
  render() {
    return (
      <MainContainer>
        <RegisterNow>Register Now or Sign In</RegisterNow>
        <ButtonWrap>
          <Text style={{ marginTop: '2rem' }}>Are you a User?</Text>
          <LoginButtons>
            <BarsContainer>
              <Bars />
            </BarsContainer>
            <A href={API.registration.user}>User Login</A>
          </LoginButtons>
          <Text style={{ marginTop: '.5rem' }}>Are you a Venue??</Text>
          <LoginButtons>
            <BarsContainer>
              <Bars />
            </BarsContainer>
            <A href={API.registration.venue}>Venue Login</A> 
          </LoginButtons>
        </ButtonWrap>
      </MainContainer>
    )
  }
}

const MainContainer = styled.section`
  height: 15rem;
  width: 15rem;
  background: ghostwhite;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  letter-spacing: 1.25px;
  border-radius: 9px;
  text-decoration-line: none;
`

const LoginButtons = styled.button`
  cursor: pointer;
  padding: 0.6rem;
  width: 9rem;
  font-size: 1rem;
  background: #70cc81;
  margin-top: 0.5rem;
  position: relative;
  display: block;
  overflow: hidden;
  border-width: 0;
  outline: none;
  border-radius: 5px;
  transition: background-color, opacity 0.3s;
`
const BarsContainer = styled.section`
  transition: opacity ease-in-out .25s;
  opacity: 0;
  ${LoginButtons}:hover & {
    transition: opacity ease-in-out .5s;
    opacity: 1;
  }
`

const RegisterNow = styled.section`
  background: purple;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 0;
  padding: 1rem 0;
  color: white;
  background: #a48ad4;
  border-radius: 5px;
`

const ButtonWrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Text = styled.div`
  font-size: 11px;
  color: black;
  font-weight: bold;
`
const A = styled.a`
  text-decoration-line: none;
    color: white;
    position: relative;
    z-index: 50;
`