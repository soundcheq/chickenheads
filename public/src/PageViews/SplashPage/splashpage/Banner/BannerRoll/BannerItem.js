import React from "react";
import styled from "styled-components";

const BannerItem = ({ content, margin, fontStyles }) => {
  return (
    <Item margin={margin} style={fontStyles}>
      <p>{content}</p>
    </Item>
  );
};

const Item = styled.div`
  height: 100%;
  width: initial;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${props => props.margin ? `0px ${props.margin}px` : "0px 15px"};
  white-space: nowrap;
`;

export default BannerItem;
