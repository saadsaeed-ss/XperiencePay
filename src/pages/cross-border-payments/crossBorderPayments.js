import React from "react";
import Header from "./components/HeaderSec";
import Footer from "../../layout/footer";
import JoinSec from "./components/JoinSec";
import { Helmet } from "react-helmet";
import BenefitSec from "./components/BenefitSec";
import AppAppBar from "../../layout/newnavbar";
import BarrierSection from "./components/BarrierSec";
//
//
//

function CrossBorderPayments() {
  return (
    <div className="App">
      <Helmet>
        <title>Cross-Border Payments Made Easy with Xperience Pay</title>
        <meta
          name="description"
          content="Experience hassle-free cross-border payments with Xperience Pay’s WEB3 marketplace. Secure and fast transactions that break down geographical barriers."
        />
        <link
          rel="canonical"
          href="https://xperiencepay.com/cross-border-payments"
        />
      </Helmet>
      <AppAppBar />
      <Header />
      <BarrierSection />
      <BenefitSec />
      <JoinSec />
      <Footer />
    </div>
  );
}

export default CrossBorderPayments;
