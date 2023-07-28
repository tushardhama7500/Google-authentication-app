import { initializeApp } from "firebase/app";
import  {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBJq9dswiSFzl_AjSISRJfun01Tk_9O5hw",
  authDomain: "tushar-shop.firebaseapp.com",
  projectId: "tushar-shop",
  storageBucket: "tushar-shop.appspot.com",
  messagingSenderId: "678782509740",
  appId: "1:678782509740:web:98fcbc8781105478823509",
  measurementId: "G-JMD2LX7TZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};