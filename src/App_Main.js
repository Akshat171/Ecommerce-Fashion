import React from "react";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Payment from "./components/Payment/Payment";
import Header from "./components/header/header";
import Home from "./Home";
import Footer from "./components/footor/Footer";

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
