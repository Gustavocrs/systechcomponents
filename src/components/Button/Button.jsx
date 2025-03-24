import React from "react";
import styled from "styled-components";

export const Button = ({children, onClick, configObj = {}}) => {
  return (
    <SytledButton onClick={onClick} style={configObj} configObj={configObj}>
      {children}
    </SytledButton>
  );
};

const SytledButton = styled.button`
  background-color: ${({configObj}) => configObj?.backgroundColor || "#007bff"};
  width: ${({configObj}) => configObj?.width || "100px"};
  height: ${({configObj}) => configObj?.height || "35px"};
  font-size: ${({configObj}) => configObj?.fontSize || "1rem"};
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`;
