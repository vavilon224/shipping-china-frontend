import HeaderComponent from "./Components/Header/HeaderComponent";
import AppRouter from "./routes/AppRoute";
import './styles/style.scss'

function App() {
  return (
    <div className="app" id="app">
      <HeaderComponent/>
      <main className="app__main">
        <AppRouter/>
      </main>
    </div>
  );
}

export default App;
