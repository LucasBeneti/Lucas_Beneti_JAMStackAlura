import { typographyVariants } from './typographyVariants';

const colors = {
  background: {
    light: {
      color: '#FFF',
    },
  },
  primary: {
    main: {
      color: '#dedede',
    },
  },
};

export default {
  colors,
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
