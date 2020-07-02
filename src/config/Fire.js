import firebase from 'firebase';
require("firebase/database");
require("firebase/auth");

const config = {
    apiKey: "AIzaSyAqabJPvk4ExIGTRDNkNWTrPjbK2KawvbU",
    authDomain: "react-crud-e02cf.firebaseapp.com",
    databaseURL: "https://react-crud-e02cf.firebaseio.com",
    projectId: "react-crud-e02cf",
    storageBucket: "react-crud-e02cf.appspot.com",
    messagingSenderId: "34461049850",
    appId: "1:34461049850:web:3267d8e9c328ae4e3e7a43"
};

const fire = firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();

export default fire;