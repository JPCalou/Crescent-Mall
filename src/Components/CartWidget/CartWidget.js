import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import './CartWidget.css';
import {Link} from 'react-router-dom'
import { CartContext } from '../Contextos/CartContext';
import {useContext} from 'react'

function CartWidget(){
    const {cantidadProducto}= useContext(CartContext)
    return(
        <div>
        <Link to={'/cart'}><BsFillCartFill className="cart"></BsFillCartFill ></Link>{cantidadProducto>0? <p>{cantidadProducto}</p>:<p></p>}
        </div>
    )
}

export default CartWidget;