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
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Header = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
  color: #5d626a;
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
const PasswordInputWrapper = styled.div`
  display: flex;
  width: 100%;
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
          <TextInput
            name={'firstName'}
            placeholder={'First Name'}
            type={'text'}
            updateFn={this.handleInput}
            required={'required'}
          />

          <TextInput
            name={'lastName'}
            placeholder={'Last Name'}
            type={'text'}
            updateFn={this.handleInput}
            required={'required'}
          />
          <TextInput
            name={'jobTitle'}
            placeholder={'Job Title'}
            type={'text'}
            updateFn={this.handleInput}
            required={'required'}
          />
          <TextInput
            name={'email'}
            placeholder={'Email'}
            type={'text'}
            updateFn={this.handleInput}
            required={'required'}
          />
          <TextInput
            name={'phone'}
            placeholder={'Phone'}
            type={'text'}
            updateFn={this.handleInput}
            required={'required'}
          />
          <TextInput
            name={'password'}
            placeholder={'Password'}
            type={'password'}
            updateFn={this.handleInput}
            required={'required'}
          />
          <TextInput
            name={'confirmPassword'}
            placeholder={'Confirm Password'}
            type={'password'}
            updateFn={this.handleInput}
            required={'required'}
          />
          <FormButton type={'submit'} title={'Next'} />
        </Form>
      </RegisterContainer>
    )
  }
}

export default ContactInfo
