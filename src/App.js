import "./App.css";
import NavBar2 from "./Components/NavBar/NavBar2.js";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import {CartProvider} from './Components/Contextos/CartContext'
import { CartContainer } from "./Components/CartContainer/CartContainer";
import {Contacto} from "./Components/Contacto/Contacto";
import {Nosotros} from "./Components/Nosotros/Nosotros"

function App() {
  

 

  return (
    <CartProvider>
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar2 />
          <Routes>
            <Route path="/productos" element={<ItemListContainer />}/>
            <Route path="/" element={<Nosotros />}/>
            <Route path="/contacto" element={<Contacto />}/>
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
