import { createContext } from "react";

import { useState } from "react";

export const CartContext = createContext();


export const CartProvider = ({children})=>{

  const[listaCarrito,setListaCarrito]= useState([]);
  console.log("listacarrito", listaCarrito)
    
    // const addProducto = (producto, quantity) => {
      
    //   const nuevoProducto = {...producto, quantity }
    //   setListaCarrito([...listaCarrito,nuevoProducto])
      
    // };
      


    const addProducto = (producto, quantity) =>{
       
        const newLista = [...listaCarrito];
        if(isInCart(producto.ID)){
            const productIndex = listaCarrito.findIndex(element =>element.ID === producto.ID);
            newLista[productIndex].quantity = newLista[productIndex].quantity + quantity;
            console.log(newLista)
            setListaCarrito(newLista)
        }else{
            const nuevoProducto = {...producto,quantity:quantity}
            const newLista = [...listaCarrito, nuevoProducto]
            setListaCarrito(newLista)
            
        }
        // console.log("listacarrito", listaCarrito)
    }
   
       
    

    const isInCart = (IdProducto)=>{
        const exist = listaCarrito.some((item)=>item.ID ===IdProducto)
        return exist
        
     
         }
        
    

    const removeProducto= (IdProducto)=>{
        
       const nuevoCarrito = listaCarrito.filter((item)=>item.ID !== IdProducto)
       setListaCarrito(nuevoCarrito)

    }

    const clearCarrito = ()=>{
        
        setListaCarrito([])
    }



    return(
       <CartContext.Provider  value={{listaCarrito,isInCart, addProducto, removeProducto, clearCarrito}}>
        {children}
       </CartContext.Provider>
    )
}

