import React, { Component } from "react"
import styled from "styled-components"

export default class Auth extends Component {
  render() {
    return (
      <Container>
        <CheqContainer>
          <Title>SOUNDCHEQ ICON</Title>
          <LoginBoxContainer>
            <LoginTitle>Venue Login</LoginTitle>
            <InputWrapper>
              <InputContainer>
                <Input placeholder="Username..." />
              </InputContainer>
              <InputContainer>
                <Input placeholder="Password..." type="password" />
              </InputContainer>
              <SignInButton>Sign In</SignInButton>
            </InputWrapper>
          </LoginBoxContainer>
        </CheqContainer>
      </Container>
    )
  }
}

const Container = styled.section`
  background: #534569;
  height: 100vh;
  width: 100%;
  color: #ffffff;
`
const Title = styled.div``
const LoginBoxContainer = styled.div`
  height: 300px;
  width: 300px;
  margin-top: 3rem;

  border-radius: 5px;
  background: white;
`
const LoginTitle = styled.div`
  background: #a48ad4;
  text-align: center;
  padding: 1rem;
`
const InputContainer = styled.div``

const InputWrapper = styled.section`
  background: #ececec;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Input = styled.input`
  margin-bottom: 1rem;
`

const CheqContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`
const SignInButton = styled.button`
  background: #4fa961;
  color: white;
  width: 75%;
  height: 2rem;
`
