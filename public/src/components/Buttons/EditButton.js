import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  height: 30px;
  width: 100px;
  color: #ffffff;
  background: #469f56;
  font-size: 13px;
  border-radius: 5px;
  align-self: flex-end;
  margin-top: ${props => (props.marginTop ? props.marginTop : '10px')};
  position: ${props => (props.position ? props.position : 'static')};
  bottom: ${props => (props.bottom ? props.bottom : 'auto')};
  right: ${props => (props.right ? props.right : 'auto')};
`

class EditButton extends Component {
  render() {
    return (
      <Button
        onClick={this.props.onClickFn}
        type={this.props.type}
        position={this.props.position}
        bottom={this.props.bottom}
        right={this.props.right}
        marginTop={this.props.marginTop}
      >
        <i style={{marginRight: "10px"}}class="far fa-edit"></i>
        {this.props.title}
      </Button>
    )
  }
}

export default EditButton
