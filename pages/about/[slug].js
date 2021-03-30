import React from 'react';
import ProjectScreen from '../../src/screens/ProjectScreen';
import websitePageHOC from '../../src/wrappers/WebSitePage/hoc';

function ProjectPage({ name, url, description, reposData }) {
  return <ProjectScreen name={name} url={url} description={description} reposData={reposData} />;
}

ProjectPage.propTypes = ProjectScreen.propTypes;

export default websitePageHOC(ProjectPage);

export async function getStaticProps({ params }) {
  const reposList = await fetch('https://api.github.com/users/lucasbeneti/repos').then((response) => response.json());
  const reposData = await reposList.reduce((valorAcumulado, repo) => {
    const foundRepo = params.slug === repo.name.toLowerCase();

    if (foundRepo) {
      return {
        ...valorAcumulado,
        name: repo.name,
        url: repo.html_url,
        description: repo.description,
      };
    }
    return valorAcumulado;
  }, {});
  return {
    props: {
      name: reposData.name,
      url: reposData.url,
      description: reposData.description,
      reposData: reposList,
      pageWrapperProps: {
        seoProps: {
          headTitle: reposData.name,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const reposList = await fetch('https://api.github.com/users/lucasbeneti/repos').then((response) => response.json());
  const paths = await reposList.map((repo) => ({ params: { slug: repo.name.toLowerCase() } }));
  return { paths, fallback: false };
}
