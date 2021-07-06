import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';
import userReducer from './userSlice';
import scoresReducer from './scoresSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'scores',
  storage,
};

const persistedReducer = persistReducer(persistConfig, scoresReducer);
export const store = configureStore({
  reducer: {
    game: gameReducer,
    user: userReducer,
    scores: persistedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
