import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../Contextos/CartContext';
import './CartContainer.css';
import {Link} from 'react-router-dom';
import dataBase from '../../utils/firebase';
import { collection,addDoc } from 'firebase/firestore';


export const CartContainer = () => {
  const { listaCarrito,precioTotal,removeProducto,clearCarrito } = useContext(CartContext);
 const [ordenId, setOrdenId]= useState("")
 const fecha= new Date();
const diasSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
const fechaActualizada = `${diasSemana[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()} a las hs ${fecha.getHours()}:${fecha.getMinutes()}`

// console.log(`${diasSemana[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()} a las hs ${fecha.getHours()}:${fecha.getMinutes()}`)

  const sendOrder= (e)=>{
    e.preventDefault();
    const orden = {
      buyer : {name:e.target[0].value, phone:e.target[1].value , email: e.target[2].value},
      items:listaCarrito,
      fecha: fechaActualizada,
      Total: precioTotal
    }
    const queryRef = collection(dataBase, "ordenes");
    addDoc(queryRef, orden).then(response=>setOrdenId(response.id))
    console.log(ordenId)

 

    console.log(orden)
  }

  // const detallesDeCompra= ()=>{
  //   debugger
  //   return(
     
  //   )
  // }


 
  

  

  return (

    <div className="carrito">


      {listaCarrito.length ===0?<Link className='text-decoration-none' to={'/'}><h3 >Agrega un producto</h3></Link>:
       listaCarrito.map((item) => (
        <div key={item.id} className="carritoCard">
          <img src={item.imagen} alt="imagen"></img>
          <p>{item.quantity}</p>
          <p>${item.precio * item.quantity}</p>
          <button
            onClick={() => {
              removeProducto(item.id);
              
            }}
          >
            X
          </button>
        </div>
      )) }
      <p>Precio Total: ${precioTotal}</p>
      <button onClick={clearCarrito}>Vaciar Carrito</button>
      <hr></hr>
      <h2>Completa el formulario para finalizar la compra</h2>
      <hr></hr>

      <form onSubmit={sendOrder}>
        <input type="text" placeholder='Nombre'></input>
        <input type= "number" placeholder='Telefono'></input>
        <input type = "email" placeholder='Email'></input>
        <button type= "submit" >Comprar</button>
      </form>
      <hr></hr>
      <h4>Detalle de Compra</h4>
      <p>Puedes retirar tu compra con los siguientes datos:</p>
      <table>
        <tr>
          <td>Fecha</td>
          <td>{fechaActualizada}</td>
        </tr>
        <tr>
          <td>Importe</td>
          <td>${precioTotal}</td>
          </tr>
        <tr>
          <td>Nro de orden</td>
          <td>{ordenId}</td>
          </tr>
      </table>
    </div>
  );
};
