import React from "react";
import Header from "./components/HeaderSec";
import VisionSection from "./components/VisionSec";
import ApproachSection from "./components/ApproachSec";
import TeamSec from "./components/TeamSec";
import ContactUsSec from "./components/ContactUs";
import Footer from "../../layout/footer";
import { Helmet } from "react-helmet";
import AppAppBar from "../../layout/newnavbar";
//
//
//
function AboutPage() {
  return (
    <div className="App">
      <Helmet>
        <title>Xperience Pay: Revolutionizing Asset Trading with WEB3</title>
        <meta
          name="description"
          content="Learn about Xperience Pay’s mission to transform asset trading through its innovative WEB3 marketplace where we prioritize trust, reliability, and security."
        />
        <link rel="canonical" href="https://xperiencepay.com/about-us" />
      </Helmet>
      <AppAppBar />
      <Header />
      <VisionSection />
      <ApproachSection />
      <TeamSec />
      <ContactUsSec />
      <Footer />
    </div>
  );
}

export default AboutPage;
