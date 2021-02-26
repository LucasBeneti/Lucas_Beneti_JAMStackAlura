import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '../../foundation/Text';

const DescriptionWrapper = styled.div`
  display: flex;
  position: relative;

  background-color: blue;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  padding: 1rem;
  background: ${({ theme }) => theme.background.terciary};
`;
DescriptionWrapper.Avatar = styled.span`
  justify-self: flex-start;
  align-self: center;
  img {
    border-radius: 100%;
  }
`;

DescriptionWrapper.Text = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 1rem;
  padding-left: 3rem;
  color: red;
`;

export const DescriptionCard = ({ imgPath, imgSize, title, text }) => (
  <DescriptionWrapper>
    <DescriptionWrapper.Avatar>
      <img src={imgPath} alt="Girl in a jacket" style={imgSize} />
    </DescriptionWrapper.Avatar>
    <DescriptionWrapper.Text>
      <Text variant="titleXS">{title}</Text>
      <Text variant="subtext">{text}</Text>
    </DescriptionWrapper.Text>
  </DescriptionWrapper>
);

DescriptionCard.propTypes = {
  imgPath: PropTypes.string.isRequired,
  imgSize: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
