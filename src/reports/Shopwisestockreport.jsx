

import React, { useEffect, useState } from "react";
import fakeStockReportData from "../data/fakeStockReportData.json";

export const Shopwisestockreport = () => {

  const [selectedShop, setSelectedShop] = useState("");
  const [reportType, setReportType] = useState("");
  const [originWise, setOriginWise] = useState(false);

  const [reportData, setReportData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const shops = ["WAREHOUSE","UTTARA","SWADESHI-UTTARA","KASHIMPUR","ONLINE SHOP","ISWARDI","CHITTAGONG","MYMENSHINGH","SYLHET","BHAIRAB","MADARIPUR","BARISAL","FENI","TANGAIL","DOHAR","COX BAZAR","B. CITY-1","B. CITY-2","UTTARA","NARAYANGANJ","MBRELLA-FACTORY",
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

        const data =
          fakeStockReportData?.[selectedShop]?.[reportType] || [];

        setReportData(data);
        console.log(data)

      } catch (error) {

        console.log(error);

      }

    };

    fetchData();

  }, [showTable]);

  console.log(fakeStockReportData)

  return (
    <div className="w-full min-h-screen bg-slate-50 p-6">

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

      {/* REPORT HEADER */}

      {showTable && reportData.length > 0 && (
        <>
          <div className="text-center mt-6">

            <h1 className="text-2xl font-bold tracking-wide text-slate-800">
              MBRELLA
            </h1>

            <p className="text-xs text-slate-500 mt-1">
              HOUSE: 19, ROAD: 03, SECTOR: 03, UTTARA, DHAKA-1230, BANGLADESH
            </p>

            <h2 className="text-lg font-bold mt-3 text-slate-700 uppercase">
              Shop Wise Summarised Stock Report
            </h2>

          </div>

          {/* TABLE */}

          <div className="overflow-x-auto mt-6">

            <table className="w-full border-8 text-sm">

              <thead className="bg-slate-100">

                <tr>
                  <th
                    colSpan={6}
                    className="border border-slate-300 px-4 py-3 text-left"
                  >
                    SHOP NAME : {selectedShop}
                  </th>
                </tr>

                <tr>

                  <th className="border border-slate-300 px-4 py-3 text-left">
                    P. Group
                  </th>

                  <th className="border border-slate-300 px-4 py-3 text-left">
                    Product Name
                  </th>

                  <th className="border border-slate-300 px-4 py-3 text-center">
                    No Of Design
                  </th>

                  <th className="border border-slate-300 px-4 py-3 text-right">
                    Curr. Bal
                  </th>

                  <th className="border border-slate-300 px-4 py-3 text-right">
                    Cost Value
                  </th>

                  <th className="border border-slate-300 px-4 py-3 text-right">
                    MRP Value
                  </th>

                </tr>

              </thead>

              <tbody>

                {reportData.map((groupData, groupIndex) => (
                  <React.Fragment key={groupIndex}>

                    {groupData.items.map((item, itemIndex) => (

                      <tr
                        key={itemIndex}
                        className="hover:bg-slate-50"
                      >

                        <td className="border border-slate-300 px-4 py-2">
                          {groupData.group}
                        </td>

                        <td className="border border-slate-300 px-4 py-2">
                          {item.product_name}
                        </td>

                        <td className="border border-slate-300 px-4 py-2 text-center">
                          {item.no_of_design}
                        </td>

                        <td className="border border-slate-300 px-4 py-2 text-right">
                          {item.curr_bal}
                        </td>

                        <td className="border border-slate-300 px-4 py-2 text-right">
                          {item.cost_value.toLocaleString()}
                        </td>

                        <td className="border border-slate-300 px-4 py-2 text-right">
                          {item.mrp_value.toLocaleString()}
                        </td>

                      </tr>

                    ))}

                 ]

                    {/* GROUP TOTAL */}

                    <tr className="bg-slate-100 font-bold">

                      <td
                        colSpan={2}
                        className="border border-slate-300 px-4 py-3 text-right"
                      >
                        GRP-TOTAL
                      </td>

                      <td className="border border-slate-300 px-4 py-3 text-center">
                        {
                          groupData.items.reduce(
                            (total, item) => total + item.no_of_design,
                            0
                          )
                        }
                      </td>

                      <td className="border border-slate-300 px-4 py-3 text-right">
                        {
                          groupData.items
                            .reduce((total, item) => total + item.curr_bal, 0)
                            .toLocaleString()
                        }
                      </td>

                      <td className="border border-slate-300 px-4 py-3 text-right">
                        {
                          groupData.items
                            .reduce((total, item) => total + item.cost_value, 0)
                            .toLocaleString()
                        }
                      </td>

                      <td className="border border-slate-300 px-4 py-3 text-right">
                        {
                          groupData.items
                            .reduce((total, item) => total + item.mrp_value, 0)
                            .toLocaleString()
                        }
                      </td>

                    </tr>

                  </React.Fragment>
                ))}

              </tbody>

            </table>

          </div>
        </>
      )}

    </div>
  );
};