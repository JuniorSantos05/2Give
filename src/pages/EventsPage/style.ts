import styled from "styled-components";
import { colors } from "../../styles/Global/colors";

export const MenuStyled = styled.ul`
  margin: 80px auto;
  flex-wrap: nowrap;
  li {
    width: 200px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 15px 20px;

    border-radius: 12px;
    border: 1px solid ${colors.colorGrey4};

    cursor: pointer;

    transition: all 0.4s;

    font-weight: 700;

    :hover {
      background-color: ${colors.colorPrimarySoft};
      color: ${colors.colorGrey0};
    }
  }
`;
