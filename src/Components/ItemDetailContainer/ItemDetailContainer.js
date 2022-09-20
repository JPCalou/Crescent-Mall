import { useEffect, useState } from "react";
// import { getProductos } from "../Productos/Velas";
import { ItemDetail } from "./ItemDetail";
import "./ItemDetail.css";
import { useParams } from "react-router-dom";
import {doc,getDoc } from 'firebase/firestore'
import dataBase from "../../utils/firebase";

export const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});

  const params = useParams();
  

  // useEffect(() => {
  //   setTimeout(() => {
  //     getProductos.then((response) => {
  //       setDetalle(
  //         response.find((producto) => producto.ID === params.IdDetail)
  //       );
  //     });
  //   }, 3000);
  // }, [params.IdDetail]);
useEffect(()=>{
 const getDocument= async ()=>{
  const query = doc(dataBase, "Productos", params.IdDetail)
  const response = await getDoc(query);
  const prod = { ...response.data(),  id: response.id }
  setDetalle(prod)
  
  }
  getDocument()

},[params])
  return (
    <div className="ItemDetailContainer">
      <ItemDetail detalle={detalle} />
    </div>
  );
};
