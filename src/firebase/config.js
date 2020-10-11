import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAySI2AUFyTembeN15Grd3NeqFyeJXAZsg",
    authDomain: "apphistoriabogota.firebaseapp.com",
    databaseURL: "https://apphistoriabogota.firebaseio.com",
    projectId: "apphistoriabogota",
    storageBucket: "apphistoriabogota.appspot.com",
    messagingSenderId: "332310551650",
    appID: "1:332310551650:ios:96fec992c088ebc5afc53b",
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };