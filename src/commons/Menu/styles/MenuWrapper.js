import styled, { css } from 'styled-components';
import { TextVariantMap } from '../../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const MenuWrapper = styled.nav`
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  margin-top: 1rem;
  /* grid-template-columns: 3fr 2fr; */
  align-items: center;
  justify-items: space-between;
  /* flex-wrap: wrap; */
  /* padding-left: 28px;
    padding-right: 28px; */
  /* width: 100%; */
  /* height: auto; */

  list-style: none;

  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.text.primary};
    transition: opacity 200ms ease-in-out;
    ${breakpointsMedia({
      xs: css`
        ${TextVariantMap.smallestException}
      `,
      md: css`
        ${TextVariantMap.paragraph1}
      `,
    })}
    &:hover,
    &:focus {
      opacity: 0.6;
    }
  }
`;

MenuWrapper.Central = styled.div`
  display: flex;
  justify-self: center;
  padding: 0.5em;
  margin: 0;
  order: -1;
  width: 100%;

  justify-content: flex-start;
`;

MenuWrapper.RightSide = styled.div`
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
  border-top: 1px solid #88989e;
  border-bottom: 1px solid #88989e;
  /* padding: 12px; */

  ${breakpointsMedia({
    md: css`
      max-width: 332px;
      justify-content: space-between;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      padding: 0 8rem 0 8rem;
    `,
  })}
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.text.primary};
    transition: opacity 200ms ease-in-out;
    ${breakpointsMedia({
      xs: css`
        ${TextVariantMap.smallestException}
      `,
      md: css`
        ${TextVariantMap.paragraph1}
      `,
    })}
    &:hover,
    &:focus {
      opacity: 0.6;
    }
  }
`;
