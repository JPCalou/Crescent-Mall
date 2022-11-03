import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({ productos }) => {
  return (
    <div className="ItemCard">
      <img className="imgVelas" src={productos.imagen} alt="velas pequeñas" />
      <p>{productos.tipo}</p>
      <p>Tamaño: {productos.tamaño}</p>
      <p>Precio: ${productos.precio}</p>
      <Link className="ItemLink" to={`/detail/${productos.id}`}>
        <button className="btnDetalle">Ver detalle</button>
      </Link>
    </div>
  );
};
