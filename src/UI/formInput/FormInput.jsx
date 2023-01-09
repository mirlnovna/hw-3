import React from "react";
import "./FormInput.css";

const FormInput = ({
  styled,
  id,
  labelName,
  placeholder,
  inputType,
  ...rest
}) => {
  return (
    <div className="first-input">
      <label className={styled} htmlFor={id}>
        {labelName}
      </label>
      <input
        placeholder={placeholder || "..."}
        id={id}
        type={inputType}
        {...rest}
      />
    </div>
  );
};

export default FormInput;
