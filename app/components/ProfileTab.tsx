"use client";

import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

function ProfileTab() {
  const [user] = useAuthState(auth);
  const { push } = useRouter();

  useEffect(() => {
    if (!user) push("/");
  }, [user]);

  return (
    <div className="space-y-8">
      <p className="text-[#013300] text-xl font-semibold">Your Profile</p>
      <div className="flex items-center">
        <p className="text-neutral-500 text-lg font-medium w-20">Name</p>
        <p className="rounded border border-[#013300] font-medium py-2 px-4 bg-transparent text-[#013300]">
          {user?.displayName}
        </p>
      </div>
      <div className="flex items-center">
        <p className="text-neutral-500 text-lg font-medium w-20">Email</p>
        <p className="rounded border border-[#013300] font-medium py-2 px-4 bg-transparent text-[#013300]">
          {user?.email}
        </p>
      </div>
      <button
        onClick={() => signOut(auth)}
        className="rounded-lg border border-[#013300] text-[#013300] hover:bg-[#013300] hover:text-white duration-200 ease-linear w-full p-2"
      >
        <div className="flex items-center justify-center gap-2.5 text-lg font-medium">
          <span>Logout</span>
          <FiLogOut fontSize="1.25rem" />
        </div>
      </button>
    </div>
  );
}

export default ProfileTab;
