import { Routes, Route } from 'react-router-dom';
import RatingFeedback from './pages/RatingFeedback';
import ThankYou from './pages/RatingFeedback/components/ThankYou';

export default function App() {
  return (
    <Routes>
      <Route index element={<RatingFeedback />} />
      <Route path="/thank-you" element={<ThankYou />}></Route>
    </Routes>
  );
}
