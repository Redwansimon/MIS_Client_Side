// Shopwisestockreport.jsx

import React, { useState } from "react";

export const Shopwisestockreport = () => {
  const [selectedShop, setSelectedShop] = useState("");
  const [reportType, setReportType] = useState("");
  const [originWise, setOriginWise] = useState(false);

  const shops = [
    "WAREHOUSE",
    "SWADESHI-UTTARA",
    "KASHIMPUR",
    "ONLINE SHOP",
    "ISWARDI",
    "CHITTAGONG",
    "MYMENSHINGH",
    "SYLHET",
    "BHAIRAB",
    "MADARIPUR",
    "BARISAL",
    "FENI",
    "TANGAIL",
    "DOHAR",
    "COX BAZAR",
    "B. CITY-1",
    "B. CITY-2",
    "UTTARA",
    "NARAYANGANJ",
    "MBRELLA-FACTORY",
  ];

  const reportTypes = [
    "Stock Summary",
    "Product Group Wise",
    "Product Name Wise",
    "Style Wise",
    "Supplier Wise",
    "Size Breakdown",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      selectedShop,
      reportType,
      originWise,
    });
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 p-6">

      {/* SUB HEADER */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm px-6 py-4 mb-6">
        <div className="flex items-center gap-3 text-sm font-medium text-slate-600">

          <div className="flex items-center gap-2">
            <span className="text-xl text-purple-600">◆</span>
            <span className="font-semibold uppercase">Stock</span>
          </div>

          <span className="text-slate-400">|</span>

          <div>
            <span className="text-slate-700 font-semibold">
              Shop Wise
            </span>
          </div>

        </div>
      </div>

      {/* FORM CARD */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-md">

        <form onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 p-6">

            {/* SHOP SELECT */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Select Shop
              </label>

              <select
                value={selectedShop}
                onChange={(e) => setSelectedShop(e.target.value)}
                className="
                  w-full h-12 px-4
                  border border-slate-300
                  rounded-lg
                  outline-none
                  focus:ring-2 focus:ring-purple-400
                  bg-white
                "
                required
              >
                <option value="">SELECT SHOP</option>

                {shops.map((shop, index) => (
                  <option key={index} value={shop}>
                    {shop}
                  </option>
                ))}
              </select>
            </div>

            {/* REPORT TYPE */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Report Type
              </label>

              <select
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="
                  w-full h-12 px-4
                  border border-slate-300
                  rounded-lg
                  outline-none
                  focus:ring-2 focus:ring-purple-400
                  bg-white
                "
                required
              >
                <option value="">SELECT REPORT</option>

                {reportTypes.map((report, index) => (
                  <option key={index} value={report}>
                    {report}
                  </option>
                ))}
              </select>
            </div>

            {/* ORIGIN WISE */}
            <div className="flex items-end">
              <label className="flex items-center gap-3 cursor-pointer">

                <input
                  type="checkbox"
                  checked={originWise}
                  onChange={() => setOriginWise(!originWise)}
                  className="
                    w-5 h-5
                    accent-purple-600
                    cursor-pointer
                  "
                />

                <span className="text-sm font-semibold text-slate-700 uppercase">
                  Origin Wise
                </span>

              </label>
            </div>

            {/* BUTTON */}
            <div className="flex items-end">
              <button
                type="submit"
                className="
                  w-full h-12
                  bg-purple-600
                  hover:bg-purple-700
                  transition
                  rounded-lg
                  text-white
                  font-semibold
                  shadow-md
                "
              >
                VIEW REPORT
              </button>
            </div>

          </div>

        </form>

      </div>
    </div>
  );
};