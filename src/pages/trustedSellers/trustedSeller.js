import React from "react";
import Header from "./components/HeaderSec";
import FeatureSec from "./components/FeatureSec";
import JoinSellerProgram from "./components/JoinSellerProgram";
import TabsSec from "../../layout/tabsSec";
import Footer from "../../layout/footer";

import { Helmet } from "react-helmet";
import AppAppBar from "../../layout/newnavbar";
//
//
//

function TrustedSellerPage() {
  return (
    <div className="App">
      <Helmet>
        <title>Trusted Sellers on Xperience Pay: Buy with Confidence</title>
        <meta
          name="description"
          content="Connect with trusted sellers on Xperience Pay’s secure WEB3 marketplace. Browse high-value assets and make confident purchases with our vetted sellers."
        />
        <link rel="canonical" href="https://xperiencepay.com/trusted-seller" />
      </Helmet>
      <AppAppBar />
      <Header />
      <FeatureSec />
      <JoinSellerProgram />
      <TabsSec />
      <Footer />
    </div>
  );
}

export default TrustedSellerPage;
