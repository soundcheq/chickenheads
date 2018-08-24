import React, { Component } from 'react'
import styled from 'styled-components'
import TextInput from '../../../components/Inputs/TextInput'
import FormButton from '../../../components/Buttons/FormButton'
import PasswordIndicator from '../../../components/Inputs/Indicators/PasswordIndicator'

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
const SubHeader = Header.extend`
  text-align: center;
  font-size: 16px;
  margin-bottom: 30px;
`

const Error = styled.div`
  height: 40px;
  width: 200px;
  color: #ff9494;
  margin-left: 10px;
`
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 210px;
`
const TextInputWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`
const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

const HintText = styled.div`
  font-size: 12px;
  color: #1e1e1e;
  position: absolute;
  bottom: 20px;
  left: 20px;
`

class ContactInfo extends Component {
  state = {
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  }

  handleSubmit = () => {
    alert('Submitted')
  }

  handleInput = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
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
            <TextInput
              marginRight={'5px'}
              name={'firstName'}
              width={'200px'}
              placeholder={'First Name'}
              type={'text'}
              updateFn={this.handleInput}
              required={'required'}
            />

            <TextInput
              width={'200px'}
              name={'lastName'}
              placeholder={'Last Name'}
              type={'text'}
              updateFn={this.handleInput}
              required={'required'}
            />
          </FormGroup>
          <TextInputWrapper>
            <TextInput
              marginBottom={'50px'}
              name={'email'}
              placeholder={'Email'}
              type={'text'}
              updateFn={this.handleInput}
              required={'required'}
            />
            <HintText>You'll use this to sign in later.</HintText>
          </TextInputWrapper>
          <FormGroup>
            <TextInput
              marginRight={'5px'}
              width={'200px'}
              name={'jobTitle'}
              placeholder={'Job Title'}
              type={'text'}
              updateFn={this.handleInput}
              required={'required'}
            />
            <TextInput
              width={'200px'}
              name={'phone'}
              placeholder={'Phone'}
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
            />
            <HintText>Use 8 or more characters with a mix of letters, numbers & symbols</HintText>
            </TextInputWrapper>
          </FormGroup>
          <FormButton type={'submit'} title={'Next'} />
        </Form>
      </RegisterContainer>
    )
  }
}

export default ContactInfo
