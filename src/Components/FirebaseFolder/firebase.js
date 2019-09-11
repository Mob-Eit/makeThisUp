import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCV2nLrVk_EYX9S-Fvq2Klke0m5SXZ4HbA",
    authDomain: "makeupyourmind-e0283.firebaseapp.com",
    databaseURL: "https://makeupyourmind-e0283.firebaseio.com",
    projectId: "makeupyourmind-e0283",
    storageBucket: "makeupyourmind-e0283.appspot.com",
    messagingSenderId: "736006327873",
    appId: "1:736006327873:web:86c8cb75e17da1b0bb00c0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;