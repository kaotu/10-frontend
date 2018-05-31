import firebase from 'firebase'
import config from './credentials.json'
import md5 from 'md5'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase

export const db = firebase.database()

export const getAll = (ref, attr) => db.ref(`${ref}`)

export const getOne = (ref, attr, whereCause) => db.ref(`${ref}/${attr}/${whereCause}`)

export const insert = (ref, value) => db.ref(`${ref}/${md5((Math.random() * 999 + 1) + ref + {...value})}`).set({ ...value })
