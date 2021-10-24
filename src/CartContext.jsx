import React, { createContext, useState } from 'react'
import Detalle from './views/Detalle';

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [carrito, setCarrito] = useState([]);
   
    <Detalle/>

    //       const deleteFromCart = (item) => {
    //     const deleteProduct = carrito.filter(
    //       (item = item.item.id !== item.item.id)
    //     );

    //     setCarrito([...deleteProduct]);
    //   };

    return (
        <CartContext.Provider value={[carrito, setCarrito
            //deleteFromCart
        ]} Detalle>
            {props.children}
        </CartContext.Provider>
    )
}

