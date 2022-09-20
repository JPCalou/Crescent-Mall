import { ItemList } from "./ItemList";
import "./ItemListContainer.css";
// import { getProductos } from "../Productos/Velas";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import {collection,getDocs} from 'firebase/firestore'
import dataBase from "../../utils/firebase";



export const ItemListContainer = () => {
  const [velasAromaticas, setVelasAromaticas] = useState([]);
  const params = useParams();

  // useEffect(()=>{
  //   getProductos.then((velas)=>{
  //     if(params.IdCategory=== undefined){
  //       setVelasAromaticas(velas)
  //     }else{
  //       const filtro = velas.filter((item) => item.tipo === params.IdCategory);

  //       setVelasAromaticas(filtro);

  //     }

  //   })

  // },[params])
  useEffect(()=>{
    const getProductos = async () => {
      const query = collection(dataBase, "Productos");
      const response = await getDocs(query);
      const docs = response.docs;
      const data = docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      if (params.IdCategory === undefined) {
        setVelasAromaticas(data);
      } else {
        const filtro = data.filter((item) => item.tipo === params.IdCategory);

        setVelasAromaticas(filtro);
      }
    };
      getProductos()
      
  },[params])
  return (
    <div className="ItemListContainer">
      <ItemList velasAromaticas={velasAromaticas} />
    </div>
  );
};
