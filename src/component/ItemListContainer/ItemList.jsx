import React from "react";
import Item from "./Item";

const ItemList = ({ productos = [] }) => {
  return (
    <div className="container welcome">
      <h2>Bienvenidos a Beauty Commerce</h2>
      <hr />

      <div className="row containerCard">
        {productos.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
