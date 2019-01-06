import React from 'react';
import styled from 'styled-components'

const Backdrop = props => (
    <BackdropWrapper
       className="backdrop"
       onClick={props.click}
       />
);

const BackdropWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: rgba(0, 0, 0, 0.8);
`

export default Backdrop;