import React from "react";
import styled from "styled-components";

export const Input = ({
  type = "text",
  placeholder = "",
  label = "",
  name = "",
  value = "",
  ...props
}) => {
  return (
    <div>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledInput
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        {...props}
      />
    </div>
  );
};

const StyledInput = styled.input`
  width: 200px;
  padding: 10px 15px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  &:hover {
    border-color: #0056b3;
  }

  &:disabled {
    background-color: #f0f0f0;
    color: #ccc;
    border-color: #ccc;
    cursor: not-allowed;
  }
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 4px; /* Reduz a margem para aproximar do input */
  font-size: 14px;
  font-weight: bold;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
  line-height: 1.2; /* Ajusta o espaçamento vertical */
`;
