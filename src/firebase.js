// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import{ getFireStore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmVoxx9Yqqct5GV65OM0ms5WMHZ9Ah8lk",
  authDomain: "blog-da8b2.firebaseapp.com",
  projectId: "blog-da8b2",
  storageBucket: "blog-da8b2.appspot.com",
  messagingSenderId: "238818601781",
  appId: "1:238818601781:web:148a2b70230fc642b6fa7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFireStore(app);

export { auth,provider,db};