import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import bar from '../../../../assets/lightgreenbar.png'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <Bar1 src={bar} alt="nuttin" />
        <Bar2 src={bar} alt="nuttin" />
        <Bar3 src={bar} alt="nuttin" />
        <Bar1 style={{ left: '28px', bottom: '-26px', animationDelay: '.3s' }} src={bar} alt="nuttin" />
        <Bar2 style={{ left: '36px', bottom: '-25.5px', animationDelay: '.1.25s', height: '28px' }} src={bar} alt="nuttin" />
        <Bar3 style={{ left: '44px', bottom: '-23px', animationDelay: '.2s', height: '27px' }} src={bar} alt="nuttin" />
        <Bar2 style={{ left: '52px', bottom: '-33px', animationDelay: '.1s', height: '31px' }} src={bar} alt="nuttin" />
        <Bar1 style={{ left: '60px', bottom: '-22px', animationDelay: '.5s', height: '22px' }} src={bar} alt="nuttin" />
        <Bar3 style={{ left: '68px', bottom: '-28px', animationDelay: '.1s', height: '27px' }} src={bar} alt="nuttin" />
        <Bar3 style={{ left: '76px', bottom: '-26px', height: '27px' }} src={bar} alt="nuttin" />
        <Bar3 style={{ left: '84px', bottom: '-28px', animationDelay: '.1s', height: '31px' }} src={bar} alt="nuttin" />
        <Bar3 style={{ left: '92px', bottom: '-29px', animationDelay: '.2s', height: '28px' }} src={bar} alt="nuttin" />
        <Bar3 style={{ left: '100px', bottom: '-34px', animationDelay: '.1s', height: '33px' }} src={bar} alt="nuttin" />
        <Bar3 style={{ left: '108px', bottom: '-25px', height: '25px' }} src={bar} alt="nuttin" />
        <Bar9 src={bar} alt="nuttin" />
        <Bar10 src={bar} alt="nuttin" />
        <Bar11 src={bar} alt="nuttin" />
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
  left: 4px;
  z-index: 3;
  animation: ${BarAnimation1} ease-in 1s 0.1s infinite;
`
const Bar2 = styled.img`
  position: absolute;
  width: 0.5rem;
  height: 2rem;
  bottom: -25px;
  left: 12px;
  z-index: 3;
  animation: ${BarAnimation2} ease-in 1s infinite;
`
const Bar3 = styled.img`
  position: absolute;
  width: 0.5rem;
  height: 2rem;
  bottom: -27px;
  left: 20px;
  z-index: 3;
  animation: ${BarAnimation3} ease-in 1s 0.6s infinite;
`
const Bar9 = styled.img`
  position: absolute;
  width: 0.5rem;
  height: 2rem;
  bottom: -27px;
  right: 20px;
  z-index: 3;
  animation: ${BarAnimation1} ease-in 1s 0.1s infinite;
`
const Bar10 = styled.img`
  position: absolute;
  width: 0.5rem;
  height: 2rem;
  bottom: -29px;
  right: 12px;
  z-index: 3;
  animation: ${BarAnimation2} ease-in 1s infinite;
`
const Bar11 = styled.img`
  position: absolute;
  width: 0.5rem;
  height: 2rem;
  bottom: -26px;
  right: 4px;
  z-index: 3;
  animation: ${BarAnimation3} ease-in 1s 0.6s infinite;
`
