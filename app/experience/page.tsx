"use client";

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroExp from "../components/HeroExp";
import Loading from "../components/Loading";
import Review from "../components/Review";
import { auth } from "../firebase";

function page() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loading />;

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
