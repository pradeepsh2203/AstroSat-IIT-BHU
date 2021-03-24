import firebase from "firebase";

// default firebase initialization
firebase.initializeApp({
    apiKey: 'AIzaSyDrvTbdSBcv1LEgReDFoO-0Z3tnGJsO3UI',
    authDomain: 'interiit-astrosat.firebaseapp.com',
    projectId: 'interiit-astrosat',
});

// firestore database object
export const db = firebase.firestore();
