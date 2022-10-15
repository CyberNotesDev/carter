import React from "react";
// IMPORTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
// CSS
import "./css/app.css";

export default function App() {

  return (
    <div className="app">
      <Header />
      
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}