import { Container, Circle } from './styles.tsx';
import Index from '../RatingForm/index.tsx';
import IconStart from '@assets/newbie/intereactive-rating-component/IconStar.tsx';

const RatingFeedback = () => {
  return (
    <Container>
      <Circle>
        <IconStart accessibilityTitle="" titleId="" />
      </Circle>
      <Index maxScore={5} />
    </Container>
  );
};

export default RatingFeedback;
