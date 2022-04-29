import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import logo from "./logo.png";
import Home from "./pages/Home";
import CreateCardForm from "./components/CreateCardForm";
import CategoriesPage from './pages/CategoriesPage';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App--navbar">
          <div className="logo">
            <img src={logo} alt="logo"></img>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-movie">Add movie</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/add-movie" element={<CreateCardForm />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;