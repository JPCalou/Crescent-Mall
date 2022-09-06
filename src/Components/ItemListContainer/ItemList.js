import "./Item.css";
import { Item } from "./Item";
import React, { useEffect, useState } from "react";
import { getProductos } from "../Productos/Velas";
import { useParams } from "react-router-dom";

export const ItemList = ({ producto }) => {
  const [velasAromaticas, setVelasAromaticas] = useState([]);
  const params = useParams();

  useEffect(() => {
    getProductos.then((velas) => {
      if (params.IdCategory === undefined) {
        setVelasAromaticas(velas);
      } else {
        const filtro = velas.filter((item) => item.tipo === params.IdCategory);

        setVelasAromaticas(filtro);
      }
    });
  }, [params]);
  return (
    <div className="ItemList">
      <h1 className="tituloItemList">Productos</h1>
      <div className="Item">
        {velasAromaticas.map((velas) => {
          return <Item className="card" vela={velas} key={velas.ID} />;
        })}
      </div>
    </div>
  );
};
