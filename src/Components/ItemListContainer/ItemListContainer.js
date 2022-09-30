import { ItemList } from "./ItemList";
import "./ItemListContainer.css";
// import { getProductos } from "../Productos/Velas";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import {collection,getDocs} from 'firebase/firestore'
import dataBase from "../../utils/firebase";
import Spinner from 'react-bootstrap/Spinner';



export const ItemListContainer = () => {
  const [velasAromaticas, setVelasAromaticas] = useState([]);
  const [loading, setLoading]= useState(false)
  const params = useParams();



  useEffect(()=>{
    const getProductos = async () => {
      setLoading(true)
      const query = collection(dataBase, "Productos");
      const response = await getDocs(query);
      const docs = response.docs;
      const data = docs.map((doc) => {
        setLoading(false)
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
    <>
   { loading&& <Spinner animation="grow" />}
    <div className="ItemListContainer">
      <ItemList velasAromaticas={velasAromaticas} />
    </div>
    </>
  );
};
