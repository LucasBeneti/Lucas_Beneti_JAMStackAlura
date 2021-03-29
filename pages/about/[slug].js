import React from 'react';
import ProjectScreen from '../../src/screens/ProjectScreen';

function ProjectPate({ name, url, description }) {
  return <ProjectScreen name={name} url={url} description={description} />;
}

ProjectPate.propTypes = ProjectScreen.propTypes;
// ainda tem o que fazer nessa file, tem que ver no instalura o que tá sendo feito com esses campos
// se ainda precisa fazer alguma coisa como é feito no [slugs].js
