import React from 'react';
import styled from 'styled-components';
import { Text } from '../../foundation/Text';
import { GithubIcon } from '../../theme/Icons/GithubIcon';
import { LinkedinIcon } from '../../theme/Icons/Linkedin';

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-right: 10rem;
  padding-left: 10rem;
  margin-top: auto;
  background: ${({ theme }) => theme.background.footer};

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
  width: 100%;
  justify-self: flex-end;
  align-self: center;
  margin-left: 1em;

  color: ${({ theme }) => theme.text.terciary};
`;

FooterWrapper.Icons = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  /* padding-right: 0.5rem; */
  justify-content: space-between;
  align-items: center;
`;

export const Footer = (props) => (
  <FooterWrapper {...props}>
    <FooterWrapper.Text>
      <Text variant="footer">Portifólio - Lucas Beneti ©</Text>
    </FooterWrapper.Text>
    <FooterWrapper.Icons>
      <a href="https://github.com/LucasBeneti?tab=repositories" target="_blank" rel="noreferrer">
        <GithubIcon height="1.5rem" width="1.5rem" />
      </a>
      <a href="https://linkedin.com/in/lucas-silva-beneti-a793ba152" target="_blank" rel="noreferrer">
        <LinkedinIcon height="1.5rem" width="1.5rem" />
      </a>
    </FooterWrapper.Icons>
  </FooterWrapper>
);
