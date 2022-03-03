import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCEuqwYl_d_GzFfc-yyPGqQ4rhm1P1qnww",
  authDomain: "animedata-2b628.firebaseapp.com",
  projectId: "animedata-2b628",
  storageBucket: "animedata-2b628.appspot.com",
  messagingSenderId: "91050438693",
  appId: "1:91050438693:web:d9d787c76773bd22e04fcc"
};



const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
