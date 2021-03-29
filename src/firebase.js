import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBVbxXavNnwPMahDNFXgUhYI4BSkYehVKg",
    authDomain: "fir-react-auth-3d939.firebaseapp.com",
    projectId: "fir-react-auth-3d939",
    storageBucket: "fir-react-auth-3d939.appspot.com",
    messagingSenderId: "310743863590",
    appId: "1:310743863590:web:a39157aa088a3490f9f1e7"
})

export const auth = app.auth()

export default app
