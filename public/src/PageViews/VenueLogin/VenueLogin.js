import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from '../../assets/Soundcheq-Logo-Animated.gif'

export default class Auth extends Component {
  state = {
    username: '',
    password: ''
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
          <GifLogo src={Logo} alt="logogif" />
          <LoginBoxContainer>
            <LoginTitle>Venue Login</LoginTitle>
            <InputWrapper>
              <InputContainer>
                <Icon>I</Icon>
                <form autocomplete="off">
                  <Input
                    placeholder="Username"
                    type="text"
                    onChange={e => this.inputTracker(e)}
                    name="username"
                  />
                </form>
              </InputContainer>
              <InputContainer>
                <Icon>I</Icon>
                <Input
                  placeholder="Password"
                  type="password"
                  onChange={e => this.inputTracker(e)}
                  name="password"
                  autocomplete="off"
                />
              </InputContainer>
              <SignInButton>Sign In</SignInButton>
            </InputWrapper>
            <VenueContainer>
              <Venue>Are you a venue?</Venue>
              <Apply>Apply Here</Apply>

              <Forgot>Forgot Password?</Forgot>
            </VenueContainer>
          </LoginBoxContainer>
          <Footer>
            <P>About</P>
            <P>Terms</P>
            <P>Privacy</P>
            <P style={{ marginRight: 0 }}>2018 Soundcheq LLC</P>
          </Footer>
        </CheqContainer>
      </Container>
    )
  }
}

const f = 'display: flex'
const faic = 'display: flex; align-items: center;'

const Container = styled.section`
  background: #534569;
  height: 100vh;
  width: 100%;
  color: #ffffff;
  letter-spacing: 2px;
`

const GifLogo = styled.img`
  width: 33%;
`
const LoginBoxContainer = styled.div`
  height: 300px;
  width: 300px;
  margin-top: 3rem;
  border-radius: 5px;
  background: white;
  box-shadow: 0px 13px 16px -8px black;
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
  ${f};
  flex-direction: column;
  align-items: center;
  letter-spacing: 0.5;
`

const Input = styled.input`
  -webkit-appearance: none;
  height: 1.89rem;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  outline: none;
  width: 11.5rem;
  border: 0;
  margin-bottom: 1rem;
  &::-webkit-input-placeholder {
    color: lightgray;
    text-indent: 0;
    font-weight: 300;
  }
  &:focus {
    color: #a48ad4;
    border-bottom: 2px solid #a48ad4;
    -webkit-appearance: none;
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
  height: 90%;
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
  padding: 10px 4px;
  letter-spacing: 1.5px;
`

const Apply = styled.div`
  margin: 0 0 0 8px;
  color: blue;
  border-right: 1px solid lightgray;
  padding-right: 4px;
  ${faic};
  height: 2rem;
  cursor: pointer;
`
const Venue = styled.div`
  color: gray;
  align-items: center;
  display: flex;
  height: 2rem;
`
const Forgot = styled.div`
  padding-left: 6px;
  align-items: center;
  display: flex;
  height: 2rem;
  cursor: pointer;
  color: blue;
`

//footer

const Footer = styled.section`
  display: flex;
  justify-content: center;
  letter-spacing: 1.5px;

  position: absolute;
  bottom: 0;
`
const P = styled.p`
  margin-right: 1.25rem;
  font-size: 11px;
  cursor: pointer;
`
