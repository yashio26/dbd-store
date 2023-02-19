import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA2ORQqjvlyABr3DuZ2QBAe8y9h6yqEUrE',
  authDomain: 'dbd-latino.firebaseapp.com',
  projectId: 'dbd-latino',
  storageBucket: 'dbd-latino.appspot.com',
  messagingSenderId: '268445711986',
  appId: '1:268445711986:web:8a9ec3e9b61fc751190ceb',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
