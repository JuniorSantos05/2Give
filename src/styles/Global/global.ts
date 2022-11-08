import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body{
  font-family: 'Inter', sans-serif;
  background-color: ${colors.colorBackground};
  height: 100vh;
  width: 100vw;
}

button{
  cursor: pointer;
  border: none;
  /* background-color: var(--color-grey-0); */
}

ul, ol, li{
  list-style: none; 
}

a{
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6, p, span, li, label{
  color: var(--color-grey-4);
}

`;
