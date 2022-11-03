import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root{
  // Primary Pallete
  --color-primary:      #F0386B;
  --color-primary-soft: #FF5376;
  --color-secundary:    #6B2D5C;

  // Grey Scale Pallete
  --color-grey-0: #F8F9FA;
  --color-grey-1: #868E96;
  --color-grey-2: #343B41;
  --color-grey-3: #212529;
  --color-grey-4: #121214;

  // Feedback Pallete

  --color-sucess:       #3FE864;
  --color-negative:     #DC3545;
  --color-warning:      #FFAB2F;
  --color-information:  #155BCB;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body{
  font-family: 'Inter', sans-serif;
  background-color: var(--color-grey-0);
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
