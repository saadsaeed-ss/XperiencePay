import React from "react";
import About from "./components/About";
import Counter from "./components/Counter";
import Services from "./components/Services";
import HeaderText from "./components/HeaderText";
import OfferSec from "./components/Offer";
import CardSection from "./components/CardSec";
import EscrowSection from "./components/EscrowSection";
import JoinSellerProgram from "./components/JoinSellerPRogram";
import Header from "./components/Header";
import TokenSection from "./components/Tokensection";
import SubscriptionSection from "./components/JoinUs";
import Footer from "../../layout/footer";
import AppAppBar from "../../layout/newnavbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <div className="App">
      <AppAppBar />
      <Header />
      <Counter />
      <About id="about" />
      <Services id="whyus" />
      <HeaderText />
      <OfferSec id="products" />
      <CardSection />
      <EscrowSection />
      <JoinSellerProgram />
      <TokenSection id="XPPToken" />
      <SubscriptionSection id="Joinus" />
      <Footer />
    </div>
  );
}

export default HomePage;
