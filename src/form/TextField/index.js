import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '../../foundation/Text';

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled(Text)`
  width: 100%;
  border: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.background.primary};
  }
  padding: 0.75rem 1rem;
  outline: 0;
  border-radius: 0.5rem;
  /* color: red; */
  background-color: ${({ theme }) => theme.background.terciary};
  transition: 0.3s ease-in-out;
`;
Input.defaultProps = {
  tag: 'input',
  // variant: 'simpleText',
};
export const TextField = ({ type, placeholder, name, onChange, value, props }) => (
  <InputWrapper>
    <Input type={type} placeholder={placeholder} name={name} onChange={onChange} value={value} {...props} />
  </InputWrapper>
);

TextField.defaultProps = {
  value: '',
};

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
