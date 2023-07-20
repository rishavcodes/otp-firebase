// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiofjEVoLxkQOP1TetoApaoE4TjJ1Qpno",
  authDomain: "otp-verification-project-5ffed.firebaseapp.com",
  projectId: "otp-verification-project-5ffed",
  storageBucket: "otp-verification-project-5ffed.appspot.com",
  messagingSenderId: "59913136881",
  appId: "1:59913136881:web:41c2972988002bf73e5750",
  measurementId: "G-211MXQDDSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);