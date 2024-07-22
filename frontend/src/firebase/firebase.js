import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCXnKsQCkRS0MJhpjdwyDyBkhO306_XH4g",
  authDomain: "blame-6b696.firebaseapp.com",
  projectId: "blame-6b696",
  storageBucket: "blame-6b696.appspot.com",
  messagingSenderId: "67278534424",
  appId: "1:67278534424:web:8ae1af1375ee2c5382106d",
  measurementId: "G-DHD6FL6Z43"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {auth, googleProvider};




