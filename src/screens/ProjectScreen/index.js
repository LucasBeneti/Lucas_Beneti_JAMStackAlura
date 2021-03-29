import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { Text } from '../../foundation/Text';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

const ProjectScreenWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 1rem 10rem 0 10rem;

  ${breakpointsMedia({
    xl: css`
      transform: translateY(-20vh);
    `,
  })}
`;

ProjectScreenWrapper.MainContainer = styled.div`
  display: flex;

  background: ${({ theme }) => theme.background.terciary};
  border-radius: 0.5em;
`;

ProjectScreenWrapper.Card = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

const ProjectScreen = ({ name, url, description, reposData }) => {
  const defaultDescription = `${name} é um projeto muito legal feito por mim numa tentativa de aprender umas coisa nova.`;
  return (
    <ProjectScreenWrapper>
      <ProjectScreenWrapper.MainContainer>
        <ProjectScreenWrapper.Card>
          <Text variant="title">{name}</Text>
          <Text variant="subtext">{description ? description : defaultDescription}</Text>
          <a href={url}>Acessar repositório</a>
        </ProjectScreenWrapper.Card>
        <ProjectScreenWrapper.Card>
          {reposData.map((repo) => {
            return (
              <Text key={repo.html_url} href={`/about/${repo.name.toLowerCase()}`}>
                {repo.name}
              </Text>
            );
          })}
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
  reposData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
};
