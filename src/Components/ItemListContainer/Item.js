import React from 'react';
import './Item.css'


export const Item = ({vela}) => {
  return (
    <div className='ItemCard'>
        <img className='imgVelas' src={vela.imagen} alt='velas pequeñas'/>
        <p>Fragancia: {vela.fragancia}</p>
        <p>Tamaño: {vela.tamaño}</p>
        <p>Precio: ${vela.precio}</p>
    </div>
  )
}
