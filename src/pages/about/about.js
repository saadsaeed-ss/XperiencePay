import React from "react";
import Header from "./components/HeaderSec";
import VisionSection from "./components/VisionSec";
import ApproachSection from "./components/ApproachSec";
import TeamSec from "./components/TeamSec";
import ContactUsSec from "./components/ContactUs";
import Footer from "../../layout/footer";
import { Helmet } from "react-helmet";

function AboutPage() {
  return (
    <div className="App">
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
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
