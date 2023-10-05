import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Loginpage from "./components/Loginpage";
import Projecttodo from "./components/Projecttodo";
import Healthmonitor from "./components/Healthmonitor";
import Body from "./components/Body";
import Documentation from "./components/Documentation";

function App() {
  return (
    <>
      <Router>
        <Routes>
        
          <Route path="/" element={<Body />} />

          {/* Define other routes */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Loginpage" element={<Loginpage />} />
          <Route path="/Projecttodo" element={<Projecttodo />} />
          <Route path="/Healthmonitor" element={<Healthmonitor />} />
          <Route path="/Documentation" element={<Documentation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
