import { typographyVariants } from './typographyVariants';

const light = {
  background: {
    primary: '#338E4F',
    secondary: '#FFF',
    terciary: '#F4F4F4',
    footer: '#338E4F',
  },
  text: {
    primary: '#FFF',
    secondary: '#073615',
    terciary: '#FFF',
  },
  svgIcons: {
    primary: '#FFF',
  },
};

const dark = {
  background: {
    primary: '#072C12',
    secondary: '#191919',
    terciary: '#2B2B2B',
    footer: '#072C12',
  },
  text: {
    primary: '#FFF',
    secondary: '#C6C6C6',
    terciary: '#338E4F',
  },
  svgIcons: {
    primary: '#FFF',
    secondary: '#338E4F',
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
