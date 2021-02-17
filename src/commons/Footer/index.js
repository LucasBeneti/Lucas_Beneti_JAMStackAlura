import React from 'react';
import styled from 'styled-components';
import { Text } from '../../foundation/Text';

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding-right: 28px;
  padding-left: 28px;
  margin-top: auto;
  background: transparent;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: ${({ theme }) => theme.text.primary};
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
`;

// depois colocar os icones de github e linkedin
// construindo um
export const Footer = (props) => (
  <FooterWrapper {...props}>
    <Text variant="footer">Orgulhosamente criado por mim Lucas</Text>
  </FooterWrapper>
);
