"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import HeroMenu from "@/app/components/HeroMenu";
import Loading from "@/app/components/Loading";
import { menuCategory } from "@/app/data/dry";
import { auth } from "@/app/firebase";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

function page({ params: { category } }: { params: { category: string } }) {
  const [user, loading] = useAuthState(auth);

  const categoryData = menuCategory.find((data) => data.id === category);

  if (loading) return <Loading />;

  return (
    <main>
      <Header />
      <HeroMenu category={category} bg={categoryData?.bg} />
      <section id="main">
        <div className="px-32 py-16 rounded-t-[2.5rem] -mt-16 z-20 relative bg-white">
          {category}
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default page;
