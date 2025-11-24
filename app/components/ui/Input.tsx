import React from "react";
import { InputProps } from "../../types/button";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      defaultValue,
      type,
      id,
      placeholder,
      value,
      className,
      disabled,
      max,
      min,
      checked,
      validation,
      onChange,
      onClick,
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        checked={checked}
        className={className}
        disabled={disabled}
        max={max}
        min={min}
        onChange={onChange}
        onClick={onClick}
        {...validation}
      />
    );
  }
);

Input.displayName = "Input";
export default Input;
