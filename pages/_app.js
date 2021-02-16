import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import theme from '../src/theme';
import { GlobalStyle } from '../src/theme/GlobalStyle';
// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// `;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portifolio - Lucas Beneti</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;0,600;0,700;1,100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
