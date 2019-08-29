import * as firebase from 'firebase';
import * as firebaseConfig from './firebase-config.json';

firebase.initializeApp(firebaseConfig.default);
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();