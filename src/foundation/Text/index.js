import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import propToStyle from '../../theme/utils/propToStyle';

export const TextVariantMap = {
  simpleText: css`
    color: ${({ theme }) => theme.text.primary};
    font-size: ${({ theme }) => theme.typographyVariants.basicText.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.basicText.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.basicText.lineHeight};
  `,
  title: css`
    color: ${({ theme }) => theme.text.primary};
    font-size: ${({ theme }) => theme.typographyVariants.title.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.title.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.title.lineHeight};
  `,

  secondTitle: css`
    color: ${({ theme }) => theme.text.primary};
    font-size: ${({ theme }) => theme.typographyVariants.secondTitle.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.secondTitle.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.secondTitle.lineHeight};
  `,
  subtitle: css`
    color: ${({ theme }) => theme.text.primary};
    font-size: ${({ theme }) => theme.typographyVariants.subtitle.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.subtitle.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.subtitle.lineHeight};
  `,
  titleXS: css`
    color: ${({ theme }) => theme.text.secondary};
    font-size: ${({ theme }) => theme.typographyVariants.titleXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.titleXS.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.titleXS.lineHeight};
  `,
  basicText: css`
    color: ${({ theme }) => theme.text.secondary};
    font-size: ${({ theme }) => theme.typographyVariants.basicText.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.basicText.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.basicText.lineHeight};
  `,
  subtext: css`
    color: ${({ theme }) => theme.text.secondary};
    font-size: ${({ theme }) => theme.typographyVariants.subtext.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.subtext.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.subtext.lineHeight};
  `,
  footer: css`
    color: ${({ theme }) => theme.text.terciary};
    font-size: ${({ theme }) => theme.typographyVariants.subtext.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.subtext.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.subtext.lineHeight};
  `,
};

const TextBase = styled.span`
  ${({ variant }) => TextVariantMap[variant]}
  ${propToStyle('textAlign')}
`;

export const Text = ({ tag, variant, children, ...props }) => (
  <TextBase as={tag} variant={variant} {...props}>
    {children}
  </TextBase>
);

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'simpleText',
};
