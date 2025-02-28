import React from "react";
import ButtonStyle from "./style";

const Button = ({ text, isActive = 1 }) => {
  return (
    <div>
      <ButtonStyle isactive={isActive}>{text}</ButtonStyle>
    </div>
  );
};

export default Button;