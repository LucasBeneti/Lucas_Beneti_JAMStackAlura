import React from 'react';
import styled from 'styled-components';
import { Text } from '../../foundation/Text';
import { GithubIcon } from '../../theme/Icons/GithubIcon';

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-right: 28px;
  padding-left: 28px;
  margin-top: auto;
  background: ${({ theme }) => theme.background.secondary};

  a {
    color: ${({ theme }) => theme.text.primary};
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.7;
    }
  }
`;

FooterWrapper.Text = styled.div`
  width: inherit;
  justify-self: flex-end;
  align-self: flex-end;
  margin-left: 1em;
`;

FooterWrapper.Links = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = (props) => (
  <FooterWrapper {...props}>
    <FooterWrapper.Text>
      <Text variant="footer">Portifólio - Lucas Beneti ©</Text>
    </FooterWrapper.Text>
    <FooterWrapper.Links>
      <a href="https://github.com/LucasBeneti?tab=repositories" target="_blank" rel="noreferrer">
        <GithubIcon height="1em" width="1em" />
      </a>
      <a href="https://linkedin.com/in/lucas-silva-beneti-a793ba152" target="_blank" rel="noreferrer">
        <GithubIcon height="1em" width="1em" />
      </a>
    </FooterWrapper.Links>
  </FooterWrapper>
);
