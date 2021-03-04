import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonWrapper = styled.button`
  width: 100%;
  height: auto;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.text.primary};
  border: none;
`;

export const Button = ({ type, children }) => <ButtonWrapper type={type}>{children}</ButtonWrapper>;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
};
