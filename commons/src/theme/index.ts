import { DefaultTheme } from 'styled-components';

const breakpoints = {
  mobile: '375px',
  desktop: '1024px',
};

const colors = {
  tomato: 'hsl(4, 100%, 67%)',
  darkSlateGrey: 'hsl(234, 29%, 20%)',
  charcoalGrey: 'hsl(235, 18%, 26%)',
  grey: 'hsl(231, 7%, 60%)',
  white: 'hsl(0, 0%, 100%)',
};

const fontSizes = {
  paragraph: '16px',
  heading: '40px',
};

const fontWeights = {
  light: 400,
  bold: 700,
};

const fontFamilies = {
  main: 'Roboto',
};

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      mobile: string;
      desktop: string;
    };
    colors: {
      tomato: string;
      darkSlateGrey: string;
      charcoalGrey: string;
      grey: string;
      white: string;
    };
    fontSizes: {
      paragraph: string;
      heading: string;
    };
    fontWeights: {
      light: number;
      bold: number;
    };
    fontFamilies: {
      main: string;
    };
  }
}

const theme: DefaultTheme = {
  breakpoints,
  colors,
  fontSizes,
  fontWeights,
  fontFamilies,
};

export default theme;