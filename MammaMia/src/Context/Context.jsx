import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const dataJson = "/pizzas.json";

export const PizzaContext = createContext();

const Context = ({ children }) => {
  const [pizza, setPizza] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [cart, setCart] = useState([]);

  const getPizzas = async () => {
    try {
      const response = await axios.get(dataJson);
      if (response.status === 200) {
        setPizza(response.data);
      } else {
        throw new Error("Data Not Found");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getSpecificPizza = (id) => {
    const pizzaDetails = pizza.find((item) => item.id === id);
    setSelectedPizza(pizzaDetails);
  };

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const newItem = { ...item, quantity: 1 };
      setCart([...cart, newItem]);
    }
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const increaseQuantity = (item) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemIndex !== -1) {
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    }
  };

  const decreaseQuantity = (item) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemIndex !== -1) {
      if (updatedCart[itemIndex].quantity > 1) {
        updatedCart[itemIndex].quantity -= 1;
      } else {
        updatedCart.splice(itemIndex, 1);
      }
      setCart(updatedCart);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <PizzaContext.Provider
      value={{
        pizza,
        selectedPizza,
        getSpecificPizza,
        cart,
        addToCart,
        calculateTotalPrice,
        getCartQuantity,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default Context;
