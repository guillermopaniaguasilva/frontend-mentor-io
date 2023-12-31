import { RatingContext } from '@context/RatingContext';
import { FormEvent, useContext, useEffect } from 'react';
import {
  Button,
  Description,
  Form,
  Heading,
  Score,
  ScoresContainer,
} from './styles.tsx';

type RatingFormProps = {
  maxScore: number;
};

export default function RatingForm({ maxScore }: RatingFormProps) {
  const { score, setScore, setScoreSelected, setMaxScore } =
    useContext(RatingContext);
  const scores = Array.from({ length: maxScore }, (_, index) => index + 1);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setScoreSelected(score);
  };

  useEffect(() => setMaxScore(maxScore), [maxScore, setMaxScore]);

  return (
    <Form onSubmit={onSubmit}>
      <Heading>How did we do?</Heading>
      <Description>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Description>
      <ScoresContainer>
        {scores.map((value) => (
          <Score
            key={value}
            selected={value === score}
            onClick={() => setScore(value)}
          >
            {value}
          </Score>
        ))}
      </ScoresContainer>
      <Button>Submit</Button>
    </Form>
  );
}
