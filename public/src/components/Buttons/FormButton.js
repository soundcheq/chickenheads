import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  height: 50px;
  width: 215px;
  color: #ffffff;
  background: #469f56;
  font-size: 20px;
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
