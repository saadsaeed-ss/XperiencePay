import React from "react";
import Header from "./components/HeaderSec";
import Footer from "../../layout/footer";
import JoinSec from "./components/JoinSec";
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
      <JoinSec />
      <Footer />
    </div>
  );
}

export default StableCoin;
