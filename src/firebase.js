import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA8WC1dUBDJd47q61fr74sMzWmlQ0fZK1U",
  authDomain: "slack-clone-8f5c0.firebaseapp.com",
  databaseURL: "https://slack-clone-8f5c0.firebaseio.com",
  projectId: "slack-clone-8f5c0",
  storageBucket: "slack-clone-8f5c0.appspot.com",
  messagingSenderId: "133466406161",
  appId: "1:133466406161:web:5b89850a97ad2209f660b0",
  measurementId: "G-N8H8B29E66"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };

export default db;