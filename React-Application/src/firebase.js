import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDAJia6QJvMEGS04PuLZfMqPYr1l5a4i**",
  authDomain: "login-singup-fe14b.firebaseapp.com",
  projectId: "login-singup-fe14b",
  storageBucket: "login-singup-fe14b.firebasestorage.app",
  messagingSenderId: "185314010001",
  appId: "1:185314010001:web:66d353d9d42b2bb4be7030",
  databaseURL: "https://login-singup-fe14b-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig)