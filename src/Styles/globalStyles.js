import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #282c34;
    font-size: calc(2px + 10vmin)
    font-family: Monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
