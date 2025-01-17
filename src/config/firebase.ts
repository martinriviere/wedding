import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyC6Ks8IXAkzJKzdOK_JyqJiegg4kwsdlWU",
  authDomain: "wedding-c6cfa.firebaseapp.com",
  databaseURL: "https://wedding-c6cfa.firebaseio.com",
  projectId: "wedding-c6cfa",
  storageBucket: "wedding-c6cfa.appspot.com",
  messagingSenderId: "267326677449",
  appId: "1:267326677449:web:46f977551a3e0cc9c6c818",
}

// @ts-ignore
const isClient = process.isClient

if (isClient) {
  firebase.initializeApp(config)
}



export const auth = isClient ? firebase.auth() : null
export const db = isClient ? firebase.firestore() : null
export const deleteField = firebase.firestore.FieldValue.delete
