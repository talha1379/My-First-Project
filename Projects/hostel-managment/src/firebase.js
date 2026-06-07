import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASz9rmRzhn-uZABmFqVwut9dmMKkmHS_4",

  authDomain: "hostelapp-e6e0c.firebaseapp.com",

  projectId: "hostelapp-e6e0c",

  storageBucket: "hostelapp-e6e0c.firebasestorage.app",

  messagingSenderId: "660867654330",

  appId: "1:660867654330:web:776ee3e8d91ac027be5883",

  measurementId: "G-2MZCGN2L2L",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
