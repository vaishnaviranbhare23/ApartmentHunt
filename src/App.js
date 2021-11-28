import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Apartment from "./pages/Apartment";
import View from "./pages/View";
import Mylist from "./pages/Mylist";
import Navbar from "./pages/Navbar";
import Sort from "./pages/Sort";
import ButtonAppBar from "./pages/Appbar";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/add" element={<Apartment />} />
          <Route path="/view" element={<View />} />
          <Route path="/mylist" element={<Mylist />} />
          <Route path="/sort" element={<Sort />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
