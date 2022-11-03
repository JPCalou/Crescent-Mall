import React from 'react';
import '../CartContainer/CartContainer.css';

export const Formulario = ({orden}) => {
  return (
    <div className='div-form'>
      <h2>Completa el formulario para finalizar la compra</h2>
      <hr></hr>
         <form onSubmit={orden}>
        <input type="text" placeholder='Nombre'></input>
        <input type= "number" placeholder='Telefono'></input>
        <input type = "email" placeholder='Email'></input>
        <button type= "submit" >Comprar</button>
      </form>

     
    </div>
  )
}
