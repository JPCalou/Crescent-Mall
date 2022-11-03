import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Contextos/CartContext";
import "./CartContainer.css";
import { Link } from "react-router-dom";
import dataBase from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Formulario } from "../Formulario/Formulario";
import { DetalleDeCompra } from "../Modal/Modal";

export const CartContainer = () => {
  const { listaCarrito, precioTotal, removeProducto, clearCarrito } =
    useContext(CartContext);
  const [ordenId, setOrdenId] = useState("");
  const [show, setShow] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorCarrito, setErrorCarrito] = useState(false);

  const handleClose = () =>{
    setShow(false);
    clearCarrito()
  } 
  

  const fecha = new Date();

  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const fechaActualizada = `${
    diasSemana[fecha.getDay()]
  } ${fecha.getDate()} de ${
    meses[fecha.getMonth()]
  } de ${fecha.getFullYear()} a las hs ${fecha.getHours()}:${fecha.getMinutes()}`;

  const sendOrder = (e) => {
    e.preventDefault();
    const orden = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value,
      },
      items: listaCarrito,
      fecha: fechaActualizada,
      Total: precioTotal,
    };
    if (
      orden.buyer.name !== "" &&
      orden.buyer.phone !== "" &&
      orden.buyer.email !== ""
    ) {
      const queryRef = collection(dataBase, "ordenes");
      console.log(queryRef, orden);
      addDoc(queryRef, orden).then((response) => {
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        
        setOrdenId(response.id);
        setShow(true);
        setSubmitError(false);
        setErrorCarrito(false);
      });
    } else if (listaCarrito.length === 0) {
      setErrorCarrito(true);
    } else {
      setSubmitError(true);
    }
  };

  return (
    <div className="carrito">
      {listaCarrito.length === 0 ? (
        <Link className="text-decoration-none" to={"/productos"}>
          <h3>Agrega un producto</h3>
        </Link>
      ) : (
        listaCarrito.map((item) => (
          <>
            <div key={item.id} className="carritoCard">
              <img
                className="img-producto"
                src={item.imagen}
                alt="imagen"
              ></img>
              <p>{item.quantity}</p>
              <p>${item.precio * item.quantity}</p>
              <button className="btnEliminar" onClick={() => {removeProducto(item.id);}}>{" "}Eliminar
              </button>
            </div>
          </>
        ))
      )}

      {listaCarrito.length > 0 ? (
        <>
          <p>Precio Total: ${precioTotal}</p>
          <button onClick={clearCarrito}>Vaciar Carrito</button>
        </>
      ) : (
        <p></p>
      )}

      {errorCarrito && <p className="errorCarrito">El carrito esta vacio</p>}
      <hr></hr>
      {listaCarrito.length === 0 ? (<p></p>):(<div>
        

        <Formulario orden={(e) => sendOrder(e)} />
        </div>)}
        
      
      {submitError && (
        <p className="errorForm">Por favor complete el formulario</p>
      )}

      {show && (
        <DetalleDeCompra
          close={handleClose}
          open={show}
          orderId={ordenId}
          fechaActualizada={fechaActualizada}
          precioTotal={precioTotal}
          
        />
      )}
    </div>
  );
};
