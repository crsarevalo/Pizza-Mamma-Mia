import React from "react";
import Img from "../assets/Img/pizzaNotFound.jpg";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const NotFound = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  return (
    <div>
      <img src={Img} alt="pizza triste" />
      <h2>Not Found</h2>
      <Button variant="info" onClick={navigateHome}>
        Home{" "}
      </Button>
    </div>
  );
};

export default NotFound;
