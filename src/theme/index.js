import { typographyVariants } from './typographyVariants';

const light = {
  background: {
    primary: '#338E4F',
    // primary: '#000',
    secondary: '#FFF',
  },
  text: {
    primary: '#073615',
    secondary: '#FFF',
    terciary: '#000',
  },
  svgIcons: {
    primary: '#FFF',
  },
};

const dark = {
  background: {
    primary: '#121212',
    secondary: '#212121',
    terciary: '#333333',
  },
  text: {
    primary: '#E3E3E3',
    secondary: '#BDBDBD',
    terciary: '#969696',
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
