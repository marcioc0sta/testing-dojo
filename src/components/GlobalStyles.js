import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
    text-size-adjust: 100%;
  }
  body {
    background-color: var(--white);
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }
  input.hide-clear[type=search]::-ms-clear,
  input.hide-clear[type=search]::-ms-reveal {
    display: none;
    height: 0;
    width: 0;
  }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance:none;
  }
  .grecaptcha-badge { 
    visibility: hidden; 
  }
  img {
    border: 0;
    height: auto;
    max-width: 100%;
  }
`

export default GlobalStyle
