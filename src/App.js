import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import TrustedSellerPage from "./pages/trustedSellers/trustedSeller";
import WorksPage from "./pages/works/works";
import Marketplace from "./pages/marketplace/marketplace";
import StableCoin from "./pages/stableCoin/stableCoin";
import Wallet from "./pages/wallet/wallet";
//
//
//
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
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/stablecoin" element={<StableCoin />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
