import React, { Component } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  height: 40px;
  width: ${props => (props.width ? props.width : '100%')};
  border: none;
  border-radius: 2px;
  padding: 0px 20px;
  font-size: 16px;
  color: #343535;
  background-color: #e9e9e9;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : '25px'} ;
  margin-right: ${props => props.marginRight ? props.marginRight : '0px'}};
  &::placeholder {
    color: #6A6A6A;
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
      onBlur,
      width,
      marginRight,
      marginBottom
    } = this.props
    return (
      <Input
        marginBottom={marginBottom}
        marginRight={marginRight}
        width={width}
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
