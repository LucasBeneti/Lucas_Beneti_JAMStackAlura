import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Text } from '../../foundation/Text';

const CardWrapper = styled.div`
  display: flex;
  flex: 1;

  background-color: '#BBB';
`;

export const Card = ({ title, subtitle }) => (
  <CardWrapper>
    <Text>{title}</Text>
    <Text>{subtitle}</Text>
    <img src="http://placehold.it/250x150" alt="imagem de placeholder" />
  </CardWrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
