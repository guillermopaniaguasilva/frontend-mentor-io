import { useSelector } from 'react-redux';
import { AppState } from '../RatingForm/index.tsx';
import { Container, Result, Heading, Description } from './styles.tsx';
import IllustrationThankYou from '@assets/newbie/intereactive-rating-component/IllustrationThankYou.js';

export default function ThankYou() {
  const { value, maxScore } = useSelector((state: AppState) => state.rating);

  return (
    <>
      <Container>
        <IllustrationThankYou
          height={96}
          width={144}
          accessibilityTitle=""
          titleId=""
        />
        <Result>{`You selected ${value} out of ${maxScore}`}</Result>
        <Heading>Thank you!</Heading>
        <Description>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </Description>
      </Container>
    </>
  );
}
