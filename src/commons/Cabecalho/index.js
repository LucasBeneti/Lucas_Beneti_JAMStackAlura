import React from 'react';
import styled from 'styled-components';

import { Menu } from '../Menu';
// import {CabecalhoWrapper} from './styles/CabecalhoWrapper';

const CabecalhoWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
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
