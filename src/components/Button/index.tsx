import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonStyled } from "./style";
import { VscLoading } from "react-icons/vsc";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  btnStyle?: any;
  isLoading?: boolean;
}

export const Button = ({
  children,
  isLoading = false,
  btnStyle,
  ...rest
}: IButtonProps) => {
  return (
    <>
      <ButtonStyled {...rest}>
        {isLoading ? <VscLoading /> : children}
      </ButtonStyled>
    </>
  );
};
