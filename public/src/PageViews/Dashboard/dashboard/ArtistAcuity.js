import React from 'react'
import styled from 'styled-components'
import * as style from '../_Variables'
import Sounds from './Sounds'
import Cheqs from './Cheqs'

export default function ArtistAcuity(props) {
  return (
     <Container>
       <AcuityMenu>
         <LI onClick={() => props.changeSubMenu(0)}>Sounds</LI>
         <LI onClick={() => props.changeSubMenu(1)}>Cheqs</LI>
       </AcuityMenu>

      {props.subMenu === 0 ? <Sounds/> : <Cheqs/>}     
     </Container>
  )
}

const Container = styled.section`
${style.f}
${style.column}
${style.w100}
`

const AcuityMenu = styled.nav `
${style.f}
${style.center}
border: 2px solid black;
height: 50px;
width: 100%;
justify-content: flex-end;
padding-right: 20px;
`

const LI = styled.li`
list-style-type: none;
margin: 0px 10px;
cursor: pointer;

:hover {
  color: gray;
}
`
