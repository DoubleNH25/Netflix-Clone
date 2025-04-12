
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_SI0hK46yD0_CL22JLfe-idxeRPEFbwk",
  authDomain: "netflix-clone-56ecf.firebaseapp.com",
  projectId: "netflix-clone-56ecf",
  storageBucket: "netflix-clone-56ecf.firebasestorage.app",
  messagingSenderId: "255376220628",
  appId: "1:255376220628:web:9d7f7f946346b26c157641",
  measurementId: "G-GD07C4PP36"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);