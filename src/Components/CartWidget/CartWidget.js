import React from "react";
import { BsHandbagFill } from "react-icons/bs";
import './CartWidget.css';
import {Link} from 'react-router-dom'
import { CartContext } from '../Contextos/CartContext';
import {useContext} from 'react'

function CartWidget(){
    const {cantidadProducto}= useContext(CartContext)
    return(
        <div className="logo-carrito">
        <Link to={'/cart'}><BsHandbagFill className="cart"></BsHandbagFill >{cantidadProducto>0? <sup>{cantidadProducto}</sup>:<sup></sup>}</Link>
        </div>
    )
}

export default CartWidget;