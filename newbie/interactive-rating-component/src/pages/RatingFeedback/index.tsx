import IconStart from '@assets/IconStar.tsx';
import RatingContextProvider from '@context/RatingContext';
import RatingForm from './components/RatingForm';
import { Circle, Container } from './styles.tsx';

const RatingFeedback = () => {
  return (
    <RatingContextProvider>
      <Container>
        <Circle>
          <IconStart accessibilityTitle="" titleId="" />
        </Circle>
        <RatingForm maxScore={5} />
      </Container>
    </RatingContextProvider>
  );
};

export default RatingFeedback;
