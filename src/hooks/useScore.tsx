import { compareAndSortScores } from 'helpers/common';
import { useDispatch, useSelector } from 'react-redux';
import { addScore } from 'store/scoresSlice';
import { RootState } from 'store/store';
import { Score } from 'types';

type UseScore = {
  scores: Score[];
  setScore: (score: Score) => void;
};
export const useScore = (): UseScore => {
  const scores = useSelector((state: RootState) => state.scores.scores);
  const dispatch = useDispatch();
  const setScore = (score: Score) => {
    const newScoresTable = compareAndSortScores(score, scores);
    newScoresTable && dispatch(addScore(newScoresTable));
  };
  return { scores, setScore };
};
