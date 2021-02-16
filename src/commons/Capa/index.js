import React from 'react';
import styled from 'styled-components';
import { Text } from '../../foundation/Text';

const CapaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Capa = () => (
  <CapaWrapper>
    <Text tag="p" variant="title">
      Lucas Silva Beneti
    </Text>
  </CapaWrapper>
);
