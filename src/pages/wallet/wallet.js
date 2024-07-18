import React from "react";
import Header from "./components/HeaderSec";
import Footer from "../../layout/footer";
import DownloadSec from "./components/DownloadSec";
import { Helmet } from "react-helmet";
import FeatureSec from "./components/FeatureSec";
import CardSec from "./components/CardsSec";

function Wallet() {
  return (
    <div className="App">
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header />
      <CardSec />
      <FeatureSec />
      <DownloadSec />
      <Footer />
    </div>
  );
}

export default Wallet;
