import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Payment from "./components/Payment/Payment";
import Home from "./Home";

const App_Main = () => {
  return (
    <div className="App">
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Cart />} />
        <Route path="payment" element={<Payment />} />
      </Routes>
    </div>
  );
};

export default App_Main;
