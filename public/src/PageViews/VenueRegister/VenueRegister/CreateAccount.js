import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import TextInput from '../../../components/Inputs/TextInput'
import FormButton from '../../../components/Buttons/FormButton'
import { emailFn, nameFn, passwordFn } from '../../../utils/formValidators'

const RegisterContainer = styled.div`
  height: 90vh;
  width: 60vw;
  padding: 40px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
  color: #1e1e1e;
`
const SubHeader = styled(Header)`
  text-align: center;
  font-size: 16px;
  margin-bottom: 40px;
`

const FormGroup = styled.div`
  display: flex;
`

const TextInputWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`

const HintText = styled.div`
  font-size: 12px;
  color: #1e1e1e;
  position: absolute;
  bottom: 20px;
  left: 20px;
`
const ErrorText = styled(HintText)`
  color: #cf0001;
`
const grow = keyframes`
from {
    height: 0px;
    transform: scaleY(0)
  }
    to {
    height: 12px;
    transform: scaleY(1)
  }
`
const shrink = keyframes`
from {
    height: 12px;
    transform: scaleY(1)
  }
    to {
    height: 0px;
    transform: scaleY(0))
  }
`

const LessCommonError = styled.div`
  display: ${props => (props.error ? 'flex' : 'none')};
  width: 100%;
  color: red;
  margin-left: 20px;
  align-self: flex-start;
  font-size: 12px;
  margin-bottom: 20px;
  animation: ${props => (props.error ? grow : shrink)} 0.5s forwards;
`

class ContactInfo extends Component {
  state = {
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    nameError: false,
    emailError: false,
    passwordError1: false,
    passwordError2: false
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  handleInput = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  checkEmail = () => {
    let { email } = this.state
    let result = emailFn(email)
    this.setState({ emailError: !result })
  }

  checkName = () => {
    let { firstName, lastName } = this.state
    let fullName = firstName + lastName
    let result = nameFn(fullName)

    this.setState({ nameError: !result })
  }

  checkPassword = () => {
    let { password, confirmPassword } = this.state
    let result = passwordFn(password, confirmPassword)
    console.log(result)
    if (result === 'No match') {
      this.setState({ passwordError1: true })
    } else {
      this.setState({ passwordError2: !result })
    }
  }

  render() {
    return (
      <RegisterContainer>
        <Header>Create An Account</Header>
        <SubHeader>
          At Soundcheq, venues get access to their customers in ways never
          before possible.
        </SubHeader>
        <Form onSubmit={() => this.handleSubmit()}>
          <FormGroup>
            <TextInputWrapper>
              <TextInput
                marginRight={'5px'}
                name={'firstName'}
                width={'200px'}
                placeholder={'First Name'}
                type={'text'}
                updateFn={this.handleInput}
                required={'required'}
                onBlur={this.checkName}
              />
              <TextInput
                width={'200px'}
                name={'lastName'}
                placeholder={'Last Name'}
                type={'text'}
                updateFn={this.handleInput}
                required={'required'}
                onBlur={this.checkName}
              />
              <HintText />
            </TextInputWrapper>
          </FormGroup>

          <LessCommonError error={this.state.nameError}>
            Are you sure you entered the correct name?
          </LessCommonError>

          <TextInputWrapper>
            <TextInput
              marginBottom={'50px'}
              name={'email'}
              placeholder={'Email'}
              type={'text'}
              updateFn={this.handleInput}
              required={'required'}
              onBlur={this.checkEmail}
            />
            {!this.state.emailError ? (
              <HintText>You'll use this to sign in later.</HintText>
            ) : (
              <ErrorText>
                Are you sure you entered your correct email?
              </ErrorText>
            )}
          </TextInputWrapper>
          <FormGroup>
            <TextInput
              marginRight={'5px'}
              width={'200px'}
              name={'phone'}
              placeholder={'Phone'}
              type={'text'}
              updateFn={this.handleInput}
              required={'required'}
            />
            <TextInput
              marginRight={'5px'}
              width={'200px'}
              name={'jobTitle'}
              placeholder={'Job Title'}
              type={'text'}
              updateFn={this.handleInput}
              required={'required'}
            />
          </FormGroup>
          <FormGroup>
            <TextInputWrapper>
              <TextInput
                marginRight={'5px'}
                width={'200px'}
                name={'password'}
                placeholder={'Password'}
                type={'password'}
                updateFn={this.handleInput}
                required={'required'}
              />

              <TextInput
                marginBottom={'50px'}
                width={'200px'}
                name={'confirmPassword'}
                placeholder={'Confirm Password'}
                type={'password'}
                updateFn={this.handleInput}
                required={'required'}
                onBlur={this.checkPassword}
              />
              {!this.state.passwordError1 && !this.state.passwordError2 ? (
                <HintText>
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols.
                </HintText>
              ) : this.state.passwordError1 && !this.this.state.passwordError2 ? (
                <ErrorText>Your password's do not match</ErrorText>
              ) : !this.state.passwordError1 && this.state.passwordError2 ? (
                <ErrorText>
                  Please use 8 or more characters with a mix of letters, numbers
                  & symbols.
                </ErrorText>
              ) : (
                <ErrorText>Your password's do not match</ErrorText>
              )}
            </TextInputWrapper>
          </FormGroup>
          <FormButton type={'submit'} title={'Next'} />
        </Form>
      </RegisterContainer>
    )
  }
}

export default ContactInfo
