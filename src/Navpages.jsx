import React from "react";
import About from "./Pages/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Navpages() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact="true" path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navpages;
