import React from "react";
import Home from "./Home";
import Form from "./Form";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./Register";

function App() {
  const userIsRegistered = false;

  return (
    <div className="container">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Form"
            element={<Form isRegistered={userIsRegistered} />}/>
          <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
