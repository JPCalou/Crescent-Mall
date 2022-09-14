import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Contextos/CartContext';
import './CartContainer.css'


export const CartContainer = () => {
  const { listaCarrito } = useContext(CartContext);
  const { removeProducto } = useContext(CartContext);
  const { clearCarrito } = useContext(CartContext);

  return (
    <div className="carrito">
      <button onClick={clearCarrito}>Vaciar Carrito</button>
      {listaCarrito.map((item) => (
        <div key={item.ID} className="carritoCard">
          <img src={item.imagen} alt="imagen"></img>
          <p>{item.quantity}</p>
          <p>${item.precio}</p>
          <button
            onClick={() => {
              removeProducto(item.ID);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};
