import React, { Component } from 'react'
import styled from 'styled-components'


const Input= styled.input`
height: 100%;
font-size: 20px;
border: none;
margin-left: 10px;
  &::placeholder{
    color: #6A6A6A;
    letter-spacing: 1px;
}
`

class LocationSearchInput extends Component {
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
      marginBottom,
      maxLength,
      minLength
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
        maxLength={maxLength}
        minLength={minLength}
      />
    )
  }
}

export default LocationSearchInput
