import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyCijuOX6hQy83MZKZJbNN0VTofjC-OGRXs",
      authDomain: "projectplanner-7f76d.firebaseapp.com",
      databaseURL: "https://projectplanner-7f76d.firebaseio.com",
      projectId: "projectplanner-7f76d",
      storageBucket: "projectplanner-7f76d.appspot.com",
      messagingSenderId: "673094462482",
      appId: "1:673094462482:web:1c2c37b68f327d6f207ccb",
      measurementId: "G-FCR2JECVBK",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


export default firebase;
