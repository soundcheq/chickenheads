import React, { Component } from 'react'
import styled from 'styled-components'
import TextInput from '../../../components/Inputs/TextInput'
import FormButton from '../../../components/Buttons/FormButton'

const RegisterContainer = styled.div`
  height: 90vh;
  width: 60vw;
  padding: 100px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  font-size: 40px;
  margin-bottom: 30px;
  color: #343535;
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
    }, () => console.log(this.state[name], name) )
  }

  render() {
    return (
      <RegisterContainer>
        <Header>Contact Information</Header>
        <Form onSubmit={() => this.handleSubmit()}>
          <InputContainer>
            <TextInput
              name={'firstName'}
              placeholder={'First Name'}
              type={'text'}
              updateFn={this.handleInput}
              required={'required'}
            />
            <Error>* You dun goofed </Error>
          </InputContainer>
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
