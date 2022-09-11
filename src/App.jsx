import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />}/>
                <Route path="*" element={<div>This page doesnt exist...</div>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
