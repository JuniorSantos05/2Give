import styled from "styled-components";
import { colors } from "../../styles/Global/colors";

export const StyleModalCampaign = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;

  background-color: rgba(10, 37, 64, 0.35);

  animation: show-modal 0.7s;

  @keyframes show-modal {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  p {
    cursor: pointer;

    font-weight: 900;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 650px;
    overflow-y: scroll;

    background-color: white;

    position: relative;

    max-width: 450px;

    gap: 20px;
    margin: 8% auto;
    margin-top: 100px;
    padding: 40px 20px;

    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    transition: all 0.3s;

    h2{
      margin-top: 30px;
    }

    span {
      display: none;
    }

    h6 {
      color: ${colors.colorNegative};

      font-size: 10px;
    }

    label {
      display: flex;
      flex-direction: column;

      width: 100%;

      gap: 8px;

      input {
        padding: 12px 5px;
        width: 100%;

        border-radius: 6px;
      }

      select {
        padding: 12px 5px;

        border-radius: 6px;
      }

      textarea {
        padding: 12px 5px;

        border-radius: 6px;
      }
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    button {
      padding: 12px;

      border-radius: 8px;

      font-size: 16px;

      background-color: ${colors.colorPrimary};
      color: ${colors.colorGrey0};

      transition: all 0.3s;

      :hover {
        background-color: ${colors.colorPrimarySoft};
      }
    }

    ::-webkit-scrollbar-track{
	    background-color: white;
    }

    ::-webkit-scrollbar{
	    background-color:  white;
      width: 10px;
    }

    ::-webkit-scrollbar-thumb{
	    background-color: ${colors.colorPrimary};

    }
  }
`;
