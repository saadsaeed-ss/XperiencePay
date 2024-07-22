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
        <meta name="robots" content="noindex" />
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
