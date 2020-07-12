import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAIaRrxnE1nlzeD992aTwF1ZPtrAW0EB2k",
  authDomain: "barterapp-b83fa.firebaseapp.com",
  databaseURL: "https://barterapp-b83fa.firebaseio.com",
  projectId: "barterapp-b83fa",
  storageBucket: "barterapp-b83fa.appspot.com",
  messagingSenderId: "435808965069",
  appId: "1:435808965069:web:a6c4e7cf59fbbbac5cf484"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
