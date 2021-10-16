import React, { createContext,useState } from 'react'

export const  CartContext= createContext();

export const CartProvider=(props)=>{

    const [carrito,setCarrito]=useState([]);

//       const deleteFromCart = (item) => {
//     const deleteProduct = carrito.filter(
//       (item = item.item.id !== item.item.id)
//     );

//     setCarrito([...deleteProduct]);
//   };

    return (
        <CartContext.Provider value={[carrito,setCarrito
        //deleteFromCart
        ]}>
            {props.children}
        </CartContext.Provider>
    )
}

