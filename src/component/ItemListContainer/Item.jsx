import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

const Item = ( {id, name, price, img} ) => {

    // console.log(props)

    return (

        <Card style={{ width: '18rem' }} className="m-3">
            <Card.Img variant="top" src={img} />
            <Card.Body className="card-body">
                <Card.Title>{name}</Card.Title>
                
                <Card.Text>Precio: ${price}</Card.Text>

                <Button><Link className="btn btn-primary" to={'/carrito/stock/'+id}>VER MAS</Link></Button>
            </Card.Body>
        </Card>
    )
}

export default Item