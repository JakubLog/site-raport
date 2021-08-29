import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCPWQj25kxbtWIitG-cT_cqwNR-PfONDIY',
  authDomain: 'raport-82ead.firebaseapp.com',
  projectId: 'raport-82ead',
  storageBucket: 'raport-82ead.appspot.com',
  messagingSenderId: '336466001102',
  appId: '1:336466001102:web:647f85ae62ed587b9ea49f'
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
export const auth = app.auth();
