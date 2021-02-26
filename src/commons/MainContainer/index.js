import React from 'react';
import styled, { css } from 'styled-components';

import { Card } from '../Card';
import { Text } from '../../foundation/Text';
import { DescriptionCard } from '../DescriptionCard';

import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

const MainContainerWrapper = styled.div`
  width: 100%;
  min-width: 80vh;
  height: inherit;
  padding: 1rem 10rem 0 10rem;

  background: ${({ theme }) => theme.background.secondary};

  ${breakpointsMedia({
    xl: css`
      transform: translateY(-20vh);
    `,
  })}
`;

MainContainerWrapper.Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text.secondary};
  h1 {
    margin: 0;
    font-size: 1.4rem;

    ${breakpointsMedia({
      xl: css`
        font-size: 2rem;
        color: ${({ theme }) => theme.text.primary};
      `,
    })}
  }

  ${breakpointsMedia({
    xl: css`
      justify-content: flex-start;
    `,
  })}
`;

MainContainerWrapper.Grid = styled.span`
  display: flex;
  flex-direction: column;
`;

MainContainerWrapper.Column = styled.span`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100%;
  width: auto;
`;

MainContainerWrapper.Row1 = styled.span`
  display: grid;
  width: 100%;
  ${breakpointsMedia({
    xl: css`
      grid-template-columns: 2fr 1fr;
    `,
  })}
`;
MainContainerWrapper.Row2 = styled.span`
  width: 100%;
  display: grid;
  margin-top: 1rem;
  display: none;
  ${breakpointsMedia({
    md: css`
      display: block;
    `,
  })}
`;

MainContainerWrapper.CardContainer = styled.span`
  padding: 0.5rem;
`;

export const MainContainer = () => (
  <MainContainerWrapper>
    <MainContainerWrapper.Title>
      <h1>Projetos</h1>
    </MainContainerWrapper.Title>
    <MainContainerWrapper.Grid>
      <MainContainerWrapper.Row1>
        <Card
          className="highlightProject"
          title="Titulo base"
          subtitle="subtitulo apenas para teste"
          imgSource="images/code_bg.jpg"
          highlight
        />

        <MainContainerWrapper.Column>
          <Card
            className="simpleProject"
            title="Titulo base"
            subtitle="subtitulo apenas para teste"
            imgSource="images/code_bg.jpg"
          />
          <Card
            className="simpleProject"
            title="Titulo base"
            subtitle="subtitulo apenas para teste"
            imgSource="images/code_bg.jpg"
          />
          <Card
            className="simpleProject"
            title="Titulo base"
            subtitle="subtitulo apenas para teste"
            imgSource="images/code_bg.jpg"
          />
        </MainContainerWrapper.Column>
      </MainContainerWrapper.Row1>
      <MainContainerWrapper.Row2>
        <DescriptionCard
          imgPath="images/lucasAvatar.jpeg"
          imgSize={{ width: '15rem', height: '15rem' }}
          title="Lucas Beneti"
          text="Engineering student passionate about programming, problem solving, Artificial Intelligence and SciFi."
        />
      </MainContainerWrapper.Row2>
    </MainContainerWrapper.Grid>
  </MainContainerWrapper>
);
