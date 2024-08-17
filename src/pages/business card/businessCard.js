import React from "react";
import Header from "./components/HeaderSec";
import Footer from "../../layout/footer";
import JoinSec from "./components/JoinSec";
import { Helmet } from "react-helmet";
import AppAppBar from "../../layout/newnavbar";
import XppxSec from "./components/xppxSec";
//
//
//

function businessCard() {
  return (
    <div className="App">
      <Helmet>
        <title>XPP Prepaid Borderless Visa Business Card</title>
        <meta
          name="description"
          content="Enjoy the freedom of global spending with the XPP Prepaid Borderless Visa Business Card. Seamlessly manage your finances and make transactions anywhere."
        />
        <link
          rel="canonical"
          href="https://xperiencepay.com/borderless-visa-business-card"
        />
      </Helmet>
      <AppAppBar />
      <Header />
      <XppxSec />
      <JoinSec />
      <Footer />
    </div>
  );
}

export default businessCard;
