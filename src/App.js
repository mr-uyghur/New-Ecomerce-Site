import React from "react";
import HomePage from "./pages/homePage/homePage.component";
import "./App.css";
import {  Routes, Route} from "react-router-dom";


const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);

function App() {
  return (
    <div>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/hats" element={<HatsPage />} />
      
    </Routes>
  </div>
  )
}

export default App;
