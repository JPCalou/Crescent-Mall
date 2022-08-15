import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Crescent Mall</h1>
        <NavBar></NavBar>
        <img src={logo} className="App-logo" alt="logo" />
      
      
      </header>
    </div>
  );
}

export default App;
