import RatingContextProvider from '@context/RatingContext';
import theme from '@theme/index';
import { ThemeProvider } from 'styled-components';
import RatingFeedback from './pages/RatingFeedback';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RatingContextProvider>
        <RatingFeedback />
      </RatingContextProvider>
    </ThemeProvider>
  );
}
