import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr7FifK0Br_PDd1f2RVfarNd56MFt7hxo",
  authDomain: "beauty-7a6f6.firebaseapp.com",
  projectId: "beauty-7a6f6",
  storageBucket: "beauty-7a6f6.appspot.com",
  messagingSenderId: "997842158550",
  appId: "1:997842158550:web:482b7f51a6e9b548c95a77"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firebase.firestore(app);
};