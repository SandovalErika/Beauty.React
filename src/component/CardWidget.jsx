import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../CartContext";

export const CardWidget = () => {
  const { calcularCantidad } = useContext(CartContext);

  return (
    <div
      className="cardWidget"
      style={{ visibility: calcularCantidad() === 0 ? "hidden" : "visible" }}
    >
      <FaShoppingCart className="widget" />
      <span className="numberCard">{calcularCantidad()}</span>
    </div>
  );
};
