import "./App.css";
import NavBar from "./Components/NavBar/NavBar.js";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemCount } from "./Components/ItemCount/ItemCount";
import Swal from "sweetalert2";

function App() {
  const onAdd = (contador) => {
    Swal.fire({
      title: "Agregado",
      text: "Usted ha agregado " + contador + " productos al carrito",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });

    // alert("Haz agregado "+contador+" productos!")
  };

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <ItemListContainer />

      <ItemCount stock={10} initial={1} agregarProducto={onAdd} />
    </div>
  );
}

export default App;
