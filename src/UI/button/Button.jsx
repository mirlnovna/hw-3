import React from "react";
import "./Button.css";

const Button = ({ onClick, title, styled, ...props }) => {
  return (
    <button className={styled} onClick={onClick} {...props}>
      {title}
    </button>
  );
};

export default Button;
