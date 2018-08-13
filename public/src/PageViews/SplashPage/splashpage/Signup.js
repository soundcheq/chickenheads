import React, { Component } from 'react'
import styled from 'styled-components'
import Bars from './SignUp/purpleBars'

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
            <a href="http:localhost:3001/api/register/user">User Login</a>
          </LoginButtons>
          <Text style={{ marginTop: '.5rem' }}>Are you a Venue??</Text>
          <LoginButtons onClick={_ => this.VenueLogin()}>
            <BarsContainer>
              <Bars />
            </BarsContainer>
            Venue Login
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
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  color: #ecf0f1;
  transition: background-color 0.3s;
`
const BarsContainer = styled.section`
  opacity: 0;
  transition: opacity ease .1s
  ${LoginButtons}:hover & {
    transition: hover 4s;
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
