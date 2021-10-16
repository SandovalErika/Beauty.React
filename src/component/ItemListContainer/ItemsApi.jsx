
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext";


function ItemsApi({id,image,price,title}) {

  const [carrito,setCarrito]=useContext(CartContext)
  
  function agregarApi (){
    const producto ={
      id:id,
      
      image:image,
      price:price,
      title:title,
    }

    const temporal = carrito;
    temporal.push(producto);
    setCarrito(temporal)
    console.log(carrito);


  }
  

  return (
      <div className="col divCard">
        <div className="card cardApi" style={{ width: "15rem" }}>
        <img className="card-img-top img" src={image} alt="imagen_producto" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {price}
            </p>
            <div className='btn'>
              <Link className="btn btn-primary" to={'/producto/'+id}>Ver</Link>
              <button className="btn btn-primary" onClick={agregarApi} >Comprar</button>
            </div>
        </div>
        </div>
      </div>
  );
}

export default ItemsApi;
