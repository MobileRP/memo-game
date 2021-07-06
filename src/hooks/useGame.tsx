import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cards } from 'types';
import { LEVEL, CARDS_PER_LEVEL } from 'values';
import { RootState } from 'store';
import { setLevel as setLevelAction, setCards as setCardsAction, matchCards, flipUnmatched } from 'store';
import { generateCards } from 'helpers/common';

type UseGame = {
  level: LEVEL;
  setLevel: (level: LEVEL) => void;
  startNewGame: () => void;
  cards: Cards;
  isBusy: boolean;
  isCompleted: boolean;
  getCurrentScore: { score:number , level: LEVEL };
};
export const useGame = (): UseGame => {
  //Selectors
  const level = useSelector((state: RootState) => state.game.level);
  const cards = useSelector((state: RootState) => state.game.cards);
  const selected = useSelector((state: RootState) => state.game.selected);
  const isBusy = useSelector((state: RootState) => state.game.isBusy);
  const { matched: matchedPairsCount, unmatched: unmatchedCount } = useSelector(
    (state: RootState) => state.game,
  );
  const isCompleted = matchedPairsCount === parseInt(CARDS_PER_LEVEL[level]) / 2;
  const dispatch = useDispatch();
  useEffect(() => {
    if (selected.length === 2) {
      cards[selected[0]].value === cards[selected[1]].value
        ? dispatch(matchCards())
        : setTimeout(() => dispatch(flipUnmatched()), 500);
    }
  }, [cards, dispatch, selected]);

  const setLevel = (level: LEVEL) => dispatch(setLevelAction(level));
  const startNewGame = () => {
    const cards = generateCards(parseInt(CARDS_PER_LEVEL[level]));
    dispatch(setCardsAction(cards));
  };
  const getCurrentScore = { score: matchedPairsCount * 2 - unmatchedCount, level };
  return { setLevel, level, startNewGame, cards, isBusy, isCompleted, getCurrentScore };
};
