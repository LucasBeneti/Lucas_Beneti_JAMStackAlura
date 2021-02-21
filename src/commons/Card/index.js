import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Text } from '../../foundation/Text';

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: '#BBB';

  border-radius: 0.5em;
  background-color: red;
`;

CardWrapper.Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 2rem;
`;

CardWrapper.Image = styled.div`
  display: grid;
  border-radius: 0.5em;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const Card = ({ title, subtitle, imgSource }) => (
  <CardWrapper>
    <CardWrapper.Text>
      <Text tag="span" variant="titleXS">
        {title}
      </Text>
      <Text tag="span" variant="subtext">
        {subtitle}
      </Text>
    </CardWrapper.Text>
    <CardWrapper.Image>
      <img src={imgSource} alt="imagem de placeholder" />
    </CardWrapper.Image>
  </CardWrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imgSource: PropTypes.string.isRequired,
};
