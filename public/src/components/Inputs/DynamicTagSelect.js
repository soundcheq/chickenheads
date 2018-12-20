import React, { Component } from 'react'
import styled from 'styled-components'

const Select = styled.select`
height: 40px;
width: ${props => (props.width ? props.width : '100%')};
border: none;
padding: 0px 20px;
font-size: 16px;
color: #343535;
background-color: #e9e9e9;
margin-bottom: ${props => props.marginBottom ? props.marginBottom : '25px'} ;
margin-right: ${props => props.marginRight ? props.marginRight : '0px'}};
&:focus {
  outline: none;
}
&:invalid {
  font-style: italic;
  color: #696a69;
}
`

class DynamicTagSelect extends Component {
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
      value,
      list,
      choice1,
      choice2,
      defaultValue
    } = this.props

    let listMap = list.map(l => {
      if(l !== choice1 && l !== choice2) {
          return(
              <option value={l}>{l}</option>
          )
      }
  })

    return (
      <Select
        choice1 = {choice1}
        choice2 = {choice2}
        list = {list} 
        value = {value}
        marginBottom={marginBottom}
        marginRight={marginRight}
        width={width}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={updateFn}
        required={required}
        onFocus={onFocus}
        onBlur={onBlur}>
          <option hidden selected value="">{defaultValue}</option>
          {listMap}
      </Select>
    )
}
}

export default DynamicTagSelect