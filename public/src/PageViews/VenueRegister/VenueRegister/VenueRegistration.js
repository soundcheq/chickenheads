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
  margin-bottom: 20px;
  color: #343535;
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

class VenueRegistration extends Component {
  state = {
    venueName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    capacity: '',
    website: '',
    phone: '',
    venueType: '',
    soundTypes: []
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
        <Header>Add A Venue</Header>
        <SubHeader>
          At Soundcheq, venues get access to their customers in ways never
          before possible.
        </SubHeader>
        <Form onSubmit={() => this.handleSubmit()}>
          <InputContainer>
            <TextInput
              name={'venueName'}
              placeholder={'Venue Name'}
              type={'text'}
              updateFn={this.handleInput}
              required={'required'}
            />
            <Error>* You dun goofed </Error>
          </InputContainer>
          <TextInput
            name={'address'}
            placeholder={'Address'}
            type={'text'}
            updateFn={this.handleInput}
            required={'required'}
          />
          <TextInput
            name={'state'}
            placeholder={'State'}
            type={'text'}
            updateFn={this.handleInput}
            required={'required'}
          />
          <TextInput
            name={'zip'}
            placeholder={'Zip'}
            type={'text'}
            updateFn={this.handleInput}
            required={'required'}
          />
          <TextInput
            name={'capacity'}
            placeholder={'Capacity'}
            type={'text'}
            updateFn={this.handleInput}
            required={'required'}
          />
          <TextInput
            name={'website'}
            placeholder={'Website'}
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
            name={'venueType'}
            placeholder={'Venue Type'}
            type={'text'}
            updateFn={this.handleInput}
            required={'required'}
          />
          <FormButton type={'submit'} title={'Add Venue'} />
        </Form>
      </RegisterContainer>
    )
  }
}

export default VenueRegistration
