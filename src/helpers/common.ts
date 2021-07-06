import { CARD_STATUS } from 'values';
import { Cards, Score } from 'types';

export const getRandomInt = (max: number): number => Math.floor(Math.random() * Math.floor(max));

export const generateCards = (numberOfCards: number): Cards => {
  const cachedValues = new Set();
  const arr = new Array(numberOfCards / 2).fill(undefined).map(() => {
    let randomElement;
    do {
      randomElement = getRandomInt(99);
    } while (cachedValues.has(randomElement));
    return { value: randomElement, status: CARD_STATUS.BACKFACE };
  });
  return [...arr, ...arr].sort(() => 0.5 - Math.random());
};

export const compareAndSortScores = (score: Score, scores: Score[]): Score[] | void => {
  if (!scores.length) return [score];
  if (scores.length > 15 && score.score < scores[scores.length - 1].score) return;
  return [...scores, score].sort((a, b) => b.score - a.score);
};
