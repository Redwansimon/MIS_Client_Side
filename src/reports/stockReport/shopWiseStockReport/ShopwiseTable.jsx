

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


// import React from "react";

// export const ShopwiseTable = ({
//   reportData = [],
//   selectedShop,
//   currentPage,
//   totalPages,
//   onPageChange,
// }) => {
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

//           {/* TABLE */}
//           <div className="overflow-x-auto mt-6">
//             <table className="w-full text-xs border">
//               <thead>
//                 <tr className="bg-slate-100">
//                   <th colSpan={13} className="border p-2 text-left">
//                     SHOP NAME: {selectedShop}
//                   </th>
//                 </tr>
//                 <tr className="bg-slate-200">
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

//           {/* PAGINATION */}
//           <div className="flex items-center justify-between mt-4 px-2 pb-6">

//             <p className="text-xs text-slate-500">
//               Page {currentPage} of {totalPages}
//             </p>

//             <div className="flex gap-2">
//               <button
//                 onClick={() => onPageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className="px-3 py-1 border rounded text-xs disabled:opacity-40 hover:bg-purple-50"
//               >
//                 Previous
//               </button>

//               <button
//                 onClick={() => onPageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className="px-3 py-1 border rounded text-xs disabled:opacity-40 hover:bg-purple-50"
//               >
//                 Next
//               </button>
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

// import React, { useEffect, useRef } from "react";

// export const ShopwiseTable = ({
//   reportData = [],
//   selectedShop,
//   currentPage,
//   totalPages,
//   loadingMore,
//   onLoadMore,
// }) => {

//   // এই ref টা table এর একদম শেষে একটা div এ বসাবো
//   const observerRef = useRef(null);

//   useEffect(() => {

//     // আগের observer থাকলে disconnect করো
//     if (observerRef.current) observerRef.current.disconnect();

//     // শেষ element টা খোঁজো
//     const sentinel = document.getElementById("scroll-sentinel");
//     if (!sentinel) return;

//     // IntersectionObserver — sentinel দেখা গেলে আরো data load করো
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         const first = entries[0];
//         if (first.isIntersecting && currentPage < totalPages && !loadingMore) {
//           onLoadMore(currentPage + 1);
//         }
//       },
//       { threshold: 1.0 }
//     );

//     observerRef.current.observe(sentinel);

//     return () => {
//       if (observerRef.current) observerRef.current.disconnect();
//     };

//   }, [currentPage, totalPages, loadingMore, onLoadMore]);

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

//           {/* TABLE */}
//           <div className="overflow-x-auto mt-6">
//             <table className="w-full text-xs border">
//               <thead>
//                 <tr className="bg-slate-100">
//   <th colSpan={13} className="border p-2 text-left">
//     SHOP NAME: {selectedShop === "ALL" ? "ALL SHOPS" : selectedShop}
//   </th>
// </tr>

//                 <tr className="bg-slate-200">
//                   <th className="border p-2">SERIAL</th>
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
//                     <td className="border p-1">{index + 1}</td>
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

//           {/* SENTINEL — এই div দেখা গেলে নতুন data load হবে */}
//           <div id="scroll-sentinel" className="h-10 mt-2" />

//           {/* LOADING MORE INDICATOR */}
//           {loadingMore && (
//             <div className="text-center py-4 text-xs text-purple-600 font-semibold animate-pulse">
//               Loading more data...
//             </div>
//           )}

//           {/* DONE */}
//           {!loadingMore && currentPage >= totalPages && (
//             <div className="text-center py-4 text-xs text-slate-400">
//               All data loaded — {reportData.length} rows
//             </div>
//           )}
//         </>
//       ) : (
//         <div className="text-center mt-10 text-slate-400 text-sm">
//           No data found for selected shop.
//         </div>
//       )}
//     </>
//   );
// };

import React from "react";

export const ShopwiseTable = ({
  reportData = [],
  selectedShop,
  loadingMore,
  allLoaded,
  loadedRows,
}) => {
  return (
    <>
      {reportData.length > 0 ? (
        <>
          {/* HEADER */}
          <div className="text-center mt-6">
            <h1 className="text-2xl font-bold">MBRELLA</h1>
            <p className="text-xs text-slate-500">
              HOUSE: 19, ROAD: 03, SECTOR: 03, UTTARA, DHAKA
            </p>
            <h2 className="text-lg font-bold mt-3 uppercase">
              Shop Wise Stock Report
            </h2>
          </div>

          {/* LOADING MORE INDICATOR */}
          {loadingMore && (
            <div className="flex items-center gap-3 mt-4 px-2 text-xs text-purple-600 font-semibold">
              <div className="w-3 h-3 rounded-full bg-purple-600 animate-bounce" />
              <span>Loading data in background... {loadedRows} rows loaded</span>
            </div>
          )}

          {/* ALL LOADED */}
          {allLoaded && (
            <div className="mt-4 px-2 text-xs text-green-600 font-semibold">
              ✓ All data loaded — {loadedRows} rows
            </div>
          )}

          {/* TABLE */}
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-xs border">
              <thead>
                <tr className="bg-slate-100">
                  <th colSpan={14} className="border p-2 text-left">
                    SHOP NAME: {selectedShop === "ALL" ? "ALL SHOPS" : selectedShop}
                  </th>
                </tr>
                <tr className="bg-slate-200">
                  <th className="border p-2">SL</th>
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
                    <td className="border p-1 text-center">{index + 1}</td>
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
      ) : (
        <div className="text-center mt-10 text-slate-400 text-sm">
          No data found for selected shop.
        </div>
      )}
    </>
  );
};