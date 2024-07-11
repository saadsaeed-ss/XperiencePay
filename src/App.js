import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import TrustedSellerPage from "./pages/trustedSellers/trustedSeller";
import WorksPage from "./pages/works/works";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> For making URL/home change. */}
          <Route path="/about" element={<About />} />
          <Route path="/trusted-seller" element={<TrustedSellerPage />} />
          <Route path="/works" element={<WorksPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
