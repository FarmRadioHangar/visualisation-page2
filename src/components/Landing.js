import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Results from "./Results";
import Summary from "./Summary";

function Landing() {
  return (
    <>
      <Header />
      {/*
      <Hero />
      <Summary />
      */}
      <Results />
      <Footer />
    </>
  );
}

export default Landing;
