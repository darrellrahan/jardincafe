import React from "react";
import { voucher } from "../data/dry";

function VoucherTab() {
  return (
    <div className="space-y-8">
      {voucher.map((data) => (
        <div
          key={data.percentage}
          className="rounded-lg shadow border border-neutral-500 border-opacity-60 p-6 flex items-center justify-between"
        >
          <div className="flex items-center text-[#013300]">
            <span className="text-5xl w-[7.5rem] font-semibold">
              {data.percentage}%
            </span>
            <span className="text-lg font-medium">{data.banner}</span>
          </div>
          <button className="rounded-lg bg-[#013300] text-white py-2 px-6 border-2 font-medium border-[#013300] hover:bg-transparent hover:text-[#013300] duration-200 ease-linear">
            Claim
          </button>
        </div>
      ))}
    </div>
  );
}

export default VoucherTab;
