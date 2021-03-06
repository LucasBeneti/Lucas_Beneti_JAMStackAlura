import styled, { css } from 'styled-components';
import propToStyle from '../../theme/utils/propToStyle';

export const Button = styled.button`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.text.primary};
  border: none;
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 20%;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${propToStyle('margin')}
  ${propToStyle('display')}
`;
