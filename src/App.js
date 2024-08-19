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
import CrossBorderPayments from "./pages/cross-border-payments/crossBorderPayments";
import BusinessCard from "./pages/business card/businessCard";
//
//
//
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/trusted-sellers/" element={<TrustedSellerPage />} />
          <Route path="/how-it-works/" element={<WorksPage />} />
          <Route path="/xpp-marketplace/" element={<Marketplace />} />
          <Route path="/xppusd-stablecoin/" element={<StableCoin />} />
          <Route path="/xpp-wallet/" element={<Wallet />} />
          <Route
            path="/cross-border-payments/"
            element={<CrossBorderPayments />}
          />
          <Route
            path="/xpp-prepaid-borderless-visa-business-card/"
            element={<BusinessCard />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
