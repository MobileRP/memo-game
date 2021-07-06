import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Score } from 'types';

export interface ScoresState {
  scores: Score[];
  lastScore: Score | null;
}
const initialState: ScoresState = {
  scores: [],
  lastScore: null,
};

export const scoresSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addScore: (state, { payload }: PayloadAction<Score[]>) => {
      state.scores = payload;
    },
  },
});

export const { addScore } = scoresSlice.actions;

export default scoresSlice.reducer;
