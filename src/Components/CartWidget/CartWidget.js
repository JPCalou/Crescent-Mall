import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import './CartWidget.css';
import {Link} from 'react-router-dom'

function CartWidget(){
    return(
        
        <Link to={'/cart'}><BsFillCartFill className="cart"  /></Link>
        
    )
}

export default CartWidget;