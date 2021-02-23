import React from 'react';
import styled from 'styled-components';

import { Text } from '../../foundation/Text';

const CapaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url('images/background.svg');
  background-repeat: repeat;
  background-attachment: fixed;
  background-position: center;
  background-color: ${({ theme }) => theme.background.primary};
`;

export const Capa = () => (
  <CapaWrapper>
    <Text tag="p" variant="title" whiteSpace="wrap">
      Lucas Beneti
    </Text>
  </CapaWrapper>
);
