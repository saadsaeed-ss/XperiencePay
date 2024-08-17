import React from "react";
import Header from "./components/HeaderSec";
import Footer from "../../layout/footer";
import StepsSec from "./components/StepsSec";
import XppSec from "./components/XppSec";
import { Helmet } from "react-helmet";
import OfferingSec from "./components/Offerings";
import BuyersSection from "./components/BuyersSec";
import SellersSection from "./components/SellersSec";
import AppAppBar from "../../layout/newnavbar";
//
//
//

function Marketplace() {
  return (
    <div className="App">
      <Helmet>
        <title>Xperience Pay WEB3 Marketplace:</title>
        <meta
          name="description"
          content="XPP offers a secure trading facility through its WEB3 Marketplace. Explore a diverse range of real-world assets (RWAs) using cryptocurrency."
        />
        <link rel="canonical" href="https://xperiencepay.com/marketplace" />
      </Helmet>
      <AppAppBar />
      <Header />
      <StepsSec />
      <OfferingSec />
      <BuyersSection />
      <SellersSection />
      <XppSec />
      <Footer />
    </div>
  );
}

export default Marketplace;
