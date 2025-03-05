import React from "react";
import ButtonStyle from "./style";

const Button = ({ text, isActive = 1, onClick = null }) => {
  return (
    <div>
      <ButtonStyle isactive={isActive} onClick={onClick}>{text}</ButtonStyle>
    </div>
  );
};

export default Button;