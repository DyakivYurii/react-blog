import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let config = {
  apiKey: 'AIzaSyDhzHVEYqziGYw0LVo5dk4QNN4PdZqnKcM',
  authDomain: 'reactblog-da83b.firebaseapp.com',
  databaseURL: 'https://reactblog-da83b.firebaseio.com',
  projectId: 'reactblog-da83b',
  storageBucket: '',
  messagingSenderId: '603753800311'
};

firebase.initializeApp(config);
const DB = firebase.firestore();
DB.settings({ timestampsInSnapshots: true });

const auth = firebase.auth();

export { DB, auth };
