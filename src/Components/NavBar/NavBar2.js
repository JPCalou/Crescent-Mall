
import "./NavBar2.css";
import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

function NavBar2() {
  return (
    <nav className="menuCSS3">
      <div className="rutas">
       
        <ul>
          <li>
            <Link to={"/"}>Nosotros</Link>
          </li>
          <li>
            <Link to={"/Productos"}>Productos</Link>
            <ul>
              <li>
                <Link to={"/category/Vela"}>Velas</Link>
              </li>
              <li>
                <Link to={"/category/Aromatizador"}>Aromatizadores</Link>
              </li>
              <li>
                <Link to={"/category/Difusor"}> Difusores</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to={"/contacto"}>Contacto</Link>
          </li>
        </ul>
      </div>
      <h1>Cerscent</h1>
      <CartWidget />
    </nav>
  );
}

export default NavBar2;
