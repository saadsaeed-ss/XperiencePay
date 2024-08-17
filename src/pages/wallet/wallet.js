import React from "react";
import Header from "./components/HeaderSec";
import Footer from "../../layout/footer";
import DownloadSec from "./components/DownloadSec";
import { Helmet } from "react-helmet";
import FeatureSec from "./components/FeatureSec";
import CardSec from "./components/CardsSec";
import AppAppBar from "../../layout/newnavbar";
//
//
//

function Wallet() {
  return (
    <div className="App">
      <Helmet>
        <title>XPP Wallet: Secure and Convenient Crypto Management</title>
        <meta
          name="description"
          content="Manage your crypto assets with the XPP Wallet. Enjoy top-notch security and easy access to your funds, making asset trading a breeze on Xperience Pay."
        />
        <link rel="canonical" href="https://xperiencepay.com/wallet" />
      </Helmet>
      <AppAppBar />
      <Header />
      <CardSec />
      <FeatureSec />
      <DownloadSec />
      <Footer />
    </div>
  );
}

export default Wallet;
