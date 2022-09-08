import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import "../ItemCount/ItemCount.css";
import {  useState } from "react";
import {Link} from 'react-router-dom'

export const ItemDetail = ({ detalle, } ) => {

  const  [valorContador, SetValorContador]= useState(0)

  const onAdd= (contador)=>{
SetValorContador(contador)

  }

  
  

  return (
    <div className="detailCard">
      <div className="divImg">
        <img className="imgDetail" src={detalle.imagen} alt="velas pequeñas" />
      </div>
      <div className="divDescripcion">
        <p>Fragancia: {detalle.fragancia}</p>
        <p>Tamaño: {detalle.tamaño}</p>
        <p>Precio: ${detalle.precio}</p>
        <p>{detalle.descripcion}</p>
     {
      valorContador>0?<Link to={'/cart'}><button>Finalizar Compra</button></Link>:<ItemCount initial={0} stock={10} onAdd={onAdd} />
     }
        

      </div>
    </div>
  );
};
