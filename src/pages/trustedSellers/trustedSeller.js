import React from "react";
import Header from "./components/HeaderSec";
import FeatureSec from "./components/FeatureSec";
import JoinSellerProgram from "./components/JoinSellerProgram";
import TabsSec from "../../layout/tabsSec";
import Footer from "../../layout/footer";
import { Tab } from "@mui/material";
import { Helmet } from "react-helmet";

function TrustedSellerPage() {
  return (
    <div className="App">
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header />
      <FeatureSec />
      <JoinSellerProgram />
      <TabsSec />
      <Footer />
    </div>
  );
}

export default TrustedSellerPage;
