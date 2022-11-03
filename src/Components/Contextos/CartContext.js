import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [listaCarrito, setListaCarrito] = useState([]);
  const [cantidadProducto, setCantidadProducto] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);

  const addProducto = (producto, quantity) => {
    const newLista = [...listaCarrito];

    if (isInCart(producto.id)) {
      const productIndex = listaCarrito.findIndex(
        (element) => element.id === producto.id
      );
      newLista[productIndex].quantity =
        newLista[productIndex].quantity + quantity;

      setListaCarrito(newLista);
      cantidadProductoTotal(newLista);
      precioTotalProductos(newLista);
    } else {
      const nuevoProducto = { ...producto, quantity: quantity };
      const newLista = [...listaCarrito, nuevoProducto];
      setListaCarrito(newLista);
      cantidadProductoTotal(newLista);
      precioTotalProductos(newLista);
    }
  };

  const cantidadProductoTotal = (newLista) => {
    const newCantidad = newLista.reduce((acc, curr) => acc + curr.quantity, 0);
    setCantidadProducto(newCantidad);
  };

  const precioTotalProductos = (listaCarrito) => {
    if (listaCarrito === []) {
      debugger;
      setPrecioTotal(0);
    } else {
      const cantidadTotal = listaCarrito.map(
        (item) => parseInt(item.precio) * item.quantity
      );
      const precioFinal = cantidadTotal.reduce((a, b) => a + b);
      setPrecioTotal(precioFinal);
    }
  };

  const isInCart = (IdProducto) => {
    const exist = listaCarrito.some((item) => item.id === IdProducto);
    return exist;
  };

  const removeProducto = (IdProducto) => {
    const nuevoCarrito = listaCarrito.filter((item) => item.id !== IdProducto);
    setListaCarrito(nuevoCarrito);
    cantidadProductoTotal(nuevoCarrito);
    precioTotalProductos(nuevoCarrito);
  };

  const clearCarrito = () => {
    const carritoVacio = [];
    setListaCarrito(carritoVacio);
    setCantidadProducto(0);
    setPrecioTotal(0);
  };

  return (
    <CartContext.Provider
      value={{
        cantidadProducto,
        precioTotal,
        listaCarrito,
        isInCart,
        addProducto,
        removeProducto,
        clearCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
