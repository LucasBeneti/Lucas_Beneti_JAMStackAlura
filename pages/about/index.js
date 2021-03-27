import React from 'react';
import styled from 'styled-components';

import AboutScreen from '../../src/screens/AboutScreen';
import websitePageHOC from '../../src/wrappers/WebSitePage/hoc';

const AboutPage = () => <AboutScreen />;

export default websitePageHOC(AboutPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre mim',
    },
  },
});
