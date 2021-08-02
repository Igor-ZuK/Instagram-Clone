import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyACIkl9G5M1IGJAZXB9n45mK8uXB1wuhFg',
  authDomain: 'instagram-bb052.firebaseapp.com',
  projectId: 'instagram-bb052',
  storageBucket: 'instagram-bb052.appspot.com',
  messagingSenderId: '648960083277',
  appId: '1:648960083277:web:013d03826374c75fb82304'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
