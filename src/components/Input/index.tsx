import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: FieldError | undefined;
  register: UseFormRegister<any>;
  id: string;
}

export const Input = ({
  label,
  error,
  register,
  id,
  placeholder,
  ...rest
}: IInputProps) => {
  return (
    <>
      <label>{label}</label>
      <input {...rest} {...register(id)} placeholder={placeholder} />
      {error && <span className="error">{error?.message}</span>}
    </>
  );
};
