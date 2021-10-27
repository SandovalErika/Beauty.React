import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../CartContext";

export const CardWidget = () => {
  const [carrito] = useContext(CartContext);

  return (
    <div className="cardWidget">
      <FaShoppingCart className="widget" />
      <span className="numberCard">{carrito.length}</span>
    </div>
  );
};
