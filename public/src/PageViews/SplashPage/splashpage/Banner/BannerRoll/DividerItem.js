import React from "react";
import styled from "styled-components";

const DividerItem = ({ content, iconStyles, icon }) => {
  return (
    <Item style={iconStyles}>
      <i className={icon} />
    </Item>
  );
};

const Item = styled.div`
  height: 100%;
  width: initial;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px;
  white-space: nowrap;
  font-size: 5px;
  color: white;
`;

export default DividerItem;
