import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import CarsList from "./Components/CarsList/CarsList";
import CarEdit from "./Components/CarForm/CarForm";

function App() {
  return (
    <div className="container main">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<CarsList />} />
          <Route path="/cars/edit/:id" element={<CarEdit />} />
          <Route path="/add" element={<CarEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
