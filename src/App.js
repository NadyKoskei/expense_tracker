import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
