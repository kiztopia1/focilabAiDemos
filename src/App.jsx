import React from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Mado from "./pages/madohotels";
import Interluxuryhotel from "./pages/interluxuryhotel";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mado" element={<Mado />} />
        <Route path="/interluxuryhotel" element={<Interluxuryhotel />} />
      </Routes>
    </div>
  );
}

export default App;
