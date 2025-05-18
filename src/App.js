// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
// import Dashboard from "./components/Dashboard";
import Onebox from "./Pages/Onebox";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inbox" element={<Onebox />} />
      </Routes>
    </Router>
  );
}

export default App;
