import RatingContextProvider from '@context/RatingContext';
import RatingFeedback from './pages/RatingFeedback';

export default function App() {
  return (
    <RatingContextProvider>
      <RatingFeedback />
    </RatingContextProvider>
  );
}
