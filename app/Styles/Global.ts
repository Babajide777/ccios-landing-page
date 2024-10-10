import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    font-family: 'Roboto', Arial, sans-serif;
    line-height: 1.6;
    color: #f4f4f4;
    background-color: #121212;
}

h1,
        h2 {
            color: #d4a76a;
        }

ul {
    list-style: none;
  }

  a{
    text-decoration: none;
  }
`;

export default GlobalStyles;
