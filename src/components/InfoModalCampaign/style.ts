import styled from "styled-components";
import { colors } from "../../styles/Global/colors";
import { typography } from "../../styles/Global/typography";

export const StyleInfoCampaign = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;

  background-color: rgba(10, 37, 64, 0.35);

  animation: show-modal 0.3s;

  @keyframes show-modal {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    max-width: 650px;
    min-width: 250px;

    margin: 10% auto;

    position: relative;


    transition: all 0.5s;

    @media (max-width: 665px) {
      margin: 10% 20px;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: white;

    position: relative;

    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 8px;

    gap: 30px;

    padding: 16px 14px;

    p {
      font-size: ${typography.title1.size};

      @media (max-width: 490px) {
        font-size: 12px;
      }
    }

    .box-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      padding: 10px 0;

      width: 100%;

      margin: 0;

      h3 {
        font-weight: ${typography.title1.weight};
        font-size: 24px;
        text-align: left;
        color: ${colors.colorPrimary};

        @media (max-width: 500px) {
          font-size: 20px;
        }

        @media (max-width: 435px) {
          font-size: 18px;
        }

        @media (max-width: 400px) {
          font-size: 16px;
        }
      }

      p {
        font-size: ${typography.title1.size};
        font-weight: 900;

        cursor: pointer;

        color: ${colors.colorGrey2};

        :hover {
          color: ${colors.colorPrimarySoft};
        }
      }
    }

    .container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      padding: 10px 0;

      width: 100%;

      margin: 0;

      @media (max-width: 650px) {
        flex-direction: column;
        gap: 10px;
      }

      span {
        font-size: ${typography.title1.size};
        font-weight: ${typography.title1.weight};
        text-align: center;

        @media (max-width: 490px) {
          font-size: 14px;
        }
        @media (max-width: 430px) {
          font-size: 12px;
        }
      }

      strong {
        color: ${colors.colorPrimary};
      }
    }

    figure {
      width: 50%;

      margin: 10px auto;

      border-radius: 8px;
      box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
        rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

      img {
        width: 100%;
      }
    }
  }
`;
