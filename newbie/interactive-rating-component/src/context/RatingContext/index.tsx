import { createContext, useMemo, useState } from 'react';

type RatingContextType = {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  maxScore: number;
  setMaxScore: React.Dispatch<React.SetStateAction<number>>;
  scoreSelected: number;
  setScoreSelected: React.Dispatch<React.SetStateAction<number>>;
};

export const RatingContext = createContext<RatingContextType>({
  score: 0,
  setScore: () => undefined,
  maxScore: 0,
  setMaxScore: () => undefined,
  scoreSelected: 0,
  setScoreSelected: () => undefined,
});

export default function RatingContextProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [score, setScore] = useState<number>(0);
  const [maxScore, setMaxScore] = useState<number>(0);
  const [scoreSelected, setScoreSelected] = useState<number>(0);

  const values = useMemo<RatingContextType>(
    () => ({
      score,
      setScore,
      maxScore,
      setMaxScore,
      scoreSelected,
      setScoreSelected,
    }),
    [score, maxScore, scoreSelected]
  );

  return (
    <RatingContext.Provider value={values}>{children}</RatingContext.Provider>
  );
}
