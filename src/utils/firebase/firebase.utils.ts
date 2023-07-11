import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  DocumentSnapshot,
  DocumentData
} from "firebase/firestore";

import { Category } from "../../store/category/category.types";

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
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export type ObjectToAdd = {
  title: string;
};

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoriesArray = querySnapshot.docs.map((docSnapShot) =>
    docSnapShot.data() as Category
  );

  // const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
  //     const {title, items} = docSnapshot.data();
  //     acc[title.toLowerCase()] = {title: title, items: items};
  //     // acc[title.toLowerCase()] = items;
  //     return acc;
  // }, {});

  return categoriesArray;
};

export type AdditionalInformation = {
  displayName?: string;
}

export type UserData = {
  createAt: Date;
  displayName: string;
  email: string;
}

export const createUserDocumentFromAuth = async (
  { user }: {user: User},
  additionalInfo = {} as AdditionalInformation,
): Promise<void | DocumentSnapshot<DocumentData>> => {
  // console.log(user);
  const userDocRef = doc(db, "users", user.uid);

  // console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);

  // console.log(userSnapShot);
  // console.log(userSnapShot.exists());
  // console.log(userSnapShot.data());
  if (!userSnapShot.exists()) {
    const { email, displayName } = user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (err) {
      console.log("error creating the user: ", err);
    }
  }

  return userSnapShot;
};

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) {
    return;
  }

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) {
    return;
  }

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
