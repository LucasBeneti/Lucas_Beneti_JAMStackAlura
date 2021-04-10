import { css } from 'styled-components';
import { lightTheme } from '../../index';

const { breakpoints } = lightTheme;
export function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  return breakpointsNames.map((breakpointName) => {
    if (!breakpoints[breakpointName]) {
      return '';
    }
    return css`
      @media screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakpoints[breakpointName]}
      }
    `;
  });
}
