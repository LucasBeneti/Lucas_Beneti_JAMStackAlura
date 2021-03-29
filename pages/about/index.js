import React from 'react';

import AboutScreen from '../../src/screens/AboutScreen';
import websitePageHOC from '../../src/wrappers/WebSitePage/hoc';

const AboutPage = ({ reposData }) => <AboutScreen reposData={reposData} />;

export default websitePageHOC(AboutPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre mim',
    },
  },
});

AboutPage.propTypes = AboutScreen.propTypes;

export async function getStaticProps() {
  const reposList = await fetch('https://api.github.com/users/lucasbeneti/repos').then((response) => response.json());
  const reposData = await reposList.map((value) => {
    return {
      name: value.name,
      slug: value.name.toLowerCase(),
    };
  });
  return {
    props: { reposData },
  };
}
