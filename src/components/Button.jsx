// src/components/Button.jsx
import React from "react";

const Button = ({children, onClick}) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button; // Certifique-se de que está exportando como default
