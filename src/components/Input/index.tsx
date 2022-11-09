import { InputHTMLAttributes, useContext, useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: FieldError | undefined;
  register: UseFormRegister<any>;
  name: string;
}

export const Input = ({
  label,
  error,
  register,
  name,
  ...rest
}: IInputProps) => {
  return (
    <>
      <label>{label}</label>
      <input {...rest} {...register(name)} />
      {error && <span className="error">{error?.message}</span>}
    </>
  );
};
