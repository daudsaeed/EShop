import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCn04eikTGTxYiXAoyBxckTMQ6OihDuKjU",
  authDomain: "crwn-clothing-db-733ba.firebaseapp.com",
  projectId: "crwn-clothing-db-733ba",
  storageBucket: "crwn-clothing-db-733ba.appspot.com",
  messagingSenderId: "438976256642",
  appId: "1:438976256642:web:eb989de84f21a55f4af29b",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signinWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);
export const db = getFirestore();

// Firestore (Creating the user document there to save his data )
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  const docRef = doc(db, "users", userAuth.uid);
  console.log(docRef);

  const userSnapshot = await getDoc(docRef);

  // check if the snapshot exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(docRef, {
        displayName,
        email,
        createdAt,

        ...additionalInfo,
      });
    } catch (ex) {
      console.log(`An error occurred while saving the user ${ex.message}`);
    }
  }

  // What if the user snapshot exists
  return docRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!password || !email) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithAuthEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);