import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CARD_STATUS, LEVEL } from 'values';
import { Cards } from 'types';

interface GameState {
  value: number;
  level: LEVEL;
  cards: Cards;
  statuses: CARD_STATUS[];
  selected: number[];
  isBusy: boolean;
  matched: 0;
  unmatched: number;
}

const initialState: GameState = {
  value: 0,
  level: LEVEL.EASY,
  cards: [],
  statuses: [],
  selected: [],
  isBusy: false,
  matched: 0,
  unmatched: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setLevel: (state, { payload }: PayloadAction<LEVEL>) => {
      state.level = payload;
    },
    setCards: (state, { payload }: PayloadAction<Cards>) => {
      state.matched = 0 ;
      state.unmatched = 0 ;
      state.selected = [] ;
      state.cards = payload;
      state.statuses = new Array(payload.length).fill(CARD_STATUS.BACKFACE);
    },
    resetSelected: (state) => {
      state.selected = [];
    },
    flipCard: (state, { payload }: PayloadAction<number>) => {
      state.statuses[payload] = CARD_STATUS.FLIPPED;
      state.selected.push(payload);
    },
    matchCards: (state) => {
      state.selected.forEach((el) => {
        state.statuses[el] = CARD_STATUS.MATCHED;
      });
      state.selected = [];
      state.isBusy = false;
      state.matched += 1;
    },
    flipUnmatched: (state) => {
      state.statuses = state.statuses.map((status, id) =>
        state.selected.includes(id) ? CARD_STATUS.BACKFACE : status,
      );
      state.selected = [];
      state.isBusy = false;
      state.unmatched += 1;
    },
  },
});

export const { setLevel, setCards, flipCard, matchCards, flipUnmatched } = gameSlice.actions;
export default gameSlice.reducer;
