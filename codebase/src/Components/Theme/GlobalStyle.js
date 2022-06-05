import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-family: 'Courier New', Courier, monospace;
    font-size: 18px;
  }
  body {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .app {
    text-align: center;
  }
`;

export default GlobalStyles;
