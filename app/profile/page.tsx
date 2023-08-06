"use client";

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Profile from "../components/Profile";
import { auth } from "../firebase";

function page() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loading />;

  return (
    <main>
      <Header />
      <Profile />
      <Footer />
    </main>
  );
}

export default page;
