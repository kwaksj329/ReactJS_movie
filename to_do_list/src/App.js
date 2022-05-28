import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import School from "./routes/School";
import Soma from "./routes/Soma";
import Personal from "./routes/Personal";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/school" element={<School />}></Route>
        <Route path="/soma" element={<Soma />}></Route>
        <Route path="/personal" element={<Personal />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
