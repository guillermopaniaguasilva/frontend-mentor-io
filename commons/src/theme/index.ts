import { DefaultTheme } from 'styled-components';

const breakpoints = {
  mobile: '375px',
  desktop: '1024px',
};

const colors = {
  tomato: '#FF6257',
  darkSlateGrey: '#242742',
  charcoalGrey: '#36384E',
  grey: '#36384E',
  white: '#FFFFFF',
  orange: '#FC7614',
  lightGray: '#969FAD',
  mediumGray: '#7C8798',
  darkBlue: '#262E38',
  veryDarkBlue: '#131518',
  veryDarkGrayishBlue: '#48556A',
  desaturatedDarkBlue: '#6D7F97',
  grayishBlue: '#9EAFC2',
  lightGrayishBlue: '#ECF2F8',
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
  Roboto: 'Roboto',
  Manrope: 'Manrope',
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
      orange: string;
      lightGray: string;
      mediumGray: string;
      darkBlue: string;
      veryDarkBlue: string;
      veryDarkGrayishBlue: string;
      desaturatedDarkBlue: string;
      grayishBlue: string;
      lightGrayishBlue: string;
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
      Roboto: string;
      Manrope: string;
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
