import { createSlice } from '@reduxjs/toolkit';

// operations
import { authSignUp, authSignIn, authSignOut, authStateChangedUser } from './authOperations';

const initialState = {
  id: null,
  email: null,
  name: null,
  photo: null,
  isAuth: false,
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
      const { email, uid, displayName, photo } = payload;
      state.id = uid;
      state.email = email;
      state.photo = photo;
      state.name = displayName;
      state.isAuth = true;
      state.isLoading = false;
    },
    [authSignUp.rejected]: (state, { payload }) => {
      state.id = null;
      state.email = null;
      state.name = null;
      state.photo = null;
      state.isAuth = false;
      state.isLoading = false;
      state.error = payload;
    },
    [authSignIn.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [authSignIn.fulfilled]: (state, { payload }) => {
      const { email, uid, displayName, photo } = payload;
      state.id = uid;
      state.email = email;
      state.photo = photo;
      state.name = displayName;
      state.isAuth = true;
      state.isLoading = false;
    },
    [authSignIn.rejected]: (state, { payload }) => {
      state.id = null;
      state.email = null;
      state.name = null;
      state.photo = null;
      state.isAuth = false;
      state.isLoading = false;
      state.error = payload;
    },
    [authSignOut.pending]: state => {
      state.id = null;
      state.email = null;
      state.name = null;
      state.photo = null;
      state.isAuth = false;
      state.isLoading = true;
      state.error = null;
    },
    [authSignOut.fulfilled]: (state, { payload }) => {
      state.id = null;
      state.email = null;
      state.name = null;
      state.photo = null;
      state.isAuth = false;
      state.isLoading = false;
    },
    [authSignOut.rejected]: (state, { payload }) => {
      state.id = null;
      state.email = null;
      state.name = null;
      state.photo = null;
      state.isAuth = false;
      state.isLoading = false;
      state.error = payload;
    },
    [authStateChangedUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [authStateChangedUser.fulfilled]: (state, { payload }) => {
      const { email, userId, name, photo, isAuth } = payload;
      state.id = userId;
      state.email = email;
      state.photo = photo;
      state.name = name;
      state.isAuth = isAuth;
      state.isLoading = false;
    },
    [authStateChangedUser.rejected]: (state, { payload }) => {
      state.id = null;
      state.email = null;
      state.name = null;
      state.photo = null;
      state.isAuth = false;
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
