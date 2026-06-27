

// import React from "react";

// export const ShopwiseTable = ({ reportData = [], selectedShop }) => {
//   return (
//     <>
//       {/* HEADER */}
//       {reportData.length > 0 && (
//         <>
//           <div className="text-center mt-6">

//             <h1 className="text-2xl font-bold">MBRELLA</h1>

//             <p className="text-xs text-slate-500">
//               HOUSE: 19, ROAD: 03, SECTOR: 03, UTTARA, DHAKA
//             </p>

//             <h2 className="text-lg font-bold mt-3 uppercase">
//               Shop Wise Stock Report
//             </h2>

//           </div>

//           {/* TABLE */}
//           <div className="overflow-x-auto mt-6">

//             <table className="w-full text-xs border">

//               {/* SHOP HEADER */}
//               <thead>
//                 <tr className="bg-slate-100">
//                   <th colSpan={14} className="border p-2 text-left">
//                     SHOP NAME: {selectedShop}
//                   </th>
//                 </tr>

//                 <tr className="bg-slate-200">
//                   {/* <th className="border p-2">SERIAL</th> */}
//                   <th className="border p-2">BARCODE</th>
//                   <th className="border p-2">CATEGORY</th>
//                   <th className="border p-2">SUB CATEGORY</th>
//                   <th className="border p-2">SUB SUBCATEGORY</th>
//                   <th className="border p-2">STYLE CODE</th>
//                   <th className="border p-2">COLOR</th>
//                   <th className="border p-2">SIZE</th>
//                   <th className="border p-2">BRAND</th>
//                   <th className="border p-2">SUPPLIER</th>
//                   <th className="border p-2">STORE</th>
//                   <th className="border p-2">CPU</th>
//                   <th className="border p-2">MRP</th>
//                   <th className="border p-2">BAL QTY</th>

//                 </tr>

//               </thead>

//               <tbody>

//                 {reportData.map((row, index) => (
//                   <tr key={index} className="hover:bg-slate-100">
//                     {/* <td className="border p-1">{index + 1}</td> */}
//                     <td className="border p-1">{row.BARCODE}</td>
//                     <td className="border p-1">{row.CATEGORY}</td>
//                     <td className="border p-1">{row.SUB_CATEGORY}</td>
//                     <td className="border p-1">{row.SUB_SUBCATEGORY}</td>
//                     <td className="border p-1">{row.STYLE_CODE}</td>
//                     <td className="border p-1">{row.COLOR}</td>
//                     <td className="border p-1">{row.SIZE}</td>
//                     <td className="border p-1">{row.BRAND}</td>
//                     <td className="border p-1">{row.SUPNAME}</td>
//                     <td className="border p-1">{row.STORE_NAME}</td>
//                     <td className="border p-1">{row.CPU}</td>
//                     <td className="border p-1">{row.MRP}</td>
//                     <td className="border p-1">{row.BALQTY}</td>

//                   </tr>
//                 ))}

//               </tbody>

//             </table>

//           </div>
//         </>
//       )}
//     </>
//   );
// };


// import React, { useRef } from "react";
// import { useVirtualizer } from "@tanstack/react-virtual";

// export const ShopwiseTable = ({
//   reportData = [],
//   selectedShop,
//   loadingMore,
//   allLoaded,
//   loadedRows,
// }) => {
//   const parentRef = useRef(null);

//   const rowVirtualizer = useVirtualizer({
//     count: reportData.length,
//     getScrollElement: () => parentRef.current,
//     estimateSize: () => 28, // প্রতিটা row এর height (px)
//     overscan: 20,           // extra rows buffer
//   });

//   const virtualItems = rowVirtualizer.getVirtualItems();

//   return (
//     <>
//       {reportData.length > 0 ? (
//         <>
//           {/* HEADER */}
//           <div className="text-center mt-6">
//             <h1 className="text-2xl font-bold">MBRELLA</h1>
//             <p className="text-xs text-slate-500">
//               HOUSE: 19, ROAD: 03, SECTOR: 03, UTTARA, DHAKA
//             </p>
//             <h2 className="text-lg font-bold mt-3 uppercase">
//               Shop Wise Stock Report
//             </h2>
//           </div>

//           {/* STATUS */}
//           {loadingMore && (
//             <div className="flex items-center gap-3 mt-4 px-2 text-xs text-purple-600 font-semibold">
//               <div className="w-3 h-3 rounded-full bg-purple-600 animate-bounce" />
//               <span>Loading... {loadedRows.toLocaleString()} rows loaded</span>
//             </div>
//           )}
//           {allLoaded && (
//             <div className="mt-4 px-2 text-xs text-green-600 font-semibold">
//               ✓ All data loaded — {loadedRows.toLocaleString()} rows
//             </div>
//           )}

//           {/* FIXED HEADER TABLE */}
//           <div className="overflow-x-auto mt-4">
//             <table className="w-full text-xs border-collapse">
//               <thead>
//                 <tr className="bg-slate-100">
//                   <th colSpan={14} className="border p-2 text-left">
//                     SHOP NAME: {selectedShop === "ALL" ? "ALL SHOPS" : selectedShop}
//                   </th>
//                 </tr>
//                 <tr className="bg-slate-200">
//                   {["SL","BARCODE","CATEGORY","SUB CATEGORY","SUB SUBCATEGORY",
//                     "STYLE CODE","COLOR","SIZE","BRAND","SUPPLIER","STORE",
//                     "CPU","MRP","BAL QTY"].map((h) => (
//                     <th key={h} className="border p-2 whitespace-nowrap">{h}</th>
//                   ))}
//                 </tr>
//               </thead>
//             </table>
//           </div>

//           {/* VIRTUAL SCROLL BODY */}
//           <div
//             ref={parentRef}
//             className="overflow-auto border"
//             style={{ height: "600px" }} // fixed height — এটা দরকার
//           >
//             <div
//               style={{
//                 height: `${rowVirtualizer.getTotalSize()}px`,
//                 position: "relative",
//               }}
//             >
//               {virtualItems.map((virtualRow) => {
//                 const row = reportData[virtualRow.index];
//                 return (
//                   <div
//                     key={virtualRow.key}
//                     data-index={virtualRow.index}
//                     ref={rowVirtualizer.measureElement}
//                     style={{
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       width: "100%",
//                       transform: `translateY(${virtualRow.start}px)`,
//                     }}
//                   >
//                     <table className="w-full text-xs border-collapse">
//                       <tbody>
//                         <tr className="hover:bg-slate-100">
//                           <td className="border p-1 text-center w-10">{virtualRow.index + 1}</td>
//                           <td className="border p-1">{row.BARCODE}</td>
//                           <td className="border p-1">{row.CATEGORY}</td>
//                           <td className="border p-1">{row.SUB_CATEGORY}</td>
//                           <td className="border p-1">{row.SUB_SUBCATEGORY}</td>
//                           <td className="border p-1">{row.STYLE_CODE}</td>
//                           <td className="border p-1">{row.COLOR}</td>
//                           <td className="border p-1">{row.SIZE}</td>
//                           <td className="border p-1">{row.BRAND}</td>
//                           <td className="border p-1">{row.SUPNAME}</td>
//                           <td className="border p-1">{row.STORE_NAME}</td>
//                           <td className="border p-1">{row.CPU}</td>
//                           <td className="border p-1">{row.MRP}</td>
//                           <td className="border p-1">{row.BALQTY}</td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </>
//       ) : (
//         <div className="text-center mt-10 text-slate-400 text-sm">
//           No data found for selected shop.
//         </div>
//       )}
//     </>
//   );
// };


// import React, { useRef, useState } from "react";
// import { useVirtualizer } from "@tanstack/react-virtual";


// export const ShopwiseTable = ({
//   reportData = [],
//   selectedShop,
//   loadingMore,
//   allLoaded,
//   loadedRows,
// }) => {
//   const parentRef = useRef(null);
//   const [pdfLoading, setPdfLoading] = useState(false);

//   // ─── EXCEL DOWNLOAD ───────────────────────────────────────
//   // Frontend Excel button
// const downloadExcel = () => {
//   const url = `http://localhost:5000/api/stockreports/download/excel?shop=${selectedShop}`;
//   window.open(url, "_blank");
// };
//   // ─── PDF DOWNLOAD ─────────────────────────────────────────
//   const downloadPDF = () => {
//   // সরাসরি server এর link এ যাও — browser auto download করবে
//   const url = `http://localhost:5000/api/stockreports/download/pdf?shop=${selectedShop}`;
//   window.open(url, "_blank");
// };
//   // ─── VIRTUALIZER ──────────────────────────────────────────
//   const rowVirtualizer = useVirtualizer({
//     count: reportData.length,
//     getScrollElement: () => parentRef.current,
//     estimateSize: () => 28,
//     overscan: 20,
//   });

//   const virtualItems = rowVirtualizer.getVirtualItems();

//   return (
//     <>
//       {reportData.length > 0 ? (
//         <>
//           {/* PAGE HEADER */}
//           <div className="text-center mt-6">
//             <h1 className="text-2xl font-bold">MBRELLA</h1>
//             <p className="text-xs text-slate-500">
//               HOUSE: 19, ROAD: 03, SECTOR: 03, UTTARA, DHAKA
//             </p>
//             <h2 className="text-lg font-bold mt-3 uppercase">
//               Shop Wise Stock Report
//             </h2>
//           </div>

//           {/* STATUS + DOWNLOAD BUTTONS */}
//           <div className="flex items-center justify-between mt-4 px-2">
//             <div>
//               {loadingMore && (
//                 <div className="flex items-center gap-2 text-xs text-purple-600 font-semibold">
//                   <div className="w-3 h-3 rounded-full bg-purple-600 animate-bounce" />
//                   <span>Loading... {loadedRows.toLocaleString()} rows loaded</span>
//                 </div>
//               )}
//               {allLoaded && (
//                 <div className="text-xs text-green-600 font-semibold">
//                   ✓ All data loaded — {loadedRows.toLocaleString()} rows
//                 </div>
//               )}
//             </div>

//             {allLoaded && (
//               <div className="flex gap-2">
//                 <button
//                   onClick={downloadExcel}
//                   className="flex items-center gap-1 px-4 py-2 bg-green-600 text-white text-xs rounded hover:bg-green-700"
//                 >
//                   ⬇ Excel
//                 </button>
//                 <button
//                   onClick={downloadPDF}
//                   disabled={pdfLoading}
//                   className="flex items-center gap-1 px-4 py-2 bg-red-600 text-white text-xs rounded hover:bg-red-700 disabled:opacity-60"
//                 >
//                   {pdfLoading ? "Generating..." : "⬇ PDF"}
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* SINGLE TABLE — header sticky, body virtual */}
//           <div
//             ref={parentRef}
//             className="overflow-auto mt-4 border"
//             style={{ height: "1000px" }}
//           >
//             <table className="text-xs border-collapse whitespace-nowrap" style={{ minWidth: "100%" }}>

//               {/* STICKY HEADER */}
//               <thead className="sticky top-0 z-10">
//                 <tr className="bg-slate-100">
//                   <th colSpan={14} className="border p-2 text-left">
//                     SHOP NAME: {selectedShop === "ALL" ? "ALL SHOPS" : selectedShop}
//                   </th>
//                 </tr>
//                 <tr className="bg-slate-200">
//                   {[
//                     "SL", "BARCODE", "CATEGORY", "SUB CATEGORY", "SUB SUBCATEGORY",
//                     "STYLE CODE", "COLOR", "SIZE", "BRAND", "SUPPLIER",
//                     "STORE", "CPU", "MRP", "BAL QTY"
//                   ].map((h) => (
//                     <th key={h} className="border p-2">{h}</th>
//                   ))}
//                 </tr>
//               </thead>

//               <tbody>
//                 {/* Top spacer — scroll এর আগের rows এর height */}
//                 {virtualItems.length > 0 && (
//                   <tr>
//                     <td
//                       colSpan={14}
//                       style={{ height: `${virtualItems[0].start}px`, padding: 0, border: "none" }}
//                     />
//                   </tr>
//                 )}

//                 {/* Visible rows only */}
//                 {virtualItems.map((virtualRow) => {
//                   const row = reportData[virtualRow.index];
//                   return (
//                     <tr key={virtualRow.key} className="hover:bg-slate-100">
//                       <td className="border p-1 text-center">{virtualRow.index + 1}</td>
//                       <td className="border p-1">{row.BARCODE}</td>
//                       <td className="border p-1">{row.CATEGORY}</td>
//                       <td className="border p-1">{row.SUB_CATEGORY}</td>
//                       <td className="border p-1">{row.SUB_SUBCATEGORY}</td>
//                       <td className="border p-1">{row.STYLE_CODE}</td>
//                       <td className="border p-1">{row.COLOR}</td>
//                       <td className="border p-1">{row.SIZE}</td>
//                       <td className="border p-1">{row.BRAND}</td>
//                       <td className="border p-1">{row.SUPNAME}</td>
//                       <td className="border p-1">{row.STORE_NAME}</td>
//                       <td className="border p-1">{row.CPU}</td>
//                       <td className="border p-1">{row.MRP}</td>
//                       <td className="border p-1">{row.BALQTY}</td>
//                     </tr>
//                   );
//                 })}

//                 {/* Bottom spacer — scroll এর পরের rows এর height */}
//                 {virtualItems.length > 0 && (
//                   <tr>
//                     <td
//                       colSpan={14}
//                       style={{
//                         height: `${
//                           rowVirtualizer.getTotalSize() -
//                           (virtualItems[virtualItems.length - 1]?.end ?? 0)
//                         }px`,
//                         padding: 0,
//                         border: "none",
//                       }}
//                     />
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </>
//       ) : (
//         <div className="text-center mt-10 text-slate-400 text-sm">
//           No data found for selected shop.
//         </div>
//       )}
//     </>
//   );
// };


import React, { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

const TABLE_HEADERS = [
  "SL",
  "BARCODE",
  "CATEGORY",
  "SUB CATEGORY",
  "SUB SUBCATEGORY",
  "STYLE CODE",
  "COLOR",
  "SIZE",
  "BRAND",
  "SUPPLIER",
  "STORE",
  "CPU",
  "MRP",
  "BAL QTY",
];

export const ShopwiseTable = ({
  reportData = [],
  selectedShop,
  loadingMore,
  allLoaded,
  loadedRows,
}) => {
  const parentRef = useRef(null);

  // Excel Download
  const downloadExcel = () => {
    window.open(
      `http://localhost:5000/api/stockreports/download/excel?shop=${selectedShop}`,
      "_blank"
    );
  };

  // PDF Download
  const downloadPDF = () => {
    window.open(
      `http://localhost:5000/api/stockreports/download/pdf?shop=${selectedShop}`,
      "_blank"
    );
  };

  // TanStack Virtual
  const rowVirtualizer = useVirtualizer({
    count: reportData.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 28,
    overscan: 20,
  });

  const virtualItems = rowVirtualizer.getVirtualItems();

  return (
    <>
      {reportData.length > 0 ? (
        <>
          {/* REPORT HEADER */}
          <div className="text-center mt-6">
            <h1 className="text-2xl font-bold">MBRELLA</h1>

            <p className="text-xs text-slate-500">
              HOUSE: 19, ROAD: 03, SECTOR: 03, UTTARA, DHAKA
            </p>

            <h2 className="text-lg font-bold mt-3 uppercase">
              Shop Wise Stock Report
            </h2>
          </div>

          {/* STATUS & DOWNLOAD */}
          <div className="flex items-center justify-between mt-4 px-2">
            <div>
              {loadingMore && (
                <div className="flex items-center gap-2 text-xs text-purple-600 font-semibold">
                  <div className="w-3 h-3 rounded-full bg-purple-600 animate-bounce"></div>

                  <span>
                    Loading... {loadedRows.toLocaleString()} rows loaded
                  </span>
                </div>
              )}

              {allLoaded && (
                <div className="text-xs text-green-600 font-semibold">
                  ✓ All data loaded ({loadedRows.toLocaleString()} rows)
                </div>
              )}
            </div>

            {allLoaded && (
              <div className="flex gap-2">
                <button
                  onClick={downloadExcel}
                  className="px-4 py-2 bg-green-600 text-white text-xs rounded hover:bg-green-700"
                >
                  ⬇ Excel
                </button>

                <button
                  onClick={downloadPDF}
                  className="px-4 py-2 bg-red-600 text-white text-xs rounded hover:bg-red-700"
                >
                  ⬇ PDF
                </button>
              </div>
            )}
          </div>

          {/* TABLE */}
          <div
            ref={parentRef}
            className="overflow-auto mt-4 border"
            style={{ height: "1000px" }}
          >
            <table
              className="text-xs border-collapse whitespace-nowrap"
              style={{ minWidth: "100%" }}
            >
              {/* HEADER */}
              <thead className="sticky top-0 z-10">
                <tr className="bg-slate-100">
                  <th colSpan={14} className="border p-2 text-left">
                    SHOP NAME :{" "}
                    {selectedShop === "ALL" ? "ALL SHOPS" : selectedShop}
                  </th>
                </tr>

                <tr className="bg-slate-200">
                  {TABLE_HEADERS.map((header) => (
                    <th key={header} className="border p-2">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {/* TOP SPACER */}
                {virtualItems.length > 0 && (
                  <tr>
                    <td
                      colSpan={14}
                      style={{
                        height: `${virtualItems[0].start}px`,
                        padding: 0,
                        border: "none",
                      }}
                    />
                  </tr>
                )}

                {/* VISIBLE ROWS */}
                {virtualItems.map((virtualRow) => {
                  const row = reportData[virtualRow.index];

                  return (
                    <tr key={virtualRow.key} className="hover:bg-slate-100">
                      <td className="border p-1 text-center">
                        {virtualRow.index + 1}
                      </td>
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
                  );
                })}

                {/* BOTTOM SPACER */}
                {virtualItems.length > 0 && (
                  <tr>
                    <td
                      colSpan={14}
                      style={{
                        height: `${
                          rowVirtualizer.getTotalSize() -
                          (virtualItems[virtualItems.length - 1]?.end ?? 0)
                        }px`,
                        padding: 0,
                        border: "none",
                      }}
                    />
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="text-center mt-10 text-slate-400 text-sm">
          No data found for selected shop.
        </div>
      )}
    </>
  );
};

export default ShopwiseTable;