import React from 'react';
import styled, { css } from 'styled-components';

import { breakpointsMedia } from '../../utils/breakpointsMedia';

const LogoWrapper = styled.span`
  height: 5rem;
  width: 5rem;
  ${breakpointsMedia({
    md: css`
      height: 6rem;
      width: 6rem;
    `,
    lg: css`
      height: 7.5rem;
      width: 7.5rem;
    `,
    xl: css`
      height: 10rem;
      width: 10rem;
    `,
  })}

  .logo {
    fill: ${({ theme }) => theme.svgIcons.primary};
  }
`;

export const Logo = () => (
  <LogoWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 206.42 208.351">
      <g transform="translate(-105.8 -92.63)">
        <g transform="translate(105.8 127.802)">
          <path
            className="logo"
            d="M199.34,409.159l-93.54-93.54,79.638-79.638L204.056,254.6l-61.021,61.021,74.923,74.923Z"
            transform="translate(-105.8 -235.98)"
          />
        </g>
        <path
          className="logo"
          d="M479.765,174.175a37.942,37.942,0,0,0-8.627-13.038L402.16,92.63l-18.593,18.593,52.256,51.785-.025.025,16.719,16.719a13.012,13.012,0,0,1,0,18.552,13.352,13.352,0,0,1-4.38,2.952,12.962,12.962,0,0,1-14.238-2.888l-16.719-16.719-.056.056-29.791-29.791L331.6,207.647l46.513,46.513a37.908,37.908,0,0,0,13.038,8.627,40.078,40.078,0,0,0,29.71,0,37.9,37.9,0,0,0,13.038-8.627,31.626,31.626,0,0,0,4.672-6.033,34.478,34.478,0,0,0,3.307-7.265A33.324,33.324,0,0,0,443.4,233.1a20.587,20.587,0,0,0-.746-7.427,24.985,24.985,0,0,0,7.459.584,32.038,32.038,0,0,0,7.721-1.492,36.567,36.567,0,0,0,7.265-3.244,29.605,29.605,0,0,0,6.033-4.605,37.9,37.9,0,0,0,8.627-13.038,40.073,40.073,0,0,0,0-29.708ZM418.2,231.2a13.075,13.075,0,0,1-21.469,4.348l-27.9-27.9,18.554-18.554,27.895,27.895A12.994,12.994,0,0,1,418.2,231.2Z"
          transform="translate(-170.398 0)"
        />
      </g>
    </svg>
  </LogoWrapper>
);
