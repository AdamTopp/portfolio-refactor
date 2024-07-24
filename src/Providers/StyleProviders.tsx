import { PropsWithChildren } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../theme';


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.Nunito};
    cursor: default;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 500;
  }

  h3 {
    font-size: 2.75rem;
  }

  i {
    font-size: 3.5rem;
    font-weight: 500;
  }

  body, html {
    all: unset;
    font-size: 14px;
  }

  section {
    display: flex;
    justify-content: center;
    
    & > div {
      max-width: 1250px;
      width: 100%;
      padding: 0 60px;
    }
  }

  a {
    text-decoration: none;
  }

  ::selection {
    color: ${({ theme }) => theme.colors.white} !important;
    background-color: ${({ theme }) => theme.colors.selection};
  }
`;

export const StyleProviders = ({ children }: PropsWithChildren) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </>
);
