import React, { createContext, useState } from "react";
import Detalle from "./views/Detalle";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [carrito, setCarrito] = useState([]);

  return (
    <CartContext.Provider value={[carrito, setCarrito]}>
      {props.children}
    </CartContext.Provider>
  );
};
