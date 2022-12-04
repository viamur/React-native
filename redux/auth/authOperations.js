import { createAsyncThunk } from '@reduxjs/toolkit';

// Firebase
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../../firebase/config';

/* =============================REGISTRATION============================= */
export const authSignUp = createAsyncThunk('auth/SignUp', async (userData, thunkApi) => {
  try {
    const { login, email, password } = userData;
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(user, {
      displayName: login,
    });

    //   email, uid, displayName
    return {
      email: user.email,
      uid: user.uid,
      displayName: user.displayName,
      photo: user.photoURL,
    };
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

/* =============================LOGIN============================= */

export const authSignIn = createAsyncThunk('auth/SignIn', async (userData, thunkApi) => {
  try {
    const { email, password } = userData;
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    //   email, uid, displayName
    return {
      email: user.email,
      uid: user.uid,
      displayName: user.displayName,
      photo: user.photoURL,
    };
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

/* =============================LOG OUT============================= */

export const authSignOut = createAsyncThunk('auth/SignOut', async (userData, thunkApi) => {
  try {
    const res = await signOut(auth);
    console.log('authSignOut', res);
    return res;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
