import { readFileSync } from 'fs'
import papa from 'papaparse'
import firebase from 'firebase/app/dist/index.cjs.js'
import 'firebase/auth/dist/index.cjs.js'
import 'firebase/firestore/dist/index.node.cjs.js'

const config = {
  apiKey: 'AIzaSyC6Ks8IXAkzJKzdOK_JyqJiegg4kwsdlWU',
  authDomain: 'wedding-c6cfa.firebaseapp.com',
  databaseURL: 'https://wedding-c6cfa.firebaseio.com',
  projectId: 'wedding-c6cfa',
  storageBucket: 'wedding-c6cfa.appspot.com',
  messagingSenderId: '267326677449',
  appId: '1:267326677449:web:46f977551a3e0cc9c6c818',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const db = firebase.firestore()

const csv = readFileSync('./invites.csv', { encoding: 'utf8' })
const { data } = papa.parse(csv, { header: true })
const func = async () => {
  for (let foo of data) {
    const { displayName, login, password, vip, mairie } = foo
    try {
      const { user } = await auth.createUserWithEmailAndPassword(login + '@manonetmartin.fr', password)
      console.log(`Created user ${user.uid} for ${displayName}`)
      await user.updateProfile({ displayName })
      console.log(`Created displayName for ${displayName}`)
      await db
        .collection('users')
        .doc(user.uid)
        .set({
          displayName,
          mairie: mairie === 'Oui' ? true : false,
          vip: vip === 'Oui' ? true : false,
        })
      console.log(`Successfully added ${displayName} to database`)
    } catch (e) {
      console.log(e)
      process.exit(1)
    }
  }
}

func()
