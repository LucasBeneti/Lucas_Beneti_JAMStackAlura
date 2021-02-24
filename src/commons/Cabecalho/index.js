import React from 'react';
import styled from 'styled-components';

import { Menu } from '../Menu';
import { Logo } from '../../theme/Icons/Logo';

const CabecalhoWrapper = styled.span`
  display: flex;
  grid-template-columns: 2fr 2fr;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background.primary};

  min-height: 30vh;

  background-image: url('images/background.svg');
  background-repeat: repeat;
  background-attachment: fixed;
  background-position: center;
  background-color: ${({ theme }) => theme.background.primary};
`;

CabecalhoWrapper.Menu = styled.span`
  justify-self: flex-end;
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
        {/* <Logo width="10em" height="10em" color={({ theme }) => theme.svgIcons.primary} /> */}
        <CabecalhoWrapper.Menu>
          <Menu linksList={linksList} />
        </CabecalhoWrapper.Menu>
      </CabecalhoWrapper>
    </>
  );
};
