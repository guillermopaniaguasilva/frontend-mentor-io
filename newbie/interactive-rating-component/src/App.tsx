import { Routes, Route } from 'react-router-dom';
import RatingFeedback from './pages/Rating/components/RatingFeedback';
import Index from './pages/Rating/components/ThankYou';

export default function App() {
  return (
    <Routes>
      <Route index element={<RatingFeedback />} />
      <Route path="/thank-you" element={<Index />}></Route>
    </Routes>
  );
}
