import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

// import Swal from "sweetalert2";

export const Item = ({ vela }) => {
  // const onAdd = (contador) => {
  //   Swal.fire({
  //     title: "Agregado",
  //     text: "Usted ha agregado " + contador + " productos al carrito",
  //     imageUrl: "https://unsplash.it/400/200",
  //     imageWidth: 400,
  //     imageHeight: 200,
  //     imageAlt: "Custom image",
  //   }); // alert("Haz agregado "+contador+" productos!")
  // };

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
