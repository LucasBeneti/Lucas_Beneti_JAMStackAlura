import React from 'react';
import styled, { css } from 'styled-components';

import { Menu } from '../Menu';
import { Logo } from '../../theme/Icons/Logo';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

const CabecalhoWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.background.primary};

  padding-top: 1.5rem;
  padding-bottom: 1rem;
  ${breakpointsMedia({
    xl: css`
      min-height: 50vh;
      padding-top: 3rem;
      padding-bottom: 0;
    `,
  })}

  background-color: ${({ theme }) => theme.background.primary};
`;

CabecalhoWrapper.Menu = styled.span`
  display: flex;
  justify-content: space-between;
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
        <Logo width="5em" height="5em" color={({ theme }) => theme.svgIcons.primary} />
        <Menu linksList={linksList} />
      </CabecalhoWrapper>
    </>
  );
};
