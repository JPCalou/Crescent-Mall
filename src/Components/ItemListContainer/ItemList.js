import './Item.css'
import { Item } from "./Item";
import React,{useEffect,useState} from "react";
import { getProductos } from '../Productos/Velas';
import {useParams} from 'react-router-dom'



export const ItemList = ({producto}) => {
   
  const [velasAromaticas, setVelasAromaticas] = useState([]);
  const {IdCategory} = useParams();
  console.log('IdCategory',IdCategory)
  

  useEffect(() => {
   
    getProductos.then(velas=>{

      const productosFiltrados = velas.filter(item =>item.tipo === IdCategory);
      console.log('productosFiltrados',productosFiltrados)

      setVelasAromaticas(velas)
      // console.log("velas", velasAromaticas)
      
    })
   
  },[IdCategory]);
  return (
    <div className='ItemList'>
        <h1 className='tituloItemList'>Velas</h1>
        <div className="Item">
        {
            velasAromaticas.map((velas)=>{
                return(
                    <Item className="card" vela={velas} key={velas.ID}/>
                   
                )
            })
        }
      </div>
    </div>
  )
}
