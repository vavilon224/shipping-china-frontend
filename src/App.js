import HeaderComponent from "./Components/Header/HeaderComponent";
import AppRouter from "./routes/AppRoute";
import {getFirestore} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import './styles/style.scss'
import {FireBaseContextProvider} from "./FirebaseContext";


const firebaseConfig = {
  apiKey: "AIzaSyCm4mCVDEl3bZxNOw_7Ra-WHR9m24HUYrE",
  authDomain: "high-comfort-350011.firebaseapp.com",
  projectId: "high-comfort-350011",
  storageBucket: "high-comfort-350011.appspot.com",
  messagingSenderId: "128286102446",
  appId: "1:128286102446:web:4aee43e05b86c25a976e3f",
  measurementId: "G-KDETWT830F"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

function App() {


  return (
    <FireBaseContextProvider db={db}>
      <div className="app" data-theme='dark' id="app">
        <HeaderComponent/>
        <main className="app__main">
          <AppRouter/>
        </main>
      </div>
    </FireBaseContextProvider>
  );
}

export default App;
