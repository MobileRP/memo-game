import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  userName: string;
  score: number
}

const initialState: UserState = {
  userName: '',
  score: 0
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }:PayloadAction<string>) => {

      state.userName = payload
    },
    setScore: (state, {payload: {score}}: PayloadAction<{score: number}>) => {
      state.score = score
    },
    reset: (state) => {
     state.userName = '';
     state.score = 0
    },
  },
})

export const { setUser, setScore, reset } = userSlice.actions

export default userSlice.reducer
