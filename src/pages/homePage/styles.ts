import styled from "styled-components";
import { colors } from "../../styles/Global/colors";
//import {typography} from "../../styles/Global/typography"

export const MainSection = styled.section`
  width: 100%;
  height: 440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 101px;
  max-width: 100vw;

  @media screen and (max-width: 835px) {
    padding: 0 5%;
  }

  div {
    width: 60%;
    height: 100%;
    padding: 6% 0;
    display: flex;
    flex-direction: column;
    gap: 35px;

    @media screen and (max-width: 835px) {
      width: 100%;
    }

    h2 {
      font-size: 1.7rem;
      font-weight: 700;
    }

    h1 {
      font-size: 2.5rem;
      font-weight: 900;
      color: ${colors.colorPrimary};
      margin-top: -35px;
    }

    form {
      display: flex;
      gap: 20px;
      align-items: center;

      input {
        height: 51px;
        width: 68%;
        max-width: 365px;
        border: solid 1px #b0b0b08a;
        border-radius: 10px;
        padding-left: 10px;
      }

      button {
        width: 80px;
        height: 40px;
        font-weight: 700;
        border-radius: 10px;
        color: ${colors.colorGrey0};
        background-color: ${colors.colorPrimarySoft};
      }
    }
  }

  img {
    max-height: 100%;
    width: 35%;
    min-width: 400px;

    @media screen and (max-width: 835px) {
      display: none;
    }
  }
`;

export const ContainerClass = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  gap: 20px;
  overflow-x: auto;

  li {
    height: 40px;
    width: 130px;
    border: 1px solid #00000057;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transition: 0.3s;

    :hover {
      background-color: #6b2d5c80;
    }
  }
`;

export const FalseButton = styled.li`
  background-color: ${colors.colorPrimarySoft};
  color: ${colors.colorGrey0};
  border: none;
  cursor: context-menu;
`;

export const SectionProjects = styled.section`
  padding: 0 101px;

  @media screen and (max-width: 835px) {
    padding: 0px;
    margin: 0 5%;
  }
`;

export const ContainerProjects = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: flex-start;

  @media screen and (max-width: 835px) {
    overflow-x: auto;
    flex-wrap: nowrap;
  }
`;
