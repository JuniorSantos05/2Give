import styled from "styled-components";
import { colors } from "../../styles/Global/colors";

const StylerHeaderUser = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff0f6;

  padding: 10px 30px;

  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);

  h1 {
    font-weight: 700;
    font-size: 38px;
    line-height: 45px;

    color: ${colors.colorPrimary};
  }

  svg {
    color: ${colors.colorPrimary};
  }

  @media (min-width: 460px) {
    svg {
      display: none;
    }
  }

  nav {
    width: 70%;
    display: flex;
    justify-content: space-evenly;

    max-width: 700px;

    ul {
      width: 80%;

      display: flex;
      justify-content: space-evenly;
      align-items: center;

      gap: 10px;

      li {
        font-weight: 600;
        font-size: 16px;
      }
      a {
        transition: all 0.3s;

        color: ${colors.colorGrey4};

        :hover {
          color: ${colors.colorPrimary};
        }
      }
    }

    button {
      padding: 10px 16px;

      border-radius: 8px;

      background-color: ${colors.colorPrimary};
      color: ${colors.colorGrey0};

      transition: all 0.3s;

      :hover {
        background-color: ${colors.colorPrimarySoft};
      }
    }

    @media (max-width: 460px) {
      display: none;
    }
  }
`;

export default StylerHeaderUser;
