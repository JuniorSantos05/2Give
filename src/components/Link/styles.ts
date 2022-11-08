import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkBack = styled(Link)`
  padding: 6px 20px;
  border-radius: 3px;
  background-color: #f0386b;
  color: #fff;
`;

export const LinkLogin = styled(Link)`
  padding: 6px 67px;
  border-radius: 8px;
  max-width: 400px;
  background-color: #f89cb5;
  color: #fff;
  &:disabled {
    filter: opacity(0.7);
  }
`;
