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
  background-color: #e9e9e9;
  margin-bottom: 20px;
  &::placeholder {
    color: #909090;
    font-style: italic;
  }
  &:focus {
    outline: none;
  }
`

class TextInput extends Component {
  render() {
    let {
      name,
      type,
      placeholder,
      updateFn,
      required,
      onFocus,
      onBlur
    } = this.props
    return (
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={updateFn}
        required={required}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    )
  }
}

export default TextInput
