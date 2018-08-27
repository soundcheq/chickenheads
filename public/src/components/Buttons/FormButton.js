import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  height: 50px;
  width: 120px;
  color: #ffffff;
  background: #469f56;
  font-size:16px;
  border-radius: 5px;
  align-self: flex-end;

`

class FormButton extends Component {
  render() {
    return (
      <Button onClick={this.props.onClickFn} type={this.props.type}>
        {this.props.title}
      </Button>
    )
  }
}

export default FormButton
