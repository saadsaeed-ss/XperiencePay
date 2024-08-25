import React from "react";
import Header from "./components/HeaderSec";
import Footer from "../../layout/footer";
import JoinSec from "./components/JoinSec";
import { Helmet } from "react-helmet";
import StandardSec from "./components/StandardSec";
import AuditRepoSec from "./components/AuditRepoSec";
import BenefitsSec from "./components/BenefitsSec";
import AppAppBar from "../../layout/newnavbar";
//
//
//

function StableCoin() {
  return (
    <div className="App">
      <Helmet>
        <title>XPPUSD Stablecoin: Stability and Innovation in One</title>
        <meta
          name="description"
          content="Explore the benefits of XPPUSD Stablecoin, pegged to the US dollar for reliable transactions. Experience the perfect blend of stability & crypto innovation."
        />
        <link
          rel="canonical"
          href="https://xperiencepay.com/xppusd-stablecoin/"
        />
      </Helmet>
      <AppAppBar />
      <Header />
      <StandardSec />
      <AuditRepoSec />
      <BenefitsSec />
      <JoinSec />
      <Footer />
    </div>
  );
}

export default StableCoin;
