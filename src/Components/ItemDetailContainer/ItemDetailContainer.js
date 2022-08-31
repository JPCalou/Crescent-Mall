import { useEffect, useState } from "react"
import { getVelas } from "../Productos/Velas"
import {ItemDetail} from './ItemDetail'
import "./ItemDetail.css";


export const ItemDetailContainer = ()=>{
const [detalle,setDetalle]= useState({})

useEffect(()=>{
    setTimeout(()=>{
        getVelas.then(response=>{
            setDetalle(response.find(producto=>producto.ID==="1"))
        })
    },3000)
   
    
        // const promesa = new Promise((resolve, reject) => {
        //     setTimeout(()=>{
        //         resolve(velas.find(producto=>producto.ID=== "1"))
        //         setDetalle(promesa)
        //     },1000)
    
        //    })
       
},[])

// const obtenerProducto = ()=>{
    
// }

return(
    // console.log("funciona",detalle)
    <div className="ItemDetailContainer">
<ItemDetail detalle={detalle}/>
    </div>
    

)

}

