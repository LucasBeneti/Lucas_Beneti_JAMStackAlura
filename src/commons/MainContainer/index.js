import React from 'react';
import styled from 'styled-components';

import { Card } from '../Card';

const MainContainerWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-top: 2rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.background.primary};
`;

export const MainContainer = () => (
  <MainContainerWrapper>
    <Card title="Titulo base" subtitle="subtitulo apenas para teste" />
    <Card title="Titulo base" subtitle="subtitulo apenas para teste" />
    <Card title="Titulo base" subtitle="subtitulo apenas para teste" />
    <Card title="Titulo base" subtitle="subtitulo apenas para teste" />
  </MainContainerWrapper>
);
