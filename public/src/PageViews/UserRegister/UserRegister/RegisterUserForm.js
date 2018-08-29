import React, { Component } from 'react'
import styled from 'styled-components'
import FormButton from '../../../components/Buttons/FormButton'

export default class RegisterForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    zip: '',
    birthday: '',
    email: '',
    soundTypes: ['Stype1'],
    venueTypes: ['bar', 'the clam'],
    stypeOptionsMenu: false,
    duplicateVenueType: false,
    maxVenuesError: false
  }

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
          <TypeContainer
            display={this.state.stypeOptionsMenu === true ? 'grid' : 'none'}
          >
            {sTypeButtons}
          </TypeContainer>
          <AddTypeButton
            onClick={_ => this.openOptions(this.state.stypeOptionsMenu)}
          >
            + add
          </AddTypeButton>
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
