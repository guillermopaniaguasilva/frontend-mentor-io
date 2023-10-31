import IllustrationThankYou from '@assets/IllustrationThankYou';
import { RatingContext } from '@context/RatingContext';
import { useContext } from 'react';
import { Container, Description, Heading, Result } from './styles.tsx';

export default function ThankYou() {
  const { scoreSelected } = useContext(RatingContext);

  return (
    <Container>
      <IllustrationThankYou
        height={96}
        width={144}
        accessibilityTitle=""
        titleId=""
      />
      <Result>{`You selected ${scoreSelected} out of ${5}`}</Result>
      <Heading>Thank you!</Heading>
      <Description>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </Description>
    </Container>
  );
}
