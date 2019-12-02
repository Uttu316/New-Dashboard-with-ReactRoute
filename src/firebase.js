import firebase from 'firebase';
const config = {
 apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
 authDomain: 'XXXXXXX.firebaseapp.com',
 databaseURL: 'https://XXXXXX.firebaseio.com',
 projectId: 'XXXXXXX',
 storageBucket: '',
 messagingSenderId: '1069378276471',
};
firebase.initializeApp(config);
export default firebase;