import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBg9ZfH-394qw8Vh-ouRK18VZuRIMpQww0",
    authDomain: "z-db-638ca.firebaseapp.com",
    databaseURL: "https://z-db-638ca.firebaseio.com",
    projectId: "z-db-638ca",
    storageBucket: "z-db-638ca.appspot.com",
    messagingSenderId: "235900706345",
    appId: "1:235900706345:web:54a5c2fd14f369798c4638",
    measurementId: "G-K42FZSVMRT"
};

// takes userAuth object and stores it into data base. 
// userAuth is the object created when user creates an account
export const createUserProfileDocument = async (userAuth, additionalData) => {
     // only want to add to firestore when userAuth exists(only when signing in)
    if (!userAuth) return;
    //document reference of users from database
    const userRef = firestore.doc(`users/${userAuth.uid}`);
     //create the snapshot object
    const snapShot = await userRef.get();
    //if there is no snapShot create data in database
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
firebase.initializeApp(config)

//auth variable to use anywhere authentication is needed
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//gets access to google authentication library
const provider = new firebase.auth.GoogleAuthProvider();
//trigger google pop up
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;