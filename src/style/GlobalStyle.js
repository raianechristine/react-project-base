import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  *:focus, 
  *:active {
    outline: 0;
  }

  :root {
    --color-primary: #F26522;

    --font-size-default: 1.6rem;
    --font-family-default: 'Open Sans',  sans-serif;
  }

  ::-webkit-scrollbar-track {
    border-radius: 0.4rem;
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 0.4rem;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.4rem;
    background-color: var(--color-primary);
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: var(--font-family-default);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: var(--font-size-default);
    background: var(--color-white-primary);
    overflow-y: scroll;
  }

  button {
    font: inherit;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    line-height: normal;
    appearance: none;
    color: inherit;
    border: none;
    background: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  span, a {
    transition: color .7s cubic-bezier(.5,0,0,1);
  }
`;

export default GlobalStyle;
