import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Detail from "../../pages/Detail";
import Cart from "../../pages/Cart";
import Checkout from "../../pages/Checkout";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/payment" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
