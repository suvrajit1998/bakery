import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDA0xHVLC7vGSAO_bPEvJaah4tljGoFIek',
  authDomain: 'bakery-cake-shop-au.firebaseapp.com',
  databaseURL: 'https://bakery-cake-shop-au.firebaseio.com',
  projectId: 'bakery-cake-shop-au',
  storageBucket: 'bakery-cake-shop-au.appspot.com',
  messagingSenderId: '318477533448',
  appId: '1:318477533448:web:f622fe7fb8e2e8b62c2cbd',
  measurementId: 'G-174T39FTH2'
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (ex) {
      console.log(ex)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
