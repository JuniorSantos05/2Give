import styled from "styled-components";
//import { colors } from "../../styles/Global/colors";
import { typography } from "../../styles/Global/typography";

export const Project = styled.li`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  cursor: pointer;

  img {
    width: 290px;
    height: 200px;
    border-radius: 16px;
  }

  span {
    align-self: baseline;
    padding: 0 15px;
    font-size: ${typography.title2};
    font-weight: ${typography.title2.weight};
  }
`;
