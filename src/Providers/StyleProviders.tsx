import { PropsWithChildren } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../theme';


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fonts.Nunito};
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

export const StyleProviders = ({ children }: PropsWithChildren) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </>
);
