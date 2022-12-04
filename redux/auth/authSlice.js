import { createSlice } from '@reduxjs/toolkit';

// operations
import { authSignUp } from './authOperations';

const initialState = {
  id: null,
  email: null,
  nickname: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authSignUp.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [authSignUp.fulfilled]: (state, { payload }) => {
      const { email, uid, displayName } = payload;
      state.id = uid;
      state.email = email;
      state.nickname = displayName;
      state.isLoading = false;
    },
    [authSignUp.rejected]: (state, { payload }) => {
      state.id = null;
      state.email = null;
      state.nickname = null;
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
