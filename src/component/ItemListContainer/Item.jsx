import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ id, image, price, title }) => {
  return (
    <Card style={{ width: "20rem" }} className="m-3">
      <Card.Img className="img" variant="top" src={image} />
      <Card.Body className="card-body">
        <Card.Title>{title}</Card.Title>

        <Card.Text>Precio: ${price}</Card.Text>
        <div className="btn">
          <Link
            className="btn btn-primary"
            style={{ width: "100%" }}
            to={"/stock/" + id}
          >
            Ver
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;
