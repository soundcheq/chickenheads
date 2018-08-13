import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import bar from '../../../assets/lightgreenbar.png'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <Bar1 src={bar} alt="nuttin" />
        <Bar2 src={bar} alt="nuttin" />
        <Bar3 src={bar} alt="nuttin" />
        <Bar4 src={bar} alt="nuttin" />
        <Bar5 src={bar} alt="nuttin" />
        <Bar6 src={bar} alt="nuttin" />
      </div>
    )
  }
}

const BarAnimation1 = keyframes`
0%{
  transform: translateY(0)
  opacity:
}
25%{
  transform: translateY(-5px)
}
50% {
  transform: translateY(-9px)
}
75%{
  transform: translateY(-4px)
}
100%{
  transform: translateY(0)
}
`

const BarAnimation2 = keyframes`
0%{
  transform: translateY(-4px)
}
25%{
  transform: translateY(-9px)
}
50% {
  transform: translateY(-14px)
}
75%{
  transform: translateY(-8px)
}
100%{
  transform: translateY(-4px)
}
`
const BarAnimation3 = keyframes`
0%{
  transform: translateY(0)
}
25%{
  transform: translateY(-3px)
}
50% {
  transform: translateY(-10px)
}
75%{
  transform: translateY(-5px)
}
100%{
  transform: translateY(0)
}
`

const Bar1 = styled.img`
  position: absolute;
  width: 0.5rem;
  height: 2rem;
  bottom: -29px;
  left: 3px;
  animation: ${BarAnimation1} ease-in 1s 0.1s infinite;
`
const Bar2 = styled.img`
  position: absolute;
  width: 0.5rem;
  height: 2rem;
  bottom: -25px;
  left: 11px;
  animation: ${BarAnimation2} ease-in 1s infinite;
`
const Bar3 = styled.img`
  position: absolute;
  width: 0.5rem;
  height: 2rem;
  bottom: -27px;
  left: 19px;
  animation: ${BarAnimation3} ease-in 1s 0.6s infinite;
`
const Bar4 = styled.img`
  position: absolute;
  width: 0.5rem;
  height: 2rem;
  bottom: -27px;
  right: 19px;
  animation: ${BarAnimation1} ease-in 1s 0.1s infinite;
`
const Bar5 = styled.img`
  position: absolute;
  width: 0.5rem;
  height: 2rem;
  bottom: -29px;
  right: 11px;
  animation: ${BarAnimation2} ease-in 1s infinite;
`
const Bar6 = styled.img`
  position: absolute;
  width: 0.5rem;
  height: 2rem;
  bottom: -26px;
  right: 3px;
  animation: ${BarAnimation3} ease-in 1s 0.6s infinite;
`
