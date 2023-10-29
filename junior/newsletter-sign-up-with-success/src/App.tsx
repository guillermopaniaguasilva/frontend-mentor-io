import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../../commons/src/theme';
import NewsLetterSignUp from './pages/NewsLetterSignUp';

import '../../../commons/src/theme/main.scss';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NewsLetterSignUp />
    </ThemeProvider>
  );
}
