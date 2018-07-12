import React, { Component } from "react"
import styled from "styled-components"

export default class Auth extends Component {
  state = {
    username: "",
    password: ""
  }

  inputTracker(e) {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <Container>
        <CheqContainer>
          <Title>SOUNDCHEQ ICON</Title>
          <LoginBoxContainer>
            <LoginTitle>Venue Login</LoginTitle>
            <InputWrapper>
              <InputContainer>
                <Icon>I</Icon>
                <Input
                  placeholder="Username"
                  type="text"
                  onChange={e => this.inputTracker(e)}
                  name="username"
                />
              </InputContainer>
              <InputContainer>
                <Icon>I</Icon>
                <Input
                  placeholder="Password"
                  type="password"
                  onChange={e => this.inputTracker(e)}
                  name="password"
                />
              </InputContainer>
              <SignInButton>Sign In</SignInButton>
            </InputWrapper>
            <VenueContainer>
              <div>Are you a venue?</div>
              <Apply>Apply Here</Apply>
              <br />
              <div>Forgot Password?</div>
            </VenueContainer>
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
  letter-spacing: 2px;
  border-radius: 4px;
`
const Title = styled.div`
  font-size: 2rem;
`
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
  border-radius: 2px;
`
const InputContainer = styled.div`
  display: flex;
`

const InputWrapper = styled.section`
  background: #ececec;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 0.5;
`

const Input = styled.input`
  height: 1.89rem;
  color: black;
  font-size: 1rem;
  outline: none;
  width: 11.5rem;
  border: 0;
  margin-bottom: 1rem;
  &::-webkit-input-placeholder {
    color: lightgray;
  }
`
const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  background: white;
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
  width: 93%;
  height: 2.5rem;
  outline: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 13px;
`
const VenueContainer = styled.div`
  color: black;
  font-size: 9px;
  letter-spacing: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
`

const Apply = styled.div`
  margin: 0 8px 0 8px;
`
