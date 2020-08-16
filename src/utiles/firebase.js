import firebase from "firebase/app"   // siempre
import 'firebase/firestore'          //siempre
import 'firebase/storage'          //siempre
  
// const storage = firebase.storage();
  

  var firebaseConfig = {
    apiKey: "AIzaSyBF3Ib1hneMErskR3UrcO2WLbIf5lyHMYU",
    authDomain: "documentacionproyectos-8a947.firebaseapp.com",
    databaseURL: "https://documentacionproyectos-8a947.firebaseio.com",
    projectId: "documentacionproyectos-8a947",
    storageBucket: "documentacionproyectos-8a947.appspot.com",
    messagingSenderId: "11288068129",
    appId: "1:11288068129:web:434d7dabf91ca02201a360"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)// Initialize Firebase
}


export default firebase  // exportalo ya armado


