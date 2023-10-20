import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { PizzaContext } from "../Context/Context";

const Menu = () => {
  const activeClass = ({ isActive }) =>
    isActive
      ? "text-dark mt-2 pe-2 text-decoration-none active"
      : "text-white mt-2 pe-2 text-decoration-none";

  const { getCartQuantity, calculateTotalPrice } = useContext(PizzaContext);

  return (
    <>
      <Navbar className="bg-info  fixed-top">
        <Container>
          <Navbar.Brand className="text-white">
            <NavLink className={activeClass} to="/">
              Mamma Mia
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand>
              <NavLink className={activeClass} to="/pizzadetails">
                Nuestras Pizzas
              </NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
              <NavLink className={activeClass} to="/cart">
                🛒 {getCartQuantity()} Cantd. - ${calculateTotalPrice()}
              </NavLink>
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
