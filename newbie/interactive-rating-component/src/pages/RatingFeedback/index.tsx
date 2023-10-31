import IconStart from '@assets/IconStar.tsx';
import { RatingContext } from '@context/RatingContext';
import { useContext } from 'react';
import RatingForm from './components/RatingForm';
import ThankYou from './components/ThankYou/index.tsx';
import { Circle, Container } from './styles.tsx';

const RatingFeedback = () => {
  const { scoreSelected } = useContext(RatingContext);

  return (
    <Container>
      {scoreSelected === 0 ? (
        <>
          <Circle>
            <IconStart accessibilityTitle="" titleId="" />
          </Circle>
          <RatingForm maxScore={5} />
        </>
      ) : (
        <ThankYou />
      )}
    </Container>
  );
};

export default RatingFeedback;
