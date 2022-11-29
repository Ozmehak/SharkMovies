import { initializeApp } from 'firebase/app'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'loginformovies-3803f.firebaseapp.com',
  projectId: 'loginformovies-3803f',
  storageBucket: 'loginformovies-3803f.appspot.com',
  messagingSenderId: '592807775947',
  appId: '1:592807775947:web:0aed4c5aaed6729b1b954e',
  measurementId: 'G-CGP4EW31M7',
}

export const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const googleProvider = new GoogleAuthProvider()
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const user = res.user
    const q = query(collection(db, 'users'), where('uid', '==', user.uid))
    const docs = await getDocs(q)
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      })
    }
  } catch (err: any) {
    console.error(err)
    alert(err.message)
  }
}

const logout = () => {
  signOut(auth)
}

const addToWatchlist = async (userId: string, movieId: string) => {
  const docRef = doc(db, 'watchlist', `${userId}`)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    await updateDoc(docRef, { watchlist: arrayUnion(`${movieId}`) })
  } else {
    await setDoc(doc(db, 'watchlist', userId), {
      watchlist: [movieId],
    })
  }
}

const removeFromWatchlist = async (userId: string, movieId: string) => {
  const watchlistRef = doc(db, 'watchlist', `${userId}`)
  await updateDoc(watchlistRef, {
    watchlist: arrayRemove(movieId),
  })
}

const showWatchList = async (userId: string) => {
  const docRef = doc(db, 'watchlist', `${userId}`)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    console.log(docSnap.data())
  } else {
    console.log('No such document!')
  }
}

export {
  auth,
  db,
  signInWithGoogle,
  logout,
  addToWatchlist,
  removeFromWatchlist,
  showWatchList,
}
