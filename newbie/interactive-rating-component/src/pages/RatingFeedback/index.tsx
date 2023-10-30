import { Container, Circle } from './styles.tsx';
import RatingForm from './components/RatingForm';
import IconStart from '@assets/newbie/intereactive-rating-component/IconStar.tsx';

const RatingFeedback = () => {
  return (
    <Container>
      <Circle>
        <IconStart accessibilityTitle="" titleId="" />
      </Circle>
      <RatingForm maxScore={5} />
    </Container>
  );
};

export default RatingFeedback;
