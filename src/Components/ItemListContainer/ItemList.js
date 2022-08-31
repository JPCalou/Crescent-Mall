import './Item.css'
import { Item } from "./Item";
import React,{useEffect,useState} from "react";
import { getVelas } from '../Productos/Velas';



export const ItemList = ({producto}) => {
   
  const [velasAromaticas, setVelasAromaticas] = useState([]);

  useEffect(() => {
    getVelas.then(velas=>{
      setVelasAromaticas(velas)
    })
    // const velasAsinc = async () => {
    //   try {
    //     const listado = await obtenerVelas();
    //     setVelasAromaticas(listado);
    //   } catch (error) {
    //     console.log("ha ocurrido un error");
    //   }
    // };
    // velasAsinc();
  },[]);

  // const obtenerVelas = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(velas);
  //     }, 2000);
  //   });
  // };
   
  
 

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
        {/* <img src={Velas} alt='Velas Presentacion' className = 'imgLanding'></img> */}
    </div>
  )
}
