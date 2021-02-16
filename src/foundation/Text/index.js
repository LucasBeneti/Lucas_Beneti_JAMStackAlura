import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import propToStyle from '../../theme/utils/propToStyle';

export const TextVariantMap = {
  simpleText: css`
    font-size: ${({ theme }) => theme.typographyVariants.basicText.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.basicText.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.basicText.lineHeight};
  `,
  title: css`
    font-size: ${({ theme }) => theme.typographyVariants.title.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.title.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.title.lineHeight};
  `,
  footer: css`
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
