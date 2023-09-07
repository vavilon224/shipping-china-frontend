import HeaderComponent from "./Components/Header/HeaderComponent";
import AppRouter from "./routes/AppRoute";
import './styles/style.scss'
import {getFirestore} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);

function App() {

  console.log(db)
  return (
    <div className="app" data-theme='dark' id="app">
      <HeaderComponent/>
      <main className="app__main">
        <AppRouter/>
      </main>
    </div>
  );
}

export default App;
