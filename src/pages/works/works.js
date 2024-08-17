import React from "react";
import Header from "./components/HeaderSec";
import Footer from "../../layout/footer";
import StepsSec from "./components/StepsSec";
import XppSec from "./components/XppSec";
import { Helmet } from "react-helmet";
import AppAppBar from "../../layout/newnavbar";
//
//
//

function WorksPage() {
  return (
    <div className="App">
      <Helmet>
        <title>
          How Xperience Pay Works: Your Guide to Seamless Asset Trading
        </title>
        <meta
          name="description"
          content="Learn how Xperience Pay simplifies asset trading with its WEB3 marketplace. From sign-up to secure transactions, see how easy it is to manage & trade assets."
        />
        <link rel="canonical" href="https://xperiencepay.com/works" />
      </Helmet>
      <AppAppBar />
      <Header />
      <StepsSec />
      <XppSec />
      <Footer />
    </div>
  );
}

export default WorksPage;
