import firebase from "firebase";

firebase.initializeApp({
    apiKey: 'AIzaSyDrvTbdSBcv1LEgReDFoO-0Z3tnGJsO3UI',
    authDomain: 'interiit-astrosat.firebaseapp.com',
    projectId: 'interiit-astrosat',
});

export const db = firebase.firestore();
