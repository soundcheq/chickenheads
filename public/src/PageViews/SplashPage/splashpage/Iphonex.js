import React from 'react'
import styled from 'styled-components'
import Iphone from './img/iphone-x-transparent.png'

export default () => {
  return (
    <Container>
    <div style={{width: '70%'}}>
    <H1>Welcome to Soundcheq</H1>
    <div style={{textAlign: 'left'}}>Discover events and venues based on what you like to do.Lorem ipsum dolor s. Vestibulum leo felis, dictum sit amet ullamcorper te. Vestibulum leo felis, dictum sit amet ullamcorper tempor, rutrum eget erat. Cras non dolor atmpor, rutrum eget erat. Cras non dolor atg
</div>
    </div>
    <IphoneX src={Iphone } alt="Soundcheq"/>
    </Container>
  )
}

const f = 'display: flex'

const IphoneX = styled.img`
    height: 21rem;
    overflow: hidden;
    position: absolute;
    top: -115px;
    right: -71px;
    z-index: 1;
`

const Container = styled.section`
  width: 39rem;
    margin-right: 1rem;
    height: 10rem;
    background: #a48ad4;
    color: white;
    padding: 2.5rem 1.5rem;
  ${f};
  position: relative;
  letter-spacing:1px;
`

const H1 = styled.div`
font-size: 1.25rem;
text-align: center;
margin-bottom: 1rem;
`