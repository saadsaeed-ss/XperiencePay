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
        <meta name="robots" content="noindex" />
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
