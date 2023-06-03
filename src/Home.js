import React from "react";
import Header from "./components/header/header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/slider";
import Arrival from "./components/Arrivals/Arrival";
import Footer from "./components/footor/Footer";

function Home() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Arrival />
      <Footer />
    </div>
  );
}

export default Home;
