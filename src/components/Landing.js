import React, { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Results from "./Results";
import Summary from "./Summary";
import { AppContext } from "../contexts/App";

function Landing() {
  const { aboutPageVisible } = useContext(AppContext);

  return (
    <>
      <Header />
      {aboutPageVisible ? (
        <About />
      ) : (
        <>
          <Hero />
          <Summary />
          <Results />
        </>
      )}
      <Footer />
    </>
  );
}

export default Landing;
