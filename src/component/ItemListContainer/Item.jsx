import React, { useContext } from 'react'
import {Card} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { CartContext } from '../../CartContext';

const Item = ( {id,image,price,title} ) => {

    //  const [carrito,setCarrito]=useContext(CartContext)

    // function agregar(){
    //     const producto ={
    //     id:id,
    //     title:title,
    //     price:price,
    //     image:image,
    //     }

    //     const temporal = carrito;
    //     temporal.push(producto);
    //     setCarrito(temporal)
    //     console.log(carrito);

    // }

    return (

        <Card style={{ width: '18rem' }} className="m-3 cardApi">
            <Card.Img className='img' variant="top" src={image} />
            <Card.Body className="card-body">
                <Card.Title>{title}</Card.Title>
                
                <Card.Text>Precio: ${price}</Card.Text>
            <div className="btn">
                <Link className="btn btn-primary" to={'/stock/'+id}>Ver</Link>
                {/* <button className="btn btn-primary" onClick={agregar} >Comprar</button> */}
            </div>
            </Card.Body>
        </Card>
    )
}

export default Item