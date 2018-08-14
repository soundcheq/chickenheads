import React, { Component } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  height: 40px;
  width: 215px;
  border-radius: 3px;
  padding: 0px 20px;
  font-size: 20px;
  color: #343535;
  margin-bottom: 20px;
  &::placeholder {
    color: #D5D0D0;
  }
  &:focus {
    outline: 0 none;
  }
`

class TextInput extends Component {
  render() {
    return (
      <Input
        name={this.props.name}
        type={this.props.type}
        placeholder={this.props.placeholder}
        onChange={this.props.updateFn}
        required={this.props.required}
      />
    )
  }
}

export default TextInput
