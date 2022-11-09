import { FieldError, UseFormRegister} from "react-hook-form";
import { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: FieldError | undefined;
  register: UseFormRegister<any>;
  name: string;
}

export const Input = ({
  label,
  name,
  register,
  error,
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
