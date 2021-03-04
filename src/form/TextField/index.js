import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '../../foundation/Text';
import propToStyle from '../../theme/utils/propToStyle';

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
  background-color: ${({ theme }) => theme.background.terciary};
  transition: 0.3s ease-in-out;
  ${propToStyle('color')}
  ${propToStyle('height')}
  ${({ tag }) =>
    tag === 'textarea' &&
    css`
      resize: none;
    `}
`;
Input.defaultProps = {
  tag: 'input',
  // variant: 'simpleText',
};
export const TextField = ({ type, tag, placeholder, name, onChange, value, ...props }) => (
  <InputWrapper>
    <Input type={type} tag={tag} placeholder={placeholder} name={name} onChange={onChange} value={value} {...props} />
  </InputWrapper>
);

// TextField.defaultProps = {
//   value: '',
// };

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  tag: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
