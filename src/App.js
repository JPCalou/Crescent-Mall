
import './App.css';
import NavBar from './Components/NavBar/NavBar.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <body> 
      
    <div className="App">
              
        <NavBar/>
        <ItemListContainer titulo="Crescent" slogan="Bienestar en tu hogar"/>
        
        
          
    </div>
    </body>
  );
}

export default App;
