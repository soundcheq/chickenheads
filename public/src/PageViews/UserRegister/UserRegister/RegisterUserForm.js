import React, { Component } from 'react'
import styled from 'styled-components'

export default class RegisterForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    location: '',
    birthday: '',
    email: '',
    state: '',
    favMusic: ['punkrock yo'],
    soundTypes: ['punk', 'techno'],
    favVenues: ['bar', 'the clam'],
    favDrinks: ['tequila', 'Rum']
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

  addFavMusic() {
    this.setState(
      {
        favMusic: [...this.state.favMusic, 'dog']
      },
      _ => console.log(this.state.favMusic)
    )
    console.log(this.state.favMusic)
  }

  render() {
    const Test = this.state.favMusic.map(v => <div key={v}>{v}</div>)
    const favMusic = ['Test', 'Punk', 'regae']
    const favMusicOptions = favMusic.map(v => (
      <AddFavButton key={v}>{v}</AddFavButton>
    ))
    return (
      <FormContainer>
        <Title>Edit Your Profile</Title>
        <GoBack>Go Back</GoBack>
        <section>
          <OptionInputContainer>
            <FormOption>First Name</FormOption>
            <input
              onChange={e => this.inputTracker(e)}
              type="text"
              placeholder="name"
              name="name"
            />
          </OptionInputContainer>
          <OptionInputContainer>
            <FormOption>Last Name</FormOption>
            <input
              onChange={e => this.inputTracker(e)}
              type="text"
              placeholder="name"
              name="name"
            />
          </OptionInputContainer>
          <OptionInputContainer>
            <FormOption>Email</FormOption>
            <input
              onChange={e => this.inputTracker(e)}
              type="text"
              placeholder="email"
              name="email"
            />
          </OptionInputContainer>
          <OptionInputContainer>
            <FormOption>Birthday</FormOption>
            <input
              onChange={e => this.inputTracker(e)}
              type="text"
              placeholder="Birthday"
              name="birthday"
            />
          </OptionInputContainer>
          <OptionInputContainer
            style={{
              alignItems: 'center'
            }}
          >
            <FormOption>Location</FormOption>
            <input
              onChange={e => this.inputTracker(e)}
              type="text"
              placeholder="location"
              name="location"
            />
            <FormOption style={{ marginLeft: '16px' }}>State</FormOption>
            <input
              onChange={e => this.inputTracker(e)}
              type="text"
              placeholder="state"
              name="state"
            />
          </OptionInputContainer>

          <FormOption>Sound Types</FormOption>
          <OptionInputContainer>
            <div>{Test}</div>
            <div>{favMusicOptions}</div>
            <button onClick={_ => this.addFavMusic()}>add</button>
          </OptionInputContainer>
          <FormOption>Fav Venue</FormOption>
          <OptionInputContainer>
            <div>{this.state.favVenues}</div>
            <button>add</button>
          </OptionInputContainer>

          <button>Save Changes</button>
        </section>
      </FormContainer>
    )
  }
}

const FormContainer = styled.section`
  width: 100%;
  color: black;
  padding: 1rem;
  position: relative;
`

const GoBack = styled.button`
  position: absolute;
  right: 4px;
  top: 23px;
`

const Title = styled.section`
  font-size: 32px;
  text-align: center;
  margin-bottom: 40px;
`
const FormOption = styled.section`
  margin-right: 16px;
`
const OptionInputContainer = styled.section`
  margin-bottom: 16px;
  display: flex;
`
const AddFavButton = styled.button`
  background: #d0d0d0;
`
