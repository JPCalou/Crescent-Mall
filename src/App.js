import "./App.css";
import NavBar from "./Components/NavBar/NavBar.js";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import {CartProvider} from './Components/Contextos/CartContext'
import { CartContainer } from "./Components/CartContainer/CartContainer";

function App() {
  

 

  return (
    <CartProvider>
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/contacto" element={<ItemListContainer />}/>
            <Route path="/category/:IdCategory" element={<ItemListContainer />}/>
            <Route path="/detail/:IdDetail" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<CartContainer/>}/>

          </Routes>
        </header>

        
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
