import { ItemList } from "./ItemList";
import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import dataBase from "../../utils/firebase";



export const ItemListContainer = () => {
  const [velasAromaticas, setVelasAromaticas] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const getProductos = async () => {
      setLoading(true);
      const query = collection(dataBase, "Productos");
      const response = await getDocs(query);
      const docs = response.docs;
      const data = docs.map((doc) => {
        setLoading(false);
        return { ...doc.data(), id: doc.id };
      });
      if (params.IdCategory === undefined) {
        setVelasAromaticas(data);
      } else {
        const filtro = data.filter((item) => item.tipo === params.IdCategory);

        setVelasAromaticas(filtro);
      }
    };
    getProductos();
  }, [params]);
  return (
    <div>
      <div className="loading">
        {loading && (
          <lord-icon
            src="https://cdn.lordicon.com/flcinbhn.json"
            trigger="loop"
            delay="500"
            colors="primary:#8f975d,secondary:#cb5eee"
          ></lord-icon>
        )}
      </div>

      <div className="ItemListContainer">
        <ItemList velasAromaticas={velasAromaticas} />
      </div>
    </div>
  );
};
