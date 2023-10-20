import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Views/Home";
import Cart from "./Views/Cart";
import PizzaDetails from "./Views/OurPizzas";
import SpecificDetails from "./Views/SpecificDetails";
import NotFound from "./Views/NotFound";

function App() {
  return (
    <>
      <div className="App">
        <Menu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzadetails" element={<PizzaDetails />} />
          <Route path="/pizzadetails/:id" element={<SpecificDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
