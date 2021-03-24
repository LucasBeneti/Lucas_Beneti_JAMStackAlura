import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../theme';
import { GlobalStyle } from '../../../theme/GlobalStyle';

export default function WebSiteGlobalProvider({ children }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

WebSiteGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
