import React, { Component } from 'react'
import styled from 'styled-components'
import FormButton from '../../../components/Buttons/FormButton'
import axios from 'axios'

export default class RegisterForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    zip: '',
    birthday: '',
    email: '',
    gender: '',
    soundTypes: ['Stype1'],
    venueTypes: ['bar', 'the clam'],
    stypeOptionsMenu: false,
    duplicateVenueType: false,
    maxVenuesError: false
  }
  //Get Endpoints
  getSTypes() {
    axios.get('/api/sTypes').then()
  }

  getVTypes() {
    axios.get('/api/vTypes').then()
  }

  getUserInfo() {
    axios.get('/api/userInfo').then()
  }
  //end of Gets

  //post Endpoints
  submitForm() {
    const {
      firstName,
      lastName,
      zip,
      birthday,
      gender,
      soundTypes,
      venueTypes
    } = this.state
    axios
      .post('/api/submitUserApplication', {
        firstName,
        lastName,
        zip,
        birthday,
        gender,
        soundTypes,
        venueTypes
      })
      .then(res => {})
  }
  //End of Posts

  inputTracker(e) {
    let { name, value } = e.target
    this.setState(
      {
        [name]: value
      },
      _ => console.log(this.state)
    )
  }

  openOptions(bool) {
    this.setState(
      {
        stypeOptionsMenu: !bool
      },
      _ => console.log(this.state.stypeOptionsMenu)
    )
  }

  addSoundType(e) {
    let { name } = e.target
    let { soundTypes } = this.state
    soundTypes.forEach(v => {
      soundTypes.includes(name) || soundTypes.length >= 3
        ? this.setState({
            duplicateVenueType: true
          })
        : this.setState({
            duplicateVenueType: false,
            soundTypes: [...this.state.soundTypes, name]
          })
      soundTypes.length >= 3
        ? this.setState({
            duplicateVenueType: false,
            maxVenuesError: true
          })
        : null
    })
  }

  render() {
    const soundTypes = this.state.soundTypes.map(v => (
      <SoundTypesDiv key={v}>{v}</SoundTypesDiv>
    ))
    const venueTypes = this.state.venueTypes.map(v => <div key={v}>{v}</div>)

    const favSTypes = [
      'Stype1',
      'SType2',
      'Stype3',
      'Stype4',
      'Stype5',
      'Stype6'
    ]
    const sTypeButtons = favSTypes.map(v => (
      <AddFavButton key={v} name={v} onClick={e => this.addSoundType(e)}>
        {v}
      </AddFavButton>
    ))
    return (
      <FormContainer>
        <Title>Edit Your Profile</Title>
        <GoBack>Go Back</GoBack>
        <InputContainer>
          <OptionInputContainer>
            <Input
              onChange={e => this.inputTracker(e)}
              type="text"
              placeholder="First Name"
              name="firstName"
              required="true"
            />
          </OptionInputContainer>
          <OptionInputContainer>
            <Input
              onChange={e => this.inputTracker(e)}
              type="text"
              placeholder="Last Name"
              name="lastName"
            />
          </OptionInputContainer>
          <OptionInputContainer>
            <Input
              onChange={e => this.inputTracker(e)}
              type="text"
              placeholder="Email"
              name="email"
            />
          </OptionInputContainer>
          <OptionInputContainer>
            <Input
              onChange={e => this.inputTracker(e)}
              type="text"
              placeholder="Date of Birth"
              name="birthday"
            />
          </OptionInputContainer>
          <OptionInputContainer>
            <Input
              onChange={e => this.inputTracker(e)}
              type="text"
              placeholder="Zip"
              name="zip"
            />
          </OptionInputContainer>
        </InputContainer>
        <FormOption>
          Why Type Of Music do you enjoy most? <Max>( Max 3 )</Max>
        </FormOption>
        <OptionInputContainer>
          <div style={{ display: 'flex' }}>
            <FavoritesContainer>{soundTypes}</FavoritesContainer>
            <Error display={this.state.duplicateVenueType ? 'flex' : 'none'}>
              * You Already Have this Item
            </Error>
            <Error display={this.state.maxVenuesError ? 'flex' : 'none'}>
              * Remove Soundtype to add another
            </Error>
          </div>
          <Parent>
            <Cbox
              type="checkbox"
              className="cbox"
              onClick={_ => this.openOptions(this.state.stypeOptionsMenu)}
            />
            <Add for="cbox" className="add">
              Add Your SoundTypes
            </Add>
            <Message
              className="message"
              type="text"
              placeholder={
                this.state.stypeOptionsMenu ? 'Search for your Soundtype' : ''
              }
            />
          </Parent>
          <TypeContainer
            display={this.state.stypeOptionsMenu === true ? 'grid' : 'none'}
          >
            {sTypeButtons}
          </TypeContainer>
        </OptionInputContainer>
        <FormOption>
          What Venues do you prefer? <Max>( Max 3 )</Max>
        </FormOption>
        <OptionInputContainer>
          <div>{this.state.venueTypes}</div>
          <AddTypeButton>+ add</AddTypeButton>
        </OptionInputContainer>

        <FormButton title="Save Changes" />
      </FormContainer>
    )
  }
}

const FormContainer = styled.section`
  width: 100%;
  color: black;
  padding: 1rem;
  position: relative;
  background: white;
`

const GoBack = styled.button`
  position: absolute;
  right: 20px;
  top: 16px;
  width: 64px;
  height: 32px;
  color: gray;
  background: lightgray;
  outline: none;
  border: none;
`

const Title = styled.section`
  font-size: 40px;
  color: #1e1e1e;
  text-align: center;
  margin-bottom: 40px;
`
const FormOption = styled.section`
  margin-right: 16px;
  display: flex;
`
const OptionInputContainer = styled.section`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`
const AddFavButton = styled.button`
  width: 64px;
  background: #469f56;
  color: white;
  padding: 6px 10px;
`

const TypeContainer = styled.section`
  display: ${props => props.display};
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  width: 64px;
  margin-top: 17px;
`
const Input = styled.input`
  height: 40px;
  border: none;
  border-radius: 2px;
  padding: 0px 20px;
  font-size: 16px;
  color: #343535;
  background-color: #e9e9e9;
  &::placeholder {
    color: #6a6a6a;
    font-style: italic;
  }
  &:focus {
    outline: none;
  }
`
const AddTypeButton = styled.button`
  background: gray;
  padding: 6px;
  opacity: 0.8;
  border-radius: 6px;
  outline: none;
  width: 64px;
`
const SoundTypesDiv = styled.div`
  background: lightgray;
  padding: 10px 13px;
  margin-right: 3px;
  opacity: 0.8;
  border-radius: 6px;
  background: #469f56;
  opacity: 0.6;
  color: white;
`
const FavoritesContainer = styled.section`
  display: flex;
  margin: 6px 0;
`
const InputContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 55px 55px;
  grid-gap: 15px;
`
const Error = styled.div`
  display: ${props => props.display};
  align-items: center;
  color: red;
`

const Max = styled.div`
  font-size: 11px;
  font-weight: 400;
  font-style: italic;
  display: flex;
  align-items: center;
  margin-left: 10px;
`

// cool input styles
const Parent = styled.div`
  width: 200px;
  height: 50px;
  position: relative;

  .message {
    position: absolute;
  }
  .add,
  .message {
    color: orange;
  }
  .add {
    top: 9px;
    right: -15px;
    transition: 0.6s all 0.3s;
    letter-spacing: 1px;
  }
`
const Add = styled.label`
  position: absolute;
  color: orange;
  top: 12px;
  right: -15px;
  transition: 0.6s all 0.3s;
  letter-spacing: 1px;
`
const Message = styled.input`
  position: absolute;
  color: orange;
  outline: none;
  left: 24px;
  top: 21px;
  height: 0;
  width: 0;
  transition: 0.4s all;
  background: none;
  border: 2px solid red;
  transition: 0.4s width 0.2s, 0.1s height;
  font-size: 19px;
  &::placeholder {
    color: orange;
  }
`

const Cbox = styled.input`
  position: absolute;
  left: 0px;
  top: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  width: 30px;
  height: 30px;
  background: orange;
  border-radius: 100%;
  -webkit-appearance: none;
  z-index: 3;
  &:before,
  &:after {
    position: absolute;
    content: '';
    width: 20px;
    height: 2px;
    background: #e8e8e8;
    transition: 0.4s all;
  }
  &:after {
    transform: rotate(90deg);
  }
  &:checked {
    ~ .message {
      width: 241px;
      height: 30px;
      transition: 0.3s width, 0.3s height 0.2s;
    }
    &:before,
    &:after {
      transform: rotate(360deg);
      transition: 0.4s all;
    }
    ~ .add {
      font-size: 13px;
      transform: translateY(-16px);
      transition: 0.3s all;
    }
  }
`
