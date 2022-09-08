import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";



export const Item = ({ vela }) => {


  return (
    <div className="ItemCard">
      <img className="imgVelas" src={vela.imagen} alt="velas pequeñas" />
      <p>{vela.tipo}</p>
      <p>Tamaño: {vela.tamaño}</p>
      <p>Precio: ${vela.precio}</p>
      <Link className="ItemLink" to={`/detail/${vela.ID}`}>
        <button className="btnDetalle">Ver detalle</button>
      </Link>
    </div>
  );
};
