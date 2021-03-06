import styled from 'styled-components'
import * as style from './_Variables'

export const Card = styled.div`
    ${style.f};
    background-color: white;
    position: relative;
    border-radius: 5px;
    width: 96%;
    height: ${props => props.height ? props.height : '40vh'}
    transition: height 0.3s ease-in-out;
    overflow: hidden;
    margin: 0px 20px;
    margin-top: ${props => props.mTop ? '20px' : '0px'}
  `

export const PurpleBox = styled.div`
  ${style.f};
  ${style.center};
	height: 15%;
	${style.w100};
	background: linear-gradient(355.91deg, #AF47FF 0%, #9219EE 75%, #880AE8 100%);
  position: absolute;
  ${props => props.top ? 'top: 0;' : 'bottom: -1px;'};
  padding-left: 2%;
`
 
export const H1 = styled.h1`
  font-size: 2em;
  color: ${props => props.black ? 'black' : 'white'}
`

export const Tabs = styled.nav`
${style.f};
width: 250px;
height: 40px;
background: white;
margin: 0 20px;
`

export const Tab = styled.li`
${style.f};
${style.allCenter};
width: 50%;
height: 100%;
background: ${props => props.tab ? 'white' : '#d7d7d7'}
cursor: pointer;
font-weight: 600;
`

