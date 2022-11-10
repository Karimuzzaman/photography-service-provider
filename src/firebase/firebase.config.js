// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAknX_DtSLk9xGkUHVt2PbSEAQI6s3RITw",
    authDomain: "photography-client.firebaseapp.com",
    projectId: "photography-client",
    storageBucket: "photography-client.appspot.com",
    messagingSenderId: "872167595430",
    appId: "1:872167595430:web:8d752519aef048cedb8367"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;