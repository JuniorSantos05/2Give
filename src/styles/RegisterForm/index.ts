import styled from "styled-components";
import { colors } from "../Global/colors";
import { typography } from "../Global/typography";

export const RegisterForm = styled.form`
  padding: 1.5rem 3rem 1.5rem 3rem;
  min-width: 320px;


  color: ${colors.colorPrimary};
  background-color: #fff0f6;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin: 0 auto;

  .error {

    color: ${colors.colorGrey4};

    font-size: 0.7rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    text-align: center;
    width: 100%;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid ${colors.colorPrimary};
    border-radius: 4px;
  }
`;
