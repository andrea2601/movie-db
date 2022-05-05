import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

import logo from "./logo.png";
import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import CategoriesPage from './pages/CategoriesPage';
import EditMovie from "./pages/EditMovie";
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
          <Route path="/edit-movie/:id" element={<EditMovie />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;