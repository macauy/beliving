// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCdMniBk3CPtnjbfo8TW2W3zFZuaiu1xNI",
	authDomain: "be-living-app.firebaseapp.com",
	projectId: "be-living-app",
	storageBucket: "be-living-app.appspot.com",
	messagingSenderId: "397978973261",
	appId: "1:397978973261:web:d05d6b5e139e4a2c1a1804",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
