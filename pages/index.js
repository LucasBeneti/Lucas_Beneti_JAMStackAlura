import React from 'react';
import { MainContainer } from '../src/commons/MainContainer';
import websitePageHOC from '../src/wrappers/WebSitePage/hoc';

const Home = () => (
  <>
    <MainContainer />
  </>
);

export default websitePageHOC(Home);
