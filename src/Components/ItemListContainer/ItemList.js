import './Item.css'
import { Item } from "./Item";
import velasPequeñas from "../Imagenes/velasPequeñas.jpg";
import velasMedianas from "../Imagenes/velasMedianas.jpg";
import React, { useState, useEffect } from "react";

const velas = [
    {
      ID: "1",
      fragancia: "Coco y limon",
      imagen: velasPequeñas,
      tamaño: "Pequeña",
      precio: "350",
    },
    {
      ID: "2",
      fragancia: "Coco y limon",
      imagen: velasMedianas,
      tamaño: "Mediana",
      precio: "500",
    },
  ];

export const ItemList = () => {
    const [velasAromaticas, setvelasAromaticas] = useState([]);

    const obtenerVelas = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(velas);
        }, 2000);
      });
    };
  
    useEffect(() => {
      const velasAsinc = async () => {
        try {
          const listado = await obtenerVelas();
          setvelasAromaticas(listado);
        
        } catch (error) {
          console.log("ha ocurrido un error");
        }
      };
      velasAsinc();
    }, []);

  return (
    <div className='ItemList'>
        <h1 className='tituloItemList'>Velas</h1>
        <div className="Item">
        {
            velasAromaticas.map((velas)=>{
                return(
                    <Item className="card" vela={velas}/>
                )
            })
        }
      </div>
        {/* <img src={Velas} alt='Velas Presentacion' className = 'imgLanding'></img> */}
    </div>
  )
}
