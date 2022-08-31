import './Item.css'
import { Item } from "./Item";
import React from "react";



export const ItemList = ({producto}) => {
   

   
  
 

  return (
    <div className='ItemList'>
        <h1 className='tituloItemList'>Velas</h1>
        <div className="Item">
        {
            producto.map((velas)=>{
                return(
                    <Item className="card" vela={velas} key={velas.ID}/>
                   
                )
            })
        }
      </div>
        {/* <img src={Velas} alt='Velas Presentacion' className = 'imgLanding'></img> */}
    </div>
  )
}
