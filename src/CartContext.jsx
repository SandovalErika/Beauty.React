import React, { createContext, useState } from 'react'
import Detalle from './views/Detalle';

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [carrito, setCarrito] = useState([]);
    

    
    // console.log(carrito);
   
    // const calcularCantidad = () => {
    //   return carrito.reduce( (acc, prod) => acc + 5,  0 )
    // }

    //       const deleteFromCart = (item) => {
    //     const deleteProduct = carrito.filter(
    //       (item = item.item.id !== item.item.id)
    //     );

    //     setCarrito([...deleteProduct]);
    //   };
    

    return (
        <CartContext.Provider value={[carrito, setCarrito]
            //deleteFromCart
        }>
        
            {props.children}
        </CartContext.Provider>
    )
}

