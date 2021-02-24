import React from 'react';
import styled, { css } from 'styled-components';

import { Card } from '../Card';

const MainContainerWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem 10rem 0 10rem;

  background-color: ${({ theme }) => theme.background.secondary};
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
  grid-template-columns: 2fr 1fr;
  /* gap: 1rem; */
  width: 100%auto;
`;
MainContainerWrapper.Row2 = styled.span`
  width: 100%;
  display: grid;
  margin-top: 1rem;
`;

MainContainerWrapper.CardContainer = styled.span`
  padding: 0.5rem;
`;

export const MainContainer = () => (
  <MainContainerWrapper>
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
        <Card
          className="descriptionArea"
          title="Titulo base"
          subtitle="subtitulo apenas para teste"
          imgSource="images/code_bg.jpg"
        />
      </MainContainerWrapper.Row2>
    </MainContainerWrapper.Grid>
  </MainContainerWrapper>
);
