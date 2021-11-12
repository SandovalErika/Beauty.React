import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import Header from "../component/Header";
import Footer from "./Footer";

function Carrito() {
  const { carrito, vaciarCarrito, removeItem, calcularTotal } =
    useContext(CartContext);

  return (
    <>
      <Header />

      {carrito.length === 0 ? (
        <>
          <div className="containerWithoutProduct">
            <div className="emptyCart">
              <h3>No hay productos agregados</h3>
            </div>
            <div>
              <Link to="/" className="btn btn-success btnWithoutProducts">
                Ir a comprar
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container-fluid shoppingCart">
            <h3>Resumen de Compra</h3>
            {carrito &&
              carrito.map((item, index) => {
                return (
                  <ul className="list-group liCount" key={index}>
                    <li className="list-group-item">
                      <div>
                        <h5>{item.title}</h5>
                      </div>
                    </li>
                    <li className="list-group-item ">
                      <div>
                        <div className="detail-img-account">
                          <div>
                            <img src={item.image} width="150px" alt="" />
                            <p> Cantidad: {item.cantidad}</p>
                          </div>

                          <h3>${item.price}</h3>
                        </div>
                        <div className="divDelete">
                          <button
                            type="button"
                            class="btn btn-danger btnCard"
                            onClick={() => removeItem(item.id)}
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                );
              })}
            <h3 className="totalToPay">Total a pagar: ${calcularTotal()}</h3>
            <div className="emptyCart">
              <button
                className="btn btn-danger btnFinalize"
                onClick={vaciarCarrito}
              >
                Vaciar carrito
              </button>
              <Link to="/checkout" class="btn btn-success btnFinalize">
                Finalizar Compra
              </Link>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

export default Carrito;
