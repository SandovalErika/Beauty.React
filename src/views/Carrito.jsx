import React, { useContext, useEffect, useState } from "react";
import { CartContext, CartProvider } from "../CartContext";
import Header from "../component/Header";
import ItemCount from "../component/ItemListContainer/ItemCount";
import pedirProductos from "../component/ItemListContainer/pedirProductos";
// import deleteFromCart from '../CartContext'

import Navbar from "../component/Navbar";

function Carrito() {
  const [carrito, setCarrito] = useContext(CartContext);

  const [cantidad, setCantidad] = useState(0);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let tot = 0;
    carrito.map((item) => {
      tot = item.cantidad * item.price;
    });

    setTotal(tot);

    if (tot === NaN) {
      setTotal(0);
    }

    // carrito.map(()=>{

    //     carrito.map((item)=>{
    //       tot = tot - item.price

    // });

    // setTotal(newPrice)
  }, []);

  const deleteFromCart = (id) => {
    const newCart = carrito.filter((item) => item.id !== id);

    setCarrito(newCart);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <>
      <Header />

      <div className="container shoppingCart">
        {carrito &&
          carrito.map((item, index) => {
            return (
              <ul className="list-group liCount" key={index}>
                <li className="list-group-item ">
                  <div>
                    <div className="detail-img-account">
                      <img src={item.image} width="100px" alt="" />
                      <h3>${item.price}</h3>
                      {/* <p>Cantidad: {cantidad}</p> */}
                    </div>
                    <div className="divDelete">
                      {/* {carrito.map((item) => (
                                    <div key={item.id}>
                                    <h2>{item.item.name}</h2>

                                    <button type="button" class="btn btn-danger btnCard" onClick={() => deleteFromCart(item)}><i className='material-icons'>close</i></button>
                                    </div>
                                ))} */}

                      {/* <button type="button" class="btn btn-primary btnCard"></button>   */}
                      <button
                        type="button"
                        class="btn btn-danger btnCard"
                        onClick={() => deleteFromCart(item.id)}
                      >
                        {/* <i className='material-icons'>close</i> */}
                        Eliminar
                      </button>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">{item.title}</li>

                {/* <li className="list-group-item"><p>Precio: {item.price * cantidad}</p></li> */}
              </ul>
            );
          })}
        <h3>Total a pagar: ${total}</h3>
        <div className="emptyCart">
          <button className="btn btn-danger " onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
        </div>

        <button type="button" class="btn btn-secondary btnFinalize">
          <h4>Finalizar Compra</h4>
        </button>
      </div>
    </>
  );
}

export default Carrito;
