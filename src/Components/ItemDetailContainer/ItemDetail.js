import './ItemDetail.css'



export const ItemDetail= ({detalle})=>{


    return(
        
        <div className="detailCard">
        {/* <img className="imgDetail" src={detalle.imagen} alt="velas pequeñas" /> */}
        <p>Fragancia: {detalle.fragancia}</p>
        <p>Tamaño: {detalle.tamaño}</p>
        <p>Precio: ${detalle.precio}</p>
        {/* <ItemCount stock={10} initial={1} agregarProducto={onAdd} /> */}
      </div>
        
        // console.log("aun no funciona", detalle)
    )
   
}

