import { ThemeProvider } from 'styled-components';

import theme from '@commons/theme';
import NewsLetterSignUp from './pages/NewsLetterSignUp';

import '@commons/theme/main.scss';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NewsLetterSignUp />
    </ThemeProvider>
  );
}
