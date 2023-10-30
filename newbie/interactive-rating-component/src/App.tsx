import { Routes, Route } from 'react-router-dom';
import RatingFeedback from './pages/RatingFeedback';
import ThankYou from './pages/RatingFeedback/components/ThankYou';
import RatingContextProvider from './context/RatingContext';

export default function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <RatingContextProvider>
            <RatingFeedback />
          </RatingContextProvider>
        }
      />
      <Route
        path="/thank-you"
        element={
          <RatingContextProvider>
            <ThankYou />
          </RatingContextProvider>
        }
      ></Route>
    </Routes>
  );
}
