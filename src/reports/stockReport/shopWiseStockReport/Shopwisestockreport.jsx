

import React, { useEffect, useState } from "react";
import fakeStockReportData from "../../../data/fakeStockReportData.json";
import { ShopwiseTable } from "./ShopwiseTable";

export const Shopwisestockreport = () => {

  const [selectedShop, setSelectedShop] = useState("");
  const [reportType, setReportType] = useState("");
  const [originWise, setOriginWise] = useState(false);

  const [reportData, setReportData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const shops = ["WAREHOUSE","UTTARA","SWADESHI-UTTARA","KASHIMPUR","ONLINE SHOP","ISWARDI","CHITTAGONG","MYMENSHINGH","SYLHET","BHAIRAB","MADARIPUR","BARISAL","FENI","TANGAIL","DOHAR","COX BAZAR","B. CITY-1","B. CITY-2","NARAYANGANJ","MBRELLA-FACTORY",
  ];

  const reportTypes = [
    "Summary",
    "Details",
  ];

  const handleSubmit = (e) => {

    e.preventDefault();

    setShowTable(false); // reset first

    setTimeout(() => {
      setShowTable(true); // trigger fresh load
    }, 0);
  };


  useEffect(() => {

    if (!showTable) return;

    const fetchData = async () => {

      try {

        // later backend api call hobe ekhane

        // const response = await fetch("/api/shopwise-stock");
        // const data = await response.json();

        if (reportType  === "Summary"){
           const data =
          fakeStockReportData?.[selectedShop]?.[reportType] || [];

        setReportData(data);
        }
        else{
          const data = fakeStockReportData?.[selectedShop]?.[reportType] || [];
          setReportData(data);
        }
       

      } catch (error) {

        console.log(error);

      }

    };

    fetchData();

  }, [showTable]);


  return (
    <div className="w-full min-h-screen bg-slate-50 p-4 text-sm ">

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

      <ShopwiseTable showTable = {showTable}  shops= {shops} reportData= {reportData} selectedShop= {selectedShop} />

      

    </div>
  );
};