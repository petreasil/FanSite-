import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAqdm90GqiIeqbxaQ3esGxem9gtxgtI-CA",
  authDomain: "m-city-40be9.firebaseapp.com",
  databaseURL: "https://m-city-40be9.firebaseio.com",
  projectId: "m-city-40be9",
  storageBucket: "m-city-40be9.appspot.com",
  messagingSenderId: "1013357179206"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");

export { firebase, firebaseMatches, firebasePromotions };
