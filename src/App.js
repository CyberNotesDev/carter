import React, { useEffect } from "react";
import "./css/app.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Link, Outlet } from "react-router-dom";

import animate from "./modules/animate";

function App() {
  useEffect(() => {
    animate();
  });

  return (
    <div className="app">
      <Header />
      <Outlet />
      
      <main>
        <section>
          <Link to="/carter/vote" id="vote">
            Vote
          </Link>
          <Link to="/philosophy" id="philosophy">
            Philosophy
          </Link>
          <Link to="/merch" id="merch">
            Merch
          </Link>
          <Link to="/content" id="contact">
            Content
          </Link>
        </section>
      </main>

      <Footer />
      <Outlet />
    </div>
  );
}

export default App;
