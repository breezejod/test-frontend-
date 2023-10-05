import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Loginpage from "./components/Loginpage";
import Projecttodo from "./components/Projecttodo";
import Healthmonitor from "./components/Healthmonitor";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Loginpage" element={<Loginpage />} />
          <Route path="/Projecttodo" element={<Projecttodo />} />
          <Route path="/Healthmonitor" element={<Healthmonitor />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
