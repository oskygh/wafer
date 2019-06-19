import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Hero from "./Hero";
import StoreFront from "./StoreFront";
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Hero />
      <StoreFront />
      <Footer />
    </React.Fragment>
  );
}

export default App;
