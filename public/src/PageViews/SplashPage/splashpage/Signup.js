import React, { Component } from 'react'
import styled from 'styled-components'

export default class SignUp extends Component {
  state = {
  }
  
  TrackInput(e) {
      
    
  }
  render() {
    return (
      <MainContainer>
      <RegisterNow>Register Now or Sign In</RegisterNow>
      <ButtonWrap >
      <Text style={{ marginTop: '2rem'}}>Are you a User?</Text>
      <LoginButtons>User Login</LoginButtons>
      <Text style={{ marginTop: '.5rem'}}>Are you a Venue??</Text>
      <LoginButtons>Venue Login</LoginButtons>
      </ButtonWrap>
      </MainContainer>
    )
  }
}


const MainContainer = styled.section`
  height: 15rem;
  width: 15rem;
  background: lightblue;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  letter-spacing: 1.25px;
  border-radius: 9px;
`

const LoginButtons = styled.button`
    padding: .6rem;
    width: 9rem;
    font-size: 1rem;
    background: #70cc81;
    box-shadow: 0px 0px 4px black;
   border: none;
   margin-top: .5rem;
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
    color: white;
`