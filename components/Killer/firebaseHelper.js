import firebase from 'firebase'
import config from './credentials.json'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase

export const db = firebase.firestore()

export const getAll = (ref, attr) => db.collection(`${ref}`)

export const getOne = (ref, attr, whereCause) => db.collection(`${ref}`).where(`${attr}`, '==', whereCause)

export const insert = (ref, value) => db.collection(`${ref}`).doc(`${value.key}`).set({ ...value })
