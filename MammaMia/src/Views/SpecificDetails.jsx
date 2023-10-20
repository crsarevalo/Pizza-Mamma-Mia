import React, { useContext, useEffect } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { PizzaContext } from "../Context/Context";

const SpecificDetails = () => {
  const { id } = useParams();
  const { selectedPizza, getSpecificPizza, addToCart } =
    useContext(PizzaContext);
  const navigate = useNavigate();

  useEffect(() => {
    getSpecificPizza(id);
  }, [id, getSpecificPizza]);

  if (!selectedPizza) {
    navigate("*");
    return null;
  }
  return (
    <div className="DetailsCard pt-4">
      <Card key={selectedPizza.id} className="mb-2">
        <Row>
          <Col md={6}>
            <Card.Img variant="top" src={selectedPizza.img} className="p-1" />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>
                <h2>{selectedPizza.name}</h2>
              </Card.Title>
              <Card.Text>{selectedPizza.desc}</Card.Text>
              <Card.Text>
                Ingredientes: {selectedPizza.ingredients.join(", ")}
              </Card.Text>
              <Card.Text> Precio: $ {selectedPizza.price}</Card.Text>
              <Button
                variant="warning"
                onClick={() => addToCart(selectedPizza)}
              >
                Añadir
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default SpecificDetails;
