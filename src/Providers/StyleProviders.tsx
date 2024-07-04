import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body, html {
    all: unset;
  }

  section {
    display: flex;
    justify-content: center;
    
    & > div {
      max-width: 1600px;
      width: 100%;
    }
  }
`;

export const StyleProviders = () => (
  <>
    <GlobalStyle />
  </>
);
