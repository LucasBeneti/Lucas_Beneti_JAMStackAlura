import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Text } from '../../foundation/Text';

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  border-radius: 0.5em;
  background: ${({ theme }) => theme.background.terciary};

  transition: transform 0.2s;
  margin: 0.5rem;
  &:hover {
    transform: scale(1.05);
  }
`;

CardWrapper.Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.text.secondary};

  margin-left: 2rem;
`;

CardWrapper.Image = styled.div`
  display: grid;
  img {
    object-fit: fit;
    width: 100%;
    height: 100%;

    /* solucao temporaria */
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`;

export const Card = ({ title, subtitle, imgSource, highlight }) => (
  <CardWrapper>
    <CardWrapper.Text>
      <Text tag="span" variant={highlight ? 'titleXS' : 'basicText'}>
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
  highlight: PropTypes.bool,
};

Card.defaultProps = {
  highlight: false,
};
