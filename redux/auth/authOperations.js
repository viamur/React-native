import { createAsyncThunk } from '@reduxjs/toolkit';

// Firebase
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';

export const authSignUp = createAsyncThunk('auth/SignUp', async (userData, thunkApi) => {
  try {
    const { login, email, password } = userData;
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    //   email, uid, displayName
    return { email: user.email, uid: user.uid, displayName: user.displayName };
  } catch (error) {
    console.log('error', error);
    return thunkApi.rejectWithValue(error.message);
  }
});
