import { createAsyncThunk } from '@reduxjs/toolkit';

// Firebase
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../firebase/config';
import uploadFile from '../../utils/uploadFile';

/* =============================REGISTRATION============================= */
export const authSignUp = createAsyncThunk('auth/SignUp', async (userData, thunkApi) => {
  try {
    const { login, image, email, password } = userData;
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    const imageURL = image ? await uploadFile({ path: 'avatarImage', photo: image, name: user.uid }) : null;

    await updateProfile(user, {
      displayName: login,
      photoURL: imageURL
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
    await signOut(auth);
    return;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

/* =============================STATE UPDATE============================= */

export const authStateChangedUser = createAsyncThunk('auth/StateChangedUser', async (userData, thunkApi) => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      if (user) {
        resolve({
          userId: user.uid,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          isAuth: true,
        });
      } else {
        reject({
          userId: "",
          name: "",
          email: "",
          photo: "",
          isAuth: false,
        });
      }
    });
  });




  // try {
  //   const res = onAuthStateChanged();
  //   console.warn('======authStateChangedUser=========', res);
  //   return res;
  // } catch (error) {
  //   return thunkApi.rejectWithValue(error.message);
  // }
});