import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBm_qfPQL6LUDpvDqofVQofqNxsUhFWHNY",
  authDomain: "e-commerce-db-4b0b1.firebaseapp.com",
  databaseURL: "https://e-commerce-db-4b0b1.firebaseio.com",
  projectId: "e-commerce-db-4b0b1",
  storageBucket: "e-commerce-db-4b0b1.appspot.com",
  messagingSenderId: "749045223756",
  appId: "1:749045223756:web:ee43acd3150612693ebfe9",
  measurementId: "G-Z005SHKK9C"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
