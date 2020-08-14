import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBL7dqq8uxlp1E_JRvBnfNW0ngEQSKTdiQ',
  authDomain: 'todo-react-85b96.firebaseapp.com',
  databaseURL: 'https://todo-react-85b96.firebaseio.com',
  projectId: 'todo-react-85b96',
  storageBucket: 'todo-react-85b96.appspot.com',
  messagingSenderId: '339245241733',
  appId: '1:339245241733:web:6eb6558f5b0ec62375e0ec',
  measurementId: 'G-Q35GC95K7C'
});
const db = firebaseApp.firestore();

export default db;
