import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import "mdb-ui-kit";

import { Login } from "./pages/loginPage";
import { Register } from "./pages/registerPage"
import { Home } from "./pages/homePage";

//Css file
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/login" replace />}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
