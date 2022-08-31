import React from "react";
import "./Item.css";

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
      <p>Fragancia: {vela.fragancia}</p>
      <p>Tamaño: {vela.tamaño}</p>
      <p>Precio: ${vela.precio}</p>
      {/* <ItemCount stock={10} initial={1} agregarProducto={onAdd} /> */}
    </div>
  );
};
