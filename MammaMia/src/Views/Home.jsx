import React, { useContext } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { PizzaContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};
const Home = () => {
  const { pizza, getSpecificPizza, addToCart } = useContext(PizzaContext);
  const Navigate = useNavigate();
  const handleDetailsClick = (id) => {
    getSpecificPizza(id);
    Navigate(`/pizzadetails/${id}`);
  };

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <>
      <Row xs={1} sm={2} md={4}>
        {pizza.map((item) => (
          <Col key={item.id}>
            <div className="homeCard">
              <Card>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text className="description-text">
                    {truncateText(item.desc, 80)}
                  </Card.Text>

                  <Card.Text>
                    Ingredientes:
                    <ul className="text-start">
                      {item.ingredients.map((ingredient, index) => (
                        <li key={index}>🍕 {ingredient}</li>
                      ))}
                    </ul>
                  </Card.Text>
                  <Card.Text> Precio: $ {item.price}</Card.Text>
                  <div className="d-flex justify-content-between  ">
                    <Button
                      key={item.id}
                      onClick={() => handleDetailsClick(item.id)}
                    >
                      Detalles 👀
                    </Button>
                    <Button
                      variant="warning"
                      onClick={() => handleAddToCart(item)}
                    >
                      Añadir 🛒
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
