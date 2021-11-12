import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import Header from "../component/Header";
import ItemCount from "../component/ItemListContainer/ItemCount";
import { getFirestore } from "../firebase/config";

function Detalle(props) {
  const [datos, setDatos] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const { goBack, push } = useHistory();

  const { carrito, setCarrito } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(0);
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const productos = db.collection("productos");
    const datos = productos.doc(id);

    datos
      .get()
      .then((doc) => {
        setDatos({ id: doc.id, ...doc.data() });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id, setLoading]);

  const addToCart = () => {
    const newItem = {
      id: datos.id,
      title: datos.title,
      price: datos.price,
      image: datos.image,
      stock: datos.stock,
      cantidad: cantidad,
    };

    carrito.push(newItem);
    setCarrito(carrito);

    if (cantidad < 0) {
      addToCart(newItem);
      console.log(newItem);
    }

    console.log(carrito);
  };

  return (
    <>
      <Header />

      <Container className="containerDetail containerLoad" fluid={true}>
        {loading ? (
          <img
            className="load"
            src="http://www.gifde.com/gif/otros/decoracion/cargando-loading/cargando-loading-041.gif"
          />
        ) : (
          <div className="col card-details">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={datos.image}
                alt="imagen_producto"
              />
              <div className="card-body">
                <h5 className="card-title">{datos.title}</h5>
                <p className="card-text">{datos.description}</p>
                <p className="price">${datos.price}</p>

                <ItemCount
                  cantidad={cantidad}
                  modify={setCantidad}
                  max={datos.stock}
                />
                <button className="btn btn-danger" onClick={addToCart}>
                  Agregar
                </button>

                <Link to="/carrito" class="btn btn-success">
                  Finalizar Compra
                </Link>

                <div className="btnReturn">
                  <button
                    className="btn btn-primary"
                    style={{ width: "50%" }}
                    onClick={() => goBack()}
                  >
                    Volver
                  </button>

                  <button
                    className="btn btn-outline-primary"
                    style={{ width: "50%" }}
                    onClick={() => push("/")}
                  >
                    Inicio
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </>
  );
}

export default Detalle;
