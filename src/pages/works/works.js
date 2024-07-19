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
        <meta name="robots" content="noindex" />
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
