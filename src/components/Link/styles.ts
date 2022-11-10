import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/Global/colors";


export const LinkBack = styled(Link)`
  padding: 6px 20px;
  border-radius: 3px;
  background-color: ${colors.colorPrimary};
  color: ${colors.colorGrey0};
`;

export const LinkLogin = styled(Link)`
  padding: 8px 67px;
  border-radius: 8px;
  max-width: 400px;
  background-color: #f89cb5;
  
  color: ${colors.colorGrey0};
  &:disabled {
    filter: opacity(0.7);
  }

  :hover{
    background-color: ${colors.colorPrimary};
  }
`;
