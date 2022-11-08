import { FieldError, FieldValues, UseFormRegister} from "react-hook-form";

interface IInputProps {
  label: string;
  error: FieldError | undefined;
  register: UseFormRegister<any>;
  name: string;
  placeholder: string;
}

export const Input = ({
  label,
  name,
  placeholder,
}: IInputProps) => {
  return (
    <>
      <label>{label}</label>
      <input {...register(name)} placeholder={placeholder} />
      {error && <span className="error">{error?.message}</span>}
    </>
  );
};
