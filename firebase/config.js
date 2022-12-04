// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDkXzL9IqtLzvBc9sFIj3lnlIcwxfDaHVE',
  authDomain: 'react-native-goit-abf23.firebaseapp.com',
  projectId: 'react-native-goit-abf23',
  storageBucket: 'react-native-goit-abf23.appspot.com',
  messagingSenderId: '905655294760',
  appId: '1:905655294760:web:c7379cb1b6711abace4e1d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Auth Firebase
export const auth = getAuth(app);
