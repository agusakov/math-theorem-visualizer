import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAxZOFex4t7m9mGJd4yBNBqlEEJm4EN5Hw",
    authDomain: "math-theorem-visualizer.firebaseapp.com",
    databaseURL: "https://math-theorem-visualizer.firebaseio.com",
    projectId: "math-theorem-visualizer",
    storageBucket: "math-theorem-visualizer.appspot.com",
    messagingSenderId: "359133065933",
    appId: "1:359133065933:web:3e2933488561dac96aef84"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;