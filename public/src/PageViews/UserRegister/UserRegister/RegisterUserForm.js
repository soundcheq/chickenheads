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
  render() {
    return (
      <div style={{ width: '100%' }}>
        <div>Edit Your Profile</div>
        <button>Go Back</button>
        <section>
          <div style={{ display: 'flex' }}>
            <div>Name</div>
            <input
              onChange={e => this.inputTracker(e)}
              type="text"
              placeholder="name"
              name="name"
            />
          </div>
          <div style={{ display: 'flex' }}>
            <div>Email</div>
            <input
              onChange={e => this.inputTracker(e)}
              type="text"
              placeholder="email"
              name="email"
            />
          </div>
          <div style={{ display: 'flex' }}>
            <div>Birthday</div>
            <input
              onChange={e => this.inputTracker(e)}
              type="text"
              placeholder="Birthday"
              name="birthday"
            />
          </div>
          <div style={{ display: 'flex' }}>
            <div>Location</div>
            <input
              onChange={e => this.inputTracker(e)}
              type="text"
              placeholder="location"
              name="location"
            />
            <div>State</div>
            <input
              onChange={e => this.inputTracker(e)}
              type="text"
              placeholder="state"
              name="state"
            />
          </div>
          <div style={{ display: 'flex' }}>
            <div>Fav Music</div>
            <div>{this.state.favMusic}</div>
            <button>+</button>
          </div>
          <div style={{ display: 'flex' }}>
            <div>Sound Types</div>
            <div>{this.state.soundTypes}</div>
            <button>+</button>
          </div>
          <div style={{ display: 'flex' }}>
            <div>Fav Venue</div>
            <div>{this.state.favVenues}</div>
            <button>+</button>
          </div>
          <div style={{ display: 'flex' }}>
            <div>Fav Drinks</div>
            <div>{this.state.favDrinks}</div>
            <button>+</button>
          </div>
          <button>Save Changes</button>
        </section>
      </div>
    )
  }
}

const FormContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`
