"use client";

import React, { useState } from "react";
import { profileTab } from "../data/dry";
import HistoryTab from "./HistoryTab";
import ProfileTab from "./ProfileTab";
import VoucherTab from "./VoucherTab";

function Profile() {
  const [tab, setTab] = useState(profileTab[0]);

  return (
    <section id="profile">
      <div className="mx-32 mt-40 mb-16 bg-white rounded-lg shadow border border-neutral-500">
        <div className="grid grid-cols-3 text-xl font-medium">
          {profileTab.map((data) => (
            <button
              key={data}
              onClick={() => setTab(data)}
              className={`${
                tab === data
                  ? "text-[#013300] border-[#013300] font-semibold border-b-[3px]"
                  : "text-neutral-500 border-b border-neutral-500"
              } p-4 hover:text-[#013300] hover:border-[#013300] hover:font-semibold hover:border-b-[3px] transition-all duration-[0.1s] ease-linear`}
            >
              {data}
            </button>
          ))}
        </div>
        <div className="p-12">
          {tab === "Profile" && <ProfileTab />}
          {tab === "History" && <HistoryTab />}
          {tab === "Voucher" && <VoucherTab />}
        </div>
      </div>
    </section>
  );
}

export default Profile;
