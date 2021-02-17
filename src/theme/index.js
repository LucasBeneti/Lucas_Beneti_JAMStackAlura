import { typographyVariants } from './typographyVariants';

const light = {
  background: {
    primary: '#FFF',
    secondary: '#dedede',
  },
  text: {
    primary: '#000',
    secondary: '#dedede',
  },
};

const dark = {
  background: {
    primary: '#000',
    secondary: '#dedede',
  },
  text: {
    primary: '#FFF',
    secondary: '#dedede',
  },
};

export const defaultStyles = {
  typographyVariants,
  breakpoints: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  borderRadius: '12px',
  fontFamily: "'Montserrat', sans-serif",
  transition: '200ms ease-in-out',
};

export const lightTheme = { ...defaultStyles, ...light };
export const darkTheme = { ...defaultStyles, ...dark };
