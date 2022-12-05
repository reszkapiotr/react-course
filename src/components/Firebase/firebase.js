import app from 'firebase/compat/app';
import "firebase/compat/auth";
import 'firebase/compat/database'

const config = {
    apiKey: "AIzaSyBnbAwqkAfaa6IaSXQ5jgvgjEV64lbmfXM",
    authDomain: "my-firebase-project-d0780.firebaseapp.com",
    databaseURL: "https://my-firebase-project-d0780-default-rtdb.firebaseio.com",
    projectId: "my-firebase-project-d0780",
    storageBucket: "my-firebase-project-d0780.appspot.com",
    messagingSenderId: "931254209597",
    appId: "1:931254209597:web:9cf082d7be1ecc431aee54"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    deleteAccount = () =>
        this.auth.currentUser.delete();

    // Direct DB connection

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');
}

export default Firebase;