import { auth, googleProvider } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

export const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
};

export const signOutUser = () => {
    return signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
    return onAuthStateChanged(auth, callback);
};


