import React, { useContext } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { PizzaContext } from "../Context/Context";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, calculateTotalPrice, increaseQuantity, decreaseQuantity } =
    useContext(PizzaContext);

  const handlePagarClick = () => {
    if (cart.length === 0) {
      Swal.fire({
        title: "Carrito Vacío",
        text: "Tu carrito de compras está vacío. Agrega productos antes de pagar.",
        icon: "warning",
      });
    } else {
      Swal.fire({
        title: "Redirigiendo al pago",
        text: "Redirigiendo al pago...",
        icon: "success",
      });
    }
  };

  return (
    <div className="p-4">
      <h2>Detalle del pedido</h2>
      <p>Total: ${calculateTotalPrice()}</p>
      <Button className="mb-2" variant="success" onClick={handlePagarClick}>
        Ir a pagar 🎊
      </Button>
      {cart.map((item) => (
        <Card key={item.id}>
          <Row className="d-flex">
            <Col className="d-flex justify-content-start align-items-center">
              <Card.Img src={item.img} className="imgCart" />{" "}
              <Card.Title>
                <h4>{item.name}</h4>
              </Card.Title>
            </Col>
            <Col>
              <Card.Body className="d-flex justify-content-end align-items-center">
                <Card.Text> $ {item.price}</Card.Text>

                <Button
                  className="m-2"
                  variant="success"
                  onClick={() => increaseQuantity(item)}
                >
                  +1
                </Button>
                <Card.Text>{item.quantity}</Card.Text>
                <Button
                  className="m-2"
                  variant="danger"
                  onClick={() => decreaseQuantity(item)}
                >
                  -1
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
};

export default Cart;
