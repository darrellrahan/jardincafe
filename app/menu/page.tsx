"use client";

import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroMenu from "../components/HeroMenu";
import MenuCategory from "../components/MenuCategory";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Loading from "../components/Loading";

function page() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <Loading />;

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
