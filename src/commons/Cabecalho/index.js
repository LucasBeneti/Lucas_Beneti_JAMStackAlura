import React from 'react';
import styled from 'styled-components';

import { Menu } from '../Menu';

const CabecalhoWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background.primary};
`;

export const Cabecalho = () => {
  const linksList = [
    {
      text: 'Sobre mim',
      url: '/about',
    },
    {
      text: 'Contato',
      url: '/contact',
    },
  ];
  return (
    <>
      <CabecalhoWrapper>
        <Menu linksList={linksList} />
      </CabecalhoWrapper>
    </>
  );
};
