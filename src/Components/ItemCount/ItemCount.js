import { useState } from "react";
import './ItemCount.css';
import React from 'react';




export const ItemCount = ({stock, initial, agregarProducto})=>{
const [contador, setContador ] = useState(initial);

const sumar = ()=>{
     if (contador < stock){
        setContador (contador + 1)
    }
}

const restar = ()=>{
    if(contador > 1){
        setContador(contador - 1)
    }
   
}


return(
    <div className="cantidadProd">
        <button className="btnSuma" id="btnRestar" onClick={restar}> - </button>
        <p className="contador">{contador}</p>
        <button className="btnSuma" onClick={sumar}> + </button>
        <button className="btnAgregar" onClick={()=>(agregarProducto(contador))}>Agregar</button>
       
    </div>
)

}