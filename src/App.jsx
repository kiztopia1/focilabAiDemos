import React from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Mado from "./pages/madohotels";
import Interluxuryhotel from "./pages/interluxuryhotel";
import Harmony from "./pages/Harmony";
import Grand from "./pages/Grand";
import Texas from "./pages/Texas";
import Beecroftstyres from "./pages/Beecroftstyres";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Beecroftstyres" element={<Beecroftstyres />} />
        <Route path="/mado" element={<Mado />} />
        <Route path="/interluxuryhotel" element={<Interluxuryhotel />} />
        <Route path="/harmony-hotel" element={<Harmony />} />
        <Route path="/grandpalaceaddis" element={<Grand />} />
        <Route path="/texasstrongfitness" element={<Texas />} />
      </Routes>
    </div>
  );
}

export default App;
