import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAjYXAsRkLwST0BvE_Tvna2rP-mLN0UMjI",
    authDomain: "net-ninja-marioplan-8cf23.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-8cf23.firebaseio.com",
    projectId: "net-ninja-marioplan-8cf23",
    storageBucket: "net-ninja-marioplan-8cf23.appspot.com",
    messagingSenderId: "533451389495",
    appId: "1:533451389495:web:bbe3b2329715c0c1415db2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase ;