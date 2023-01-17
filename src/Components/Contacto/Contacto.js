import React from 'react'
import './Contacto.css'



export const Contacto = () => {
  return (
    <div className='div-contacto'>

         <h1>Contacto</h1>
    <div className='form-contacto'>
        <form >
            <input type={"text"} placeholder={"Nombre"}></input>
            <input type={"email"} placeholder={"Email"}></input>
            <textarea></textarea>
            <button type='submit' >Enviar</button>
        </form>
    </div>
    </div>

  )
}
