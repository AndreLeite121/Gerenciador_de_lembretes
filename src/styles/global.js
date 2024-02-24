import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Roboto', sans-serif;
  }

  button, input, label {
    font-size: 20px;
  }

  li {
    font-size:20px;
    font-weight: bold;
    list-style-type: none;

  }
`;
