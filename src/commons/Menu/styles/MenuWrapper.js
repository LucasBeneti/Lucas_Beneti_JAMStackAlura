import styled, { css } from 'styled-components';
import { TextVariantMap } from '../../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const MenuWrapper = styled.nav`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: 28px;
  padding-right: 28px;

  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 0.5em;

  min-width: 60vw;
  height: auto;
  max-width: 75vw;
`;

MenuWrapper.Left = styled.div`
  padding: 0.5em;
  margin: 0;
  order: -1;

  display: flex;
  justify-content: flex-start;
`;

MenuWrapper.Central = styled.div`
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
  border-top: 1px solid #88989e;
  border-bottom: 1px solid #88989e;
  padding: 12px;

  ${breakpointsMedia({
    md: css`
      max-width: 332px;
      justify-content: space-between;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
    `,
  })}
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989e;
    transition: 200ms ease-in-out;
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
      font-weight: 500;
      color: #070c0e;
    }
  }
`;

MenuWrapper.RightSide = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;
  ${breakpointsMedia({
    md: css`
      order: initial;
    `,
  })}
`;
