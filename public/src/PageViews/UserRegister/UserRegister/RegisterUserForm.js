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
    soundTypes: ['punk', 'techno'],
    favVenues: ['bar', 'the clam'],
    StypeOptionsMenu: false
  }

  inputTracker(e) {
    let { name, value } = e.target
    this.setState(
      {
        [name]: value
      },
      _ => console.log(this.state.soundTypes)
    )
  }

  openOptions(bool) {
    this.setState(
      {
        StypeOptionsMenu: !bool
      },
      _ => console.log(this.state.StypeOptionsMenu)
    )
  }

  addSoundType(e) {
    console.log('clicking the button mofo')
    let { name } = e.target
    let { soundTypes } = this.state
    soundTypes.forEach(v => {
      soundTypes.includes(name)
        ? console.log('You already have this favorite added')
        : this.setState(
            {
              soundTypes: [...this.state.soundTypes, name]
            },
            _ => console.log(soundTypes)
          )
    })
  }

  render() {
    const soundTypes = this.state.soundTypes.map(v => <div key={v}>{v}</div>)

    const favSTypes = ['Stype1', 'SType2', 'Stype3']
    const STypeButtons = favSTypes.map(v => (
      <AddFavButton key={v} name={v} onClick={e => this.addSoundType(e)}>
        {v}
      </AddFavButton>
    ))
    return (
      <FormContainer>
        <Title>Edit Your Profile</Title>
        <GoBack>Go Back</GoBack>
        <section>
          <OptionInputContainer>
            <input
              onChange={e => this.inputTracker(e)}
              type="text"
              placeholder="First Name"
              name="name"
            />
          </OptionInputContainer>
          <OptionInputContainer>
            <input
              onChange={e => this.inputTracker(e)}
              type="text"
              placeholder="Last Name"
              name="name"
            />
          </OptionInputContainer>
          <OptionInputContainer>
            <input
              onChange={e => this.inputTracker(e)}
              type="text"
              placeholder="Email"
              name="email"
            />
          </OptionInputContainer>
          <OptionInputContainer>
            <input
              onChange={e => this.inputTracker(e)}
              type="text"
              placeholder="Date of Birth"
              name="birthday"
            />
          </OptionInputContainer>
          <OptionInputContainer
            style={{
              alignItems: 'center'
            }}
          >
            <input
              onChange={e => this.inputTracker(e)}
              type="text"
              placeholder="Zip"
              name="state"
            />
          </OptionInputContainer>
          <FormOption>Why Type Of Music do you enjoy most?</FormOption>
          <OptionInputContainer>
            <div style={{ display: 'flex' }}>{soundTypes}</div>
            <TypeContainer
              display={this.state.StypeOptionsMenu === true ? 'block' : 'none'}
            >
              {STypeButtons}
            </TypeContainer>
            <button
              onClick={_ => this.openOptions(this.state.StypeOptionsMenu)}
            >
              add
            </button>
          </OptionInputContainer>
          <FormOption>What Venues do you prefer?</FormOption>
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
`
const OptionInputContainer = styled.section`
  margin-bottom: 16px;
  display: flex;
`
const AddFavButton = styled.button`
  background: #d0d0d0;
`

const TypeContainer = styled.section`
  display: ${props => props.display};
`
