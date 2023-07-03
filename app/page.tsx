"use client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Maps from "./components/Maps";
import Photo from "./components/Photo";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Loading from "./components/Loading";

export default function Home() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loading />;

  return (
    <main>
      <Header />
      <Hero />
      <Menu />
      <Photo />
      <Maps />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
