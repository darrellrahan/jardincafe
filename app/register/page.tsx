"use client";

import React, { useEffect } from "react";
import Auth from "../components/Auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Loading from "../components/Loading";
import { useRouter } from "next/navigation";

function page() {
  const [user, loading, error] = useAuthState(auth);
  const { push } = useRouter();

  useEffect(() => {
    if (user) push("/");
  }, [user]);

  if (loading) return <Loading />;

  return (
    <main>
      <Auth type="register" />
    </main>
  );
}

export default page;
