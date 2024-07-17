import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <h1>See All of our works</h1>
      <ul>
        <a href="/mado">
          <img src="mado/screen.png" alt="Mado " />
          <h2>Mado hotel</h2>
          <button>Watch Demo</button>
        </a>
        <a href="/grandpalaceaddis">
          <img src="grand/screen.png" alt="Mado " />
          <h2>The Grand Place</h2>
          <button>Watch Demo</button>
        </a>
        <a href="/harmony-hotel">
          <img src="harmony/screen.png" alt="Mado " />
          <h2>Harmoney Hotel</h2>
          <button>Watch Demo</button>
        </a>
        <a href="/interluxuryhotel">
          <img src="inter/screen.png" alt="Mado " />
          <h2>Inter Lexury Hotel</h2>
          <button>Watch Demo</button>
        </a>
      </ul>
    </div>
  );
}
