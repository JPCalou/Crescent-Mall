import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Contextos/CartContext';
import './CartContainer.css';
import {Link} from 'react-router-dom'


export const CartContainer = () => {
  const { listaCarrito,precioTotal } = useContext(CartContext);
  const { removeProducto } = useContext(CartContext);
  const { clearCarrito } = useContext(CartContext);

  

  return (

    <div className="carrito">


      {listaCarrito.length ===0?<Link className='text-decoration-none' to={'/'}><h3 >Agrega un producto</h3></Link>:
       listaCarrito.map((item) => (
        <div key={item.ID} className="carritoCard">
          <img src={item.imagen} alt="imagen"></img>
          <p>{item.quantity}</p>
          <p>${item.precio * item.quantity}</p>
          <button
            onClick={() => {
              removeProducto(item.ID);
              
            }}
          >
            X
          </button>
        </div>
      )) }
      <p>Precio Total: ${precioTotal}</p>
      <button onClick={clearCarrito}>Vaciar Carrito</button>
    </div>
  );
};
