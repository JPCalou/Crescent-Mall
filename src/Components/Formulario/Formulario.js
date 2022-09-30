import React from 'react';
import '../CartContainer/CartContainer.css';

export const Formulario = ({orden}) => {
  return (
    <div>
         <form onSubmit={orden}>
        <input type="text" placeholder='Nombre'></input>
        <input type= "number" placeholder='Telefono'></input>
        <input type = "email" placeholder='Email'></input>
        <button type= "submit" >Comprar</button>
      </form>

     
    </div>
  )
}
