import React, { Component } from 'react'
import styled from 'styled-components'

export default class RegisterForm extends Component {
  state = {
    username: '',
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
    return (
      <FormContainer>
        <Title>Edit Your Profile</Title>
        <button>Go Back</button>
        <section>
          <OptionInputContainer>
            <FormOption>Name</FormOption>
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
          <OptionInputContainer>
            <FormOption>Fav Music</FormOption>
            <div>{Test}</div>
            <button onClick={_ => this.addFavMusic()}>add</button>
          </OptionInputContainer>
          <OptionInputContainer>
            <FormOption>Sound Types</FormOption>
            <div>{this.state.soundTypes}</div>
            <button onClick={_ => this.addFavMusic()}>add</button>
          </OptionInputContainer>
          <OptionInputContainer>
            <FormOption>Fav Venue</FormOption>
            <div>{this.state.favVenues}</div>
            <button>add</button>
          </OptionInputContainer>
          <OptionInputContainer>
            <FormOption>Fav Drinks</FormOption>
            <div>{this.state.favDrinks}</div>
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
`

const Title = styled.section`
  font-size: 32px;
  text-align: center;
`
const FormOption = styled.section`
  margin-right: 16px;
`
const OptionInputContainer = styled.section`
  margin-bottom: 16px;
  display: flex;
`
