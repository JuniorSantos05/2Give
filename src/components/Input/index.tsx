import { InputHTMLAttributes, useContext, useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { GiveContext } from "../../contexts/GiveContext";

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

interface IInputPropsNormal extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: FieldError | undefined;
}

export const InputNormal = ({ label, error, ...rest }: IInputPropsNormal) => {
  return (
    <>
      <label>{label}</label>
      <input {...rest} />
      {error && <span className="error">{error?.message}</span>}
    </>
  );
};
