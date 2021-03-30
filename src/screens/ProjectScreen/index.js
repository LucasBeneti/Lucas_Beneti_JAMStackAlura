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
  flex-direction: column;
  padding: 1.5rem;
  gap: 1.5rem;
  background: ${({ theme }) => theme.background.terciary};
  border-radius: 0.5em;
  max-width: 80vw;
`;

ProjectScreenWrapper.Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    align-self: center;
    text-align: center;
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.text.secondary};
    max-width: 12rem;
    background-color: white;
    transition: 0.2s;
    padding: 0.8rem;
    border-radius: 0.5rem;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

ProjectScreenWrapper.RandomRepos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const ProjectScreen = ({ name, url, description, reposData }) => {
  const defaultDescription = `${name} é um projeto muito legal feito por mim numa tentativa de aprender umas coisa nova.`;

  function getRandomRepos() {
    return (
      <ProjectScreenWrapper.RandomRepos>
        <Text
          key={reposData[0].html_url}
          href={`/about/${reposData[0].name.toLowerCase()}`}
          style={{ color: '#073615' }}
        >
          {reposData[0].name}
        </Text>
        <Text
          key={reposData[1].html_url}
          href={`/about/${reposData[1].name.toLowerCase()}`}
          style={{ color: '#073615' }}
        >
          {reposData[1].name}
        </Text>
        <Text
          key={reposData[2].html_url}
          href={`/about/${reposData[2].name.toLowerCase()}`}
          style={{ color: '#073615' }}
        >
          {reposData[2].name}
        </Text>
        <Text
          key={reposData[3].html_url}
          href={`/about/${reposData[3].name.toLowerCase()}`}
          style={{ color: '#073615' }}
        >
          {reposData[3].name}
        </Text>
        <Text
          key={reposData[4].html_url}
          href={`/about/${reposData[4].name.toLowerCase()}`}
          style={{ color: '#073615' }}
        >
          {reposData[4].name}
        </Text>
      </ProjectScreenWrapper.RandomRepos>
    );
  }
  return (
    <ProjectScreenWrapper>
      <ProjectScreenWrapper.MainContainer>
        <ProjectScreenWrapper.Card>
          <Text variant="title" style={{ color: '#073615' }}>
            {name}
          </Text>
          <Text variant="subtext" style={{ fontSize: '1rem' }}>
            {description ? description : defaultDescription}
          </Text>
          <a href={url} target="_blank" rel="noreferrer">
            Acessar repositório
          </a>
        </ProjectScreenWrapper.Card>
        <ProjectScreenWrapper.RandomRepos>{getRandomRepos()}</ProjectScreenWrapper.RandomRepos>
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
