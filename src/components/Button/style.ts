import styled, { css } from "styled-components";

interface ITypographyProps {
  btnStyle?: any;
}

export const ButtonStyled = styled.button<ITypographyProps>`
  padding: 9px 60px;
  border-radius: 8px;
  max-width: 400px;
  background-color: #f0386b;
  color: #fff;
  &:disabled {
    filter: opacity(0.7);
  }

  /* ${({ btnStyle }) => {
    switch (btnStyle) {
      case "btnPrimary":
        return css`
          padding: 100px;
          color: red;
        `;
    }
  }} */
`;
