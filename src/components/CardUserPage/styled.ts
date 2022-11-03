import styled from "styled-components";
import { colors } from "../../styles/Global/colors";

export const CardEvents = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 10px;

  min-width: 250px;
  height: 300px;

  margin: 25px 10px;
  padding: 10px;

  border-radius: 8px;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  figure {
    border-radius: 8px;

    background-color: ${colors.colorInformation};
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  .container {
    height: 8px;
    background-color: ${colors.colorPrimarySoft};
    position: relative;
  }
  .container .progress-bar {
    position: absolute;
    height: 100%;
    background-color: ${colors.colorPrimary};
    animation: progress-animation 5s infinite;
  }
  @keyframes progress-animation {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;
