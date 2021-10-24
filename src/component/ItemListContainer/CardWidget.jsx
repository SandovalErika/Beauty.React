import React, { useContext } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { CartContext } from '../../CartContext';

export const CardWidget = () => {


    // const {calcularCantidad} = useContext(CartContext);

    
    return (
        <div className="cardWidget">
            <FaShoppingCart className='widget'/>
            <span className='numberCard'></span>0
        </div>
    )
}
