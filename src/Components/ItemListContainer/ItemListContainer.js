import { ItemList } from "./ItemList";
import { velas } from "../Productos/Velas.js";
import React, { useEffect, useState } from "react";

export const ItemListContainer = () => {
  const [velasAromaticas, setVelasAromaticas] = useState([]);

  useEffect(() => {
    const velasAsinc = async () => {
      try {
        const listado = await obtenerVelas();
        setVelasAromaticas(listado);
      } catch (error) {
        console.log("ha ocurrido un error");
      }
    };
    velasAsinc();
  },[]);

  const obtenerVelas = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(velas);
      }, 2000);
    });
  };

  return (
    <div className="ItemListContainer">
      <ItemList producto={velasAromaticas} />
    </div>
  );
};
