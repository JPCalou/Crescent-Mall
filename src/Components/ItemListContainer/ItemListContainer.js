import { ItemList } from "./ItemList";
import "./ItemListContainer.css";
import { getProductos } from "../Productos/Velas";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";



export const ItemListContainer = () => {
  const [velasAromaticas, setVelasAromaticas] = useState([]);
  const params = useParams();

  useEffect(()=>{
    getProductos.then((velas)=>{
      if(params.IdCategory=== undefined){
        setVelasAromaticas(velas)
      }else{
        const filtro = velas.filter((item) => item.tipo === params.IdCategory);

        setVelasAromaticas(filtro);

      }

    })

  },[params])
  return (
    <div className="ItemListContainer">
      <ItemList velasAromaticas={velasAromaticas} />
    </div>
  );
};
