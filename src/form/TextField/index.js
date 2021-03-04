import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled(Text)`
  width: 100%;
  border: 1px solid red;
  padding: 0.75rem 1rem;
  outline: 0;
  border-radius: 0.5rem;
`;
Input.defaultProps = {
  tag: 'input',
  variant: 'simpleText',
};
export const TextField = ({ type, placeholder, name, onChange, value }) => (
  <InputWrapper>
    <Input type={type} placeholder={placeholder} name={name} onChange={onChange} value={value} />
  </InputWrapper>
);

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
