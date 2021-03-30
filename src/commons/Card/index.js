import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styled, { css } from 'styled-components';

import { Text } from '../../foundation/Text';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  border-radius: 0.5em;
  background: ${({ theme }) => theme.background.terciary};

  transition: transform 0.2s;
  margin: 0.5rem;
  &:hover {
    transform: translateY(-0.5rem);
  }
`;

CardWrapper.Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.text.secondary};

  margin-left: 1rem;
  ${breakpointsMedia({
    xl: css`
      margin-left: 2rem;
    `,
  })}
`;

CardWrapper.Image = styled.div`
  display: grid;
  img {
    object-fit: fit;
    width: 100%;
    height: 10rem;

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
      <Image
        src={imgSource}
        alt="imagem de placeholder"
        unoptimized="true"
        width="100%"
        height="100%"
        className="cardImage"
      />
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
