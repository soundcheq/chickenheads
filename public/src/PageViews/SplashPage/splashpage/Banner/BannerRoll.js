import React from 'react'
import styled, { keyframes } from 'styled-components'

class BannerRoll extends React.Component {
  render() {
    const { children, bannerItems } = this.props
    return (
      <Container id="banner-roll" count={bannerItems.length}>
        {children}
      </Container>
    )
  }
}

const looper = keyframes`
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-50%);
    }
`

const Container = styled.div`
  display: inline-flex;
  height: 100%;
  flex: auto;
  justify-content: flex-start;
  border-left: none;
  border-right: none;
  overflow: hidden;
  animation: ${looper} 60s linear infinite;
  transition: 1s linear;
  will-change: transform;
`

export default BannerRoll
