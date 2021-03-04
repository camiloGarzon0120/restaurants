import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBQFMsjoggHlY74DGRxNgKxqoSG2aCnYZ4",
    authDomain: "restaurants-1fdce.firebaseapp.com",
    projectId: "restaurants-1fdce",
    storageBucket: "restaurants-1fdce.appspot.com",
    messagingSenderId: "359269208139",
    appId: "1:359269208139:web:565196982fd45d6548fdce"
}

export const firebaseApp =  firebase.initializeApp(firebaseConfig)