// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByVxoKI61J9Ut_9DDH0GQpINGT_C9Z5ZM",
  authDomain: "vue-live-chat-18ba8.firebaseapp.com",
  projectId: "vue-live-chat-18ba8",
  storageBucket: "vue-live-chat-18ba8.appspot.com",
  messagingSenderId: "860519412266",
  appId: "1:860519412266:web:f54086ad5c628cf6b60953"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 let db=firebase.firestore();
 let timestamp=firebase.firestore.FieldValue.serverTimestamp;

 export {db,timestamp}