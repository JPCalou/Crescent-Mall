import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBX6pkSxm7keS1GpXdrnlCRRSgCT7RI2W4",
    authDomain: "crescentmall.firebaseapp.com",
    projectId: "crescentmall",
    storageBucket: "crescentmall.appspot.com",
    messagingSenderId: "1070686345895",
    appId: "1:1070686345895:web:f75db86c1f12ee87481982"
  };

  const app = initializeApp(firebaseConfig);
  const dataBase = getFirestore(app)

  export default dataBase;