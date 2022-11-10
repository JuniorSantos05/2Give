import styled from "styled-components";

export const LoginForm = styled.form`
  padding: 1.5rem 3rem 1.5rem 3rem;
  min-width: 320px;


  background-color: #fff0f6;
  color: #f0386b;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin: 0 auto;

  .content{
    height: 600px;
  }

  .error {
    color: var(--color-error);
    font-size: 0.7rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title{
    height: 20%;
  }

  h1 {
    text-align: center;
    width: 100%;
  }

  input {
    min-width: 196px;
    width: 70%;
    padding: 0.7rem;
    border: 1px solid #f0386b;
    border-radius: 4px;
    justify-content: center;
  }

  
  label{
    width: 70%;
    display: flex;
  }

  button{
    padding: 9px 82px;
  }
`;
