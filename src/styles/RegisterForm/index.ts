import styled from "styled-components";

export const RegisterForm = styled.form`
  padding: 1.5rem 3rem 1.5rem 3rem;
  min-width: 320px;

  background-color: #fff0f6;
  color: #f0386b;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin: 0 auto;

  .error {
    color: var(--color-error);
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
    border: 1px solid #f0386b;
    border-radius: 4px;
  }

  span {
    color: #000000 !important;
  }
`;
