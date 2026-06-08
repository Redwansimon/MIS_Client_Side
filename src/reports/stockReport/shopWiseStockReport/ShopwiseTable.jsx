

import React from "react";

export const ShopwiseTable = ({ reportData = [], selectedShop }) => {
  return (
    <>
      {/* HEADER */}
      {reportData.length > 0 && (
        <>
          <div className="text-center mt-6">

            <h1 className="text-2xl font-bold">MBRELLA</h1>

            <p className="text-xs text-slate-500">
              HOUSE: 19, ROAD: 03, SECTOR: 03, UTTARA, DHAKA
            </p>

            <h2 className="text-lg font-bold mt-3 uppercase">
              Shop Wise Stock Report
            </h2>

          </div>

          {/* TABLE */}
          <div className="overflow-x-auto mt-6">

            <table className="w-full text-xs border">

              {/* SHOP HEADER */}
              <thead>
                <tr className="bg-slate-100">
                  <th colSpan={14} className="border p-2 text-left">
                    SHOP NAME: {selectedShop}
                  </th>
                </tr>

                <tr className="bg-slate-200">
                  <th className="border p-2">SERIAL</th>
                  <th className="border p-2">BARCODE</th>
                  <th className="border p-2">CATEGORY</th>
                  <th className="border p-2">SUB CATEGORY</th>
                  <th className="border p-2">SUB SUBCATEGORY</th>
                  <th className="border p-2">STYLE CODE</th>
                  <th className="border p-2">COLOR</th>
                  <th className="border p-2">SIZE</th>
                  <th className="border p-2">BRAND</th>
                  <th className="border p-2">SUPPLIER</th>
                  <th className="border p-2">STORE</th>
                  <th className="border p-2">CPU</th>
                  <th className="border p-2">MRP</th>
                  <th className="border p-2">BAL QTY</th>

                </tr>

              </thead>

              <tbody>

                {reportData.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-100">
                    <td className="border p-1">{index + 1}</td>
                    <td className="border p-1">{row.BARCODE}</td>
                    <td className="border p-1">{row.CATEGORY}</td>
                    <td className="border p-1">{row.SUB_CATEGORY}</td>
                    <td className="border p-1">{row.SUB_SUBCATEGORY}</td>
                    <td className="border p-1">{row.STYLE_CODE}</td>
                    <td className="border p-1">{row.COLOR}</td>
                    <td className="border p-1">{row.SIZE}</td>
                    <td className="border p-1">{row.BRAND}</td>
                    <td className="border p-1">{row.SUPNAME}</td>
                    <td className="border p-1">{row.STORE_NAME}</td>
                    <td className="border p-1">{row.CPU}</td>
                    <td className="border p-1">{row.MRP}</td>
                    <td className="border p-1">{row.BALQTY}</td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        </>
      )}
    </>
  );
};