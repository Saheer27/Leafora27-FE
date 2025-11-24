export type ButtonProps = {
  type?: "button" | "submit" | "reset";
  className?: string;
  name?: string;
  id?: string;
  value?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type InputProps = {
  name?: string;
  type?: string;
  id?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  disabled?: boolean;
  max?: string | number;
  min?: string | number;
  defaultValue?: string;
  checked?: boolean;
  validation?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
};
