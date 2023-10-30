import IllustrationThankYou from '@assets/IllustrationThankYou.js';
import { RatingContext } from '@context/RatingContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Description, Heading, Result } from './styles.tsx';

export default function ThankYou() {
  const { scoreSelected, setScore, setScoreSelected } =
    useContext(RatingContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.setTimeout(() => {
      setScore(0);
      setScoreSelected(0);
      navigate('/');
    }, 2000);
  }, [navigate, setScore, setScoreSelected]);

  return (
    <>
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
    </>
  );
}
