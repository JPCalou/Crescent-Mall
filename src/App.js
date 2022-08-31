import "./App.css";
import NavBar from "./Components/NavBar/NavBar.js";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from './Components/ItemDetailContainer/ItemDetailContainer'

function App() {
  

 

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <ItemListContainer />
      <ItemDetailContainer/>
     
    
    </div>
  );
}

export default App;
