import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonStyled } from "./style";
import { VscLoading } from "react-icons/vsc";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  btnStyle?: any;
  isLoading?: boolean;
  type: any;
}

export const Button = ({
  children,
  isLoading = false,
  btnStyle,
  type,
  ...rest
}: IButtonProps) => {
  return (
    <>
      <ButtonStyled type={type} {...rest}>
        {isLoading ? <VscLoading /> : children}
      </ButtonStyled>
    </>
  );
};
