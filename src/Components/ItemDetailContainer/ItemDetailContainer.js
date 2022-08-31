import { ItemDetail } from "./ItemDetail";
import { useState,useEffect } from "react";
import { velas } from "../Productos/Velas";


export const ItemDetailContainer= ()=>{
    const [detalle, setDetalle] = useState()

  

    useEffect(() => {

        const obtenerVelas = () => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve(velas.find(producto => producto.ID === '1'));
              }, 2000);
              
            });
          };
          setDetalle(obtenerVelas)
        // const detalleAsync = async () => {
        //   try {
        //     const data = await obtenerVelas();
        //     setDetalle(data);
        //   } catch (error) {
        //     console.log("ha ocurrido un error");
        //   }
        // };
        // detalleAsync();
      },[]);

    

    
    return(
        <div>
            <ItemDetail detalle={detalle} />
        </div>
       
          
        
       
    )

   

}