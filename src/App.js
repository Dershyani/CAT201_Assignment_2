import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/index"; // Import your Home component
import SigninPage from "./pages/signin"; // Import your SignIn component

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SigninPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
