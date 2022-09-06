import "./ItemDetail.css";

export const ItemDetail = ({ detalle }) => {
  return (
    <div className="detailCard">
      <div className="divImg">
        <img className="imgDetail" src={detalle.imagen} alt="velas pequeñas" />
      </div>
      <div className="divDescripcion">
        <p>Fragancia: {detalle.fragancia}</p>
        <p>Tamaño: {detalle.tamaño}</p>
        <p>Precio: ${detalle.precio}</p>
        <p>{detalle.descripcion}</p>
      </div>
    </div>
  );
};
