import React from "react";
import Header from "./components/HeaderSec";
import Footer from "../../layout/footer";
import XppSec from "./components/XppSec";
import { Helmet } from "react-helmet";
import StandardSec from "./components/StandardSec";
import AuditRepoSec from "./components/AuditRepoSec";
import BenefitsSec from "./components/BenefitsSec";

function StableCoin() {
  return (
    <div className="App">
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header />
      <StandardSec />
      <AuditRepoSec />
      <BenefitsSec />
      <XppSec />
      <Footer />
    </div>
  );
}

export default StableCoin;
