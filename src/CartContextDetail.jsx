// import React, { createContext, useContext, useState } from "react";
// import { CartContext } from "./CartContext";

// export const CartContextDetail = createContext();

// export const CartProvider = (props) => {
//   const [carrito, setcarrito] = useState(init);

//   const calcularCantidad = () => {
//     carrito.reduce((total, item) => {
//       return total + item.cantidad;
//     }, 0);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         carrito,
//         calcularCantidad,
//       }}
//     >
//       {props.children}
//     </CartContext.Provider>
//   );
// };
