

// import React, { useEffect, useRef, useState } from 'react'

// const NAV = [
//     {
//         key: "HOME",
//         label: "HOME",
//         sub: [],
//     },

//     {
//         key: "STOCK",
//         label: "STOCK REPORT",
//         sub: [
//             {
//                 key: "SHOP_WISE",
//                 label: "Shop Wise",
//                 sub_sub: [],
//             },

//             {
//                 key: "STOCK_SUMMARY",
//                 label: "Stock Summary",
//                 sub_sub: [],
//             },

//             {
//                 key: "PRODUCT_GROUP_WISE",
//                 label: "Product Group Wise",
//                 sub_sub: [
//                     {
//                         key: "PRODUCT_GROUP_REGULAR",
//                         label: "Regular",
//                     },
//                 ],
//             },

//             {
//                 key: "PRODUCT_NAME_WISE",
//                 label: "Product Name Wise",
//                 sub_sub: [
//                     {
//                         key: "PRODUCT_NAME_REGULAR",
//                         label: "Regular",
//                     },
//                 ],
//             },

//             {
//                 key: "STYLE_WISE",
//                 label: "Style Wise",
//                 sub_sub: [],
//             },

//             {
//                 key: "SUPPLIER_WISE",
//                 label: "Supplier Wise",
//                 sub_sub: [
//                     {
//                         key: "SUPPLIER_DETAILS",
//                         label: "Details",
//                     },

//                     {
//                         key: "SUPPLIER_SUMMARY",
//                         label: "Summary",
//                     },
//                 ],
//             },

//             {
//                 key: "SIZE_BREAKDOWN",
//                 label: "Size Breakdown",
//                 sub_sub: [],
//             },

//             {
//                 key: "UNRELEASED_REPORT",
//                 label: "Unreleased Report",
//                 sub_sub: [
//                     {
//                         key: "UNRELEASED",
//                         label: "Unreleased",
//                     },

//                     {
//                         key: "PRODUCTION_PENDING",
//                         label: "Production Pending",
//                     },
//                 ],
//             },
//         ],
//     },

//     {
//         key: "RECEIVE",
//         label: "RECEIVE REPORT",
//         sub: [
//             {
//                 key: "RECEIVE_MONTH_WISE",
//                 label: "Month Wise",
//                 sub_sub: [],
//             },

//             {
//                 key: "RECEIVE_DATE_WISE",
//                 label: "Date Wise(CLOUD)",
//                 sub_sub: [],
//             },

//             {
//                 key: "RECEIVE_SHOP_WISE",
//                 label: "Shop Wise",
//                 sub_sub: [],
//             },

//             {
//                 key: "RECEIVE_CHALLAN_WISE",
//                 label: "Challan Wise",
//                 sub_sub: [],
//             },

//             {
//                 key: "RECEIVE_PRODUCT_GROUP_WISE",
//                 label: "Product Group Wise",
//                 sub_sub: [
//                     {
//                         key: "RECEIVE_PRODUCT_GROUP_REGULAR",
//                         label: "Regular",
//                     },

//                     {
//                         key: "RECEIVE_PRODUCT_GROUP_TYPE_WISE",
//                         label: "Type Wise",
//                     },
//                 ],
//             },

//             {
//                 key: "RECEIVE_PRODUCT_NAME_WISE",
//                 label: "Product Name Wise",
//                 sub_sub: [
//                     {
//                         key: "RECEIVE_PRODUCT_NAME_REGULAR",
//                         label: "Regular",
//                     },

//                     {
//                         key: "RECEIVE_PRODUCT_NAME_TYPE_WISE",
//                         label: "Type Wise",
//                     },
//                 ],
//             },

//             {
//                 key: "RECEIVE_STYLE_WISE",
//                 label: "Style Wise",
//                 sub_sub: [],
//             },

//             {
//                 key: "RECEIVE_SUPPLIER_WISE",
//                 label: "Supplier Wise",
//                 sub_sub: [],
//             },
//         ],
//     },
// ]





// export const Navigation = () => {

//     const [active, setActive] = useState("HOME");
//     const [activeSub, setActiveSub] = useState("");

//     const dropdownRef = useRef(null);

//     const current = NAV.find((n) => n.key === active);
// console.log('current nav',current);
//     const activeSubItem = current?.sub.find(
//         (s) => s.key === activeSub
//     );
//     console.log('current subnav',activeSubItem);
//     // CLOSE DROPDOWN WHEN CLICK OUTSIDE
//     useEffect(() => {

//         const handleClickOutside = (event) => {

//             if (
//                 dropdownRef.current &&
//                 !dropdownRef.current.contains(event.target)
//             ) {
//                 setActiveSub("");
//             }
//         };

//         document.addEventListener(
//             "mousedown",
//             handleClickOutside
//         );

//         return () => {
//             document.removeEventListener(
//                 "mousedown",
//                 handleClickOutside
//             );
//         };

//     }, []);

//     return (

//         <div className="min-h-screen hover:bg-purple-50">

//             {/* MAIN NAVIGATION */}
//             <nav className="px-6 pt-5 flex gap-3 flex-wrap">

//                 {/* HOME BUTTON */}
//                 <button

//                     onClick={() => {
//                         setActive("HOME");
//                         setActiveSub("");
//                     }}

//                     className={`

//                     relative overflow-hidden
//                     w-12 h-12 rounded-xl
//                     flex items-center justify-center
//                     text-xl
//                     transition-all duration-300
//                     hover:scale-105

//                     before:absolute before:top-0 before:-left-[120%]
//                     before:h-full before:w-[50%]
//                     before:skew-x-[-20deg]
//                     before:bg-gradient-to-r
//                     before:from-transparent
//                     before:via-blue-400/40
//                     before:to-transparent

//                     hover:before:animate-[shine_1.2s_linear_infinite]

//                     ${active === "HOME"
//                             ? "bg-white shadow-lg"
//                             : "bg-slate-200 hover:bg-slate-300"
//                         }

//                     `}
//                 >
//                     <span className="relative z-10">
//                         🏠
//                     </span>

//                 </button>

//                 {/* MAIN NAV BUTTONS */}

//                 {NAV.filter((n) => n.key !== "HOME").map((n) => {

//                     const isActive = active === n.key;

//                     return (
//                         <button
//                             key={n.key}

//                             onClick={() => {
//                                 setActive(n.key);
//                                 setActiveSub("");
//                             }}

//                             className={`

//                             relative overflow-hidden
//                             px-5 h-12 rounded-xl
//                             text-sm font-bold tracking-wide
//                             transition-all duration-300
//                             hover:scale-105

//                             before:absolute before:top-0 before:-left-[120%]
//                             before:h-full before:w-[50%]
//                             before:skew-x-[-20deg]
//                             before:bg-gradient-to-r
//                             before:from-transparent
//                             before:via-blue-400/40
//                             before:to-transparent

//                             hover:before:animate-[shine_1.2s_linear_infinite]

//                             ${isActive
//                                     ? "bg-white text-slate-800 shadow-lg"
//                                     : "bg-slate-200 text-slate-600 hover:bg-slate-300"
//                                 }

//                             `}
//                         >

//                             <span className="relative z-10">
//                                 {n.label}
//                             </span>

//                         </button>
//                     );
//                 })}
//             </nav>

//             {/* SUB NAVIGATION */}
//             {current && current.sub.length > 0 && (

//                 <div className="px-8 mt-6 flex gap-5 flex-wrap items-center">

//                     {/* SUB HOME BUTTON */}
//                     <button
//                         onClick={() => setActiveSub("")}
//                         className="px-4 py-2 rounded-lg bg-white text-slate-700 text-sm font-semibold hover:hover:bg-purple-50 transition"
//                     >
//                         HOME
//                     </button>

//                     {current.sub.map((s) => (

//                         <div
//                             key={s.key}
//                             ref={activeSub === s.key ? dropdownRef : null}
//                             className="relative"
//                         >

//                             <button
//                                 onClick={() => {

//                                     if (s.sub_sub.length > 0) {

//                                         setActiveSub(
//                                             activeSub === s.key
//                                                 ? ""
//                                                 : s.key
//                                         );

//                                     } else {

//                                         setActiveSub(s.key);

//                                         console.log(
//                                             "Navigate to:",
//                                             s.key
//                                         );
//                                     }
//                                 }}

//                                 className={`

//                                 relative overflow-hidden
//                                 px-4 py-2 rounded-lg
//                                 text-sm font-medium
//                                 transition-all duration-300
//                                 hover:scale-105
//                                 flex items-center gap-2

//                                 before:absolute before:top-0 before:-left-[120%]
//                                 before:h-full before:w-[50%]
//                                 before:skew-x-[-20deg]
//                                 before:bg-gradient-to-r
//                                 before:from-transparent
//                                 before:via-cyan-400/40
//                                 before:to-transparent

//                                 hover:before:animate-[shine_1.2s_linear_infinite]

//                                 ${activeSub === s.key
//                                         ? "bg-purple-100 text-purple-700"
//                                         : "bg-white text-slate-600 hover:hover:bg-purple-50"
//                                     }

//                                 `}
//                             >

//                                 <span className="relative z-10">
//                                     {s.label}
//                                 </span>

//                                 {/* DOWN ARROW */}
//                                 {s.sub_sub.length > 0 && (
//                                     <span
//                                         className={`

//                                         relative z-10 text-xs
//                                         transition-transform duration-300

//                                         ${activeSub === s.key
//                                                 ? "rotate-180"
//                                                 : "rotate-0"
//                                             }

//                                         `}
//                                     >
//                                         ▼
//                                     </span>
//                                 )}

//                             </button>

//                             {/* SUB SUB NAVIGATION */}
//                             {activeSub === s.key &&
//                                 s.sub_sub.length > 0 && (

//                                     <div className="absolute top-14 left-0 min-w-[220px] bg-white rounded-xl shadow-2xl border border-slate-200 p-2 z-50">

//                                         {s.sub_sub.map((sub) => (

//                                             <button
//                                                 key={sub.key}

//                                                 onClick={() => {

//                                                     console.log(
//                                                         "Navigate to:",
//                                                         sub.key, current.key , activeSubItem.key
//                                                     );

//                                                     setActiveSub(sub.key);
//                                                 }}

//                                                 className="w-full text-left px-4 py-3 rounded-lg text-sm text-slate-600 hover:hover:bg-purple-50 transition"
//                                             >
//                                                 {sub.label}
//                                             </button>

//                                         ))}

//                                     </div>
//                                 )}

//                         </div>
//                     ))}
//                 </div>
//             )}

//             {/* CONTENT */}
//             <main className="px-8 py-6">

//                 {/* BREADCRUMB */}
//                 <div className="text-sm mb-5">

//                     <span className="text-purple-600 font-semibold">
//                         {current?.label}
//                     </span>

//                     {activeSub && (
//                         <>
//                             <span className="text-slate-400 mx-2">
//                                 |
//                             </span>

//                             <span className="text-slate-600">
//                                 {activeSubItem?.label || activeSub}
//                             </span>
//                         </>
//                     )}
//                 </div>

//                 {/* FILTER SECTION */}
//                 <div className="bg-slate-50 rounded-lg p-6 flex flex-wrap items-center gap-4">

//                     <select className="flex-1 min-w-[200px] h-11 px-3 rounded-md border border-slate-200 bg-white text-sm text-slate-500">
//                         <option>Select Shop</option>
//                     </select>

//                     <label className="flex items-center gap-2 flex-1 min-w-[220px]">

//                         <span className="text-xs font-semibold text-slate-500">
//                             FROM
//                         </span>

//                         <input
//                             type="date"
//                             className="flex-1 h-11 px-3 rounded-md border border-slate-200 bg-white text-sm"
//                         />

//                     </label>

//                     <label className="flex items-center gap-2 flex-1 min-w-[220px]">

//                         <span className="text-xs font-semibold text-slate-500">
//                             TO
//                         </span>

//                         <input
//                             type="date"
//                             className="flex-1 h-11 px-3 rounded-md border border-slate-200 bg-white text-sm"
//                         />

//                     </label>

//                     <button className="h-11 px-6 rounded-md bg-indigo-500 hover:bg-indigo-600 text-gray-800 text-sm font-bold tracking-wide">
//                         VIEW REPORT
//                     </button>

//                 </div>

//             </main>

//         </div>
//     )
// }