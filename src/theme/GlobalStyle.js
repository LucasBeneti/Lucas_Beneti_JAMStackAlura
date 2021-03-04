import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

// CSS Reset
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ${normalize}
  
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
  }

  /* Full height layout */
  html, body {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.background.secondary};
  }
`;
