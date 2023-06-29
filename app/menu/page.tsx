import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroMenu from "../components/HeroMenu";
import MenuCategory from "../components/MenuCategory";

function page() {
  return (
    <main>
      <Header />
      <HeroMenu />
      <MenuCategory />
      <Footer />
    </main>
  );
}

export default page;
