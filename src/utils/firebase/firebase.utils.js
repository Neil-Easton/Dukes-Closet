import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4n56mtr8vUBqEzrvy7FjD_WInn9n83sI",
  authDomain: "dukes-clothing-db.firebaseapp.com",
  projectId: "dukes-clothing-db",
  storageBucket: "dukes-clothing-db.appspot.com",
  messagingSenderId: "908215747866",
  appId: "1:908215747866:web:663780ee3992b16bfd58a3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async ({user}) => {
    const userDocRef = doc(db, 'users', user.uid);

    // console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);

    console.log(userSnapShot);
    console.log(userSnapShot.exists());
    if (!userSnapShot.exists()) {
        const {email, displayName} = user;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (err) {
            console.log('error creating the user: ', err);
        }
    }

    return userDocRef;
}