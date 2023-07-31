import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroExp from "../components/HeroExp";
import Review from "../components/Review";

function page() {
  return (
    <main>
      <Header />
      <HeroExp />
      <Review />
      <Footer />
    </main>
  );
}

export default page;
