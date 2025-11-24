import { ButtonProps } from "../../types/button";

export default function Button({
  type,
  name,
  value,
  id,
  className,
  disabled,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      name={name}
      id={id}
      value={value}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
