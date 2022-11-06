import styled from "styled-components";
import { colors } from "../../styles/Global/colors";

export const DivMenuMobile = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;

  background-color: #fff0f6;

  animation: show-menu 0.4s;

  top: 7%;

  @keyframes show-menu {
    0% {
      top: 0;
    }
    100% {
      top: 1;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    margin: 15px 30px;

    li {
      font-weight: 600;
      font-size: 16px;

      align-items: flex-start;

      margin: 12px 0;
    }
    a {
      transition: all 0.3s;

      color: ${colors.colorGrey4};

      :hover {
        color: ${colors.colorPrimary};
      }
    }
  }
`;
