import { useEffect, useState } from "react";
import { getProductos } from "../Productos/Velas";
import { ItemDetail } from "./ItemDetail";
import "./ItemDetail.css";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});

  const params = useParams();

  useEffect(() => {
    setTimeout(() => {
      getProductos.then((response) => {
        setDetalle(
          response.find((producto) => producto.ID === params.IdDetail)
        );
      });
    }, 3000);
  }, []);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail detalle={detalle} />
    </div>
  );
};
