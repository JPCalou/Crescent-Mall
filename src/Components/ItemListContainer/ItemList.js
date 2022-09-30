import "./Item.css";
import { Item } from "./Item";


export const ItemList = ({ velasAromaticas}) => {
  

  return (
    <div className="ItemList">
      <h1 className="tituloItemList">Productos</h1>
      <div className="Item">
        {velasAromaticas.map((velas) => {
          return <Item className="card" productos={velas} key={velas.id} />;
        })}
      </div>
    </div>
  );
};
