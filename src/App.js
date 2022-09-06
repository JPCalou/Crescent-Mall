import "./App.css";
import NavBar from "./Components/NavBar/NavBar.js";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemList } from "./Components/ItemListContainer/ItemList";
// import {ItemDetailContainer} from './Components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
function App() {
  

 

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/contacto" element={<ItemListContainer />}/>
            <Route path="/category/:IdCategory" element={<ItemList />}/>
            <Route path="/detail/:IdDetail" element={<ItemDetailContainer />}/>

          </Routes>
        </header>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
