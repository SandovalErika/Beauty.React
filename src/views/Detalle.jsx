import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import { useHistory, useParams } from "react-router";
import { CartContext } from "../CartContext";
import Header from "../component/Header";
import ItemCount from "../component/ItemListContainer/ItemCount";
import stock from "../component/stock";
import { getFirestore } from "../firebase/config";
// import { UIContext } from '../UIContext';

function Detalle(props) {
  const [datos, setDatos] = useState({});
  const { id } = useParams();

  const { goBack, push } = useHistory();

  const [carrito, setCarrito] = useContext(CartContext);
  // const {loading, setLoading} = useContext(UIContext)

  const [cantidad, setCantidad] = useState(0);
  useEffect(() => {
    // setLoading(true)

    const db = getFirestore();
    const productos = db.collection("productos");
    const datos = productos.doc(id);

    datos.get().then((doc) => {
      setDatos({ id: doc.id, ...doc.data() });
    });
    // .finally(() => {
    //     setLoading(false)
    //     // console.log(datos)
    // })

    // const promesa = new Promise((resolve,rejects) => {
    //     setTimeout(() => {
    //         const datos = stock.find(datos => datos.id == id)
    //         resolve(datos)
    //     },2000)
    // })

    // promesa.then(datos => setDatos(datos))
  }, [id]);

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

    // if (cantidad < 0 ) {
    //     addToCart(newItem)
    // }

    console.log(carrito);
  };

  return (
    <>
      <Header />

      <Container fluid={true}>
        <div className="col card-details">
          <div className="card card-api" style={{ width: "16rem" }}>
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
              <button className="btn btn-primary" onClick={addToCart}>
                Agregar
              </button>

              <button className="btn btn-primary" onClick={() => goBack()}>
                Volver
              </button>

              <button
                className="btn btn-outline-primary mx-4"
                onClick={() => push("/")}
              >
                Volver al inicio
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Detalle;
