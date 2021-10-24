import React, { useContext } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { CartContext } from '../../CartContext';

export const CardWidget = () => {


    

    
    return (
        <div className="cardWidget">
            <FaShoppingCart className='widget'/>
            <span className='numberCard'>0</span>
        </div>
    )
}
