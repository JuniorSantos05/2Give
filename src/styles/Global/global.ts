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
  min-height: 100vh;
}

button{
  cursor: pointer;
  border: none;

}

ul, ol, li{
  list-style: none; 
}

a{
  text-decoration: none;
}



`;
