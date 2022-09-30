import { useEffect, useState } from "react";
// import { getProductos } from "../Productos/Velas";
import { ItemDetail } from "./ItemDetail";
import "./ItemDetail.css";
import { useParams } from "react-router-dom";
import {doc,getDoc } from 'firebase/firestore'
import dataBase from "../../utils/firebase";
import Spinner from 'react-bootstrap/Spinner';

export const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const [loading, setLoading]= useState(false)
  const params = useParams();
  

 
 
useEffect(()=>{
  setLoading(true)
 const getDocument= async ()=>{
  const query = doc(dataBase, "Productos", params.IdDetail)
  const response = await getDoc(query);
  setLoading(false)
  const prod = { ...response.data(),  id: response.id }
  setDetalle(prod)
  
  }
  getDocument()

},[params])
  return (
    <>
    { loading&& <Spinner animation="grow" />}
    <div className="ItemDetailContainer">
      <ItemDetail detalle={detalle} />
    </div>
    </>
  );
};
