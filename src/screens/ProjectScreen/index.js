import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Text } from '../../foundation/Text';

const ProjectScreenWrapper = styled.div`
  display: flex;
  flex: 1;
`;

ProjectScreenWrapper.MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: blue;
`;

ProjectScreenWrapper.Card = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

const ProjectScreen = ({ name, url, description }) => {
  const defaultDescription = `${name} é um projeto muito legal feito por mim numa tentativa de aprender umas coisa nova.`;
  return (
    <ProjectScreenWrapper>
      <ProjectScreenWrapper.MainContainer>
        <ProjectScreenWrapper.Card>
          <Text variant="title">{name}</Text>
          <Text variant="subtext">{description ? description : defaultDescription}</Text>
          <a href={url}>Acessar repositório</a>
        </ProjectScreenWrapper.Card>
      </ProjectScreenWrapper.MainContainer>
    </ProjectScreenWrapper>
  );
};

export default ProjectScreen;

ProjectScreen.defaultProps = {
  name: 'Nome qualquer',
  url: 'https://www.google.com/',
  description: 'Apenas uma descrição qualquer pra encher linguiça...',
};

ProjectScreen.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
};
