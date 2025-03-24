import React from "react";
import styled from "styled-components";

export const Button = ({children, onClick, configObj = {}}) => {
  console.log("configObj", configObj);

  return (
    <SytledButton onClick={onClick} configObj={configObj}>
      {children}
    </SytledButton>
  );
};

const SytledButton = styled.button`
  background-color: ${({configObj}) => configObj?.backgroundColor || "#007bff"};
  width: ${({configObj}) => configObj?.width || "120px"};
  height: ${({configObj}) => configObj?.height || "40px"};
  font-size: ${({configObj}) => configObj?.fontSize || "1rem"};
  color: ${({configObj}) => configObj?.fontColor || "#fff"};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 5px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2));
  cursor: pointer;

  &:hover {
    background-color: ${({configObj}) =>
      configObj?.hoverBackgroundColor || "#0056b3"};
    color: ${({configObj}) => configObj?.hoverFontColor || "#0056b3"};
    transition: background-color 0.3s;
  }
`;
