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
        <meta name="robots" content="noindex" />
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
