import React from 'react';
import styled from 'styled-components';
import propToStyle from '../../theme/utils/propToStyle';

const CloseButtonWrapper = styled.span`
  position: absolute;
  cursor: pointer;
  ${propToStyle('position')}
  ${propToStyle('top')}
  ${propToStyle('right')}
`;

export const CloseButton = ({ onClose }) => (
  <CloseButtonWrapper
    onClick={() => onClose()}
    position="absolute"
    top={{
      xs: '1.5rem',
      md: '1rem',
    }}
    right={{
      xs: '1.5rem',
      md: '1rem',
    }}
  >
    <img src="images/closeButton.svg" alt="botão de fechar" />
  </CloseButtonWrapper>
);
