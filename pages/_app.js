import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
// import useDarkMode from 'use-dark-mode';

import { GlobalStyle } from '../src/theme/GlobalStyle';
import { lightTheme } from '../src/theme';

export default function App({ Component, pageProps }) {
  // const { value } = useDarkMode(false, { storageKey: null, onChange: null });
  // const theme = value ? darkTheme : lightTheme;

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
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
