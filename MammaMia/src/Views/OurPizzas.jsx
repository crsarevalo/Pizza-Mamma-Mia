import React, { useContext } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { PizzaContext } from "../Context/Context";

const PizzaDetails = () => {
  const { pizza, getSpecificPizza, addToCart } = useContext(PizzaContext);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="DetailsCard pt-5">
      {pizza.map((item) => (
        <Card key={item.id} className="mb-2">
          <Row>
            <Col md={6}>
              <Card.Img variant="top" src={item.img} className="p-1" />
            </Col>
            <Col md={6}>
              <Card.Body>
                <Card.Title>
                  <h2>{item.name}</h2>
                </Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <Card.Text>
                  Ingredientes: {item.ingredients.join(", ")}
                </Card.Text>
                <Card.Text> Precio: $ {item.price}</Card.Text>
                <Button variant="warning" onClick={() => handleAddToCart(item)}>
                  Agregar al carrito
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
};

export default PizzaDetails;
