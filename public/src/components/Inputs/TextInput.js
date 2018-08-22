import React, { Component } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  height: 40px;
  width: 300px;
  border: none;
  border-radius: 2px;
  padding: 0px 20px;
  font-size: 16px;
  color: #343535;
  background-color: #E9E9E9;
  margin-bottom: 20px;
  &::placeholder {
    color: #909090;
    font-style: italic;
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
