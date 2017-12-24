import firebase from 'firebase'

// Init Firebase
var config = {
  apiKey: "AIzaSyC79xxK_-iZZAaYseA--UOeZkIoeTaKOGc",
  authDomain: "automation-a3430.firebaseapp.com",
  databaseURL: "https://automation-a3430.firebaseio.com",
  projectId: "automation-a3430",
  storageBucket: "automation-a3430.appspot.com",
  messagingSenderId: "751406087365"
};
firebase.initializeApp(config);
export default firebase
