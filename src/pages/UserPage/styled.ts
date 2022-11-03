import styled from "styled-components";
import { colors } from "../../styles/Global/colors";

export const UserSection = styled.section`
  display: flex;
  align-items: center;

  margin: 40px 0px;

  gap: 20px;

  figure {
    width: 100px;
    height: 100px;

    display: flex;
    justify-content: center;

    border-radius: 50%;
    border: 1px solid black;

    img {
      width: 100%;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 30px;
  }

  span {
    font-weight: 400;
    font-size: 20px;
  }
`;

export const DivCampaign = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 20px;

  border-radius: 5px;

  background-color: ${colors.colorPrimarySoft};

  h2 {
    font-size: 20px;
    font-weight: 400;

    color: ${colors.colorGrey0};
  }

  button {
    font-weight: 700;
    font-size: 14px;

    border-radius: 15px;

    padding: 10px;

    background-color: #6b2d5c;
    color: ${colors.colorGrey0};
  }
`;

export const SectionEvents = styled.section`
  margin: 30px 0;
  h2 {
    font-weight: 700;
    font-size: 28px;

    color: ${colors.colorPrimary};
  }
`;
