import styled from "styled-components";
import { colors } from "../../styles/Global/colors";

export const CardEvents = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${colors.colorGrey0};

  gap: 30px;

  width: 250px;
  min-width: 250px;
  height: 350px;

  margin: 25px 10px;
  padding: 10px;

  border-radius: 8px;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  transition: all 0.5s;
  cursor: pointer;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px,
      ${colors.colorPrimary} 0px 0px 0px 3px;
  }

  figure {
    width: 200px;

    margin: 0 auto;

    border-radius: 8px;

    background-color: ${colors.colorInformation};

    img {
      width: 100%;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    height: 30%;

    gap: 10px;
  }

  h3 {
    font-size: 14px;
    text-align: center;
  }

  span {
    font-size: 12px;
    text-align: center;
  }

  button {
    background-color: ${colors.colorPrimary};
    color: ${colors.colorGrey0};

    padding: 5px;
    margin: 0 auto;
    border-radius: 10px;

    width: 150px;

    :hover {
      background-color: ${colors.colorPrimarySoft};
    }
  }
`;
