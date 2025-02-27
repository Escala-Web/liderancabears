import React from "react";
import ButtonStyle from "./style";

const Button = ({ text, isActive = true }) => {
  return (
    <div>
      <ButtonStyle isActive={isActive}>{text}</ButtonStyle>
    </div>
  );
};

export default Button;
