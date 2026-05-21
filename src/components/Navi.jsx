

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

<div class="m-section">
											<div class="m-section__content">
												<div class="table-responsive">
													<table class="table">
														<thead>
															<tr>
																<th style="text-align:center;border:none !important;"><img class="m-list-pics m-list-pics--sm m--padding-left-20" src="../img/Mbrella.jpg" alt="MBRELLA" style="height:45px;width:270px;"></th>
															</tr>
															<tr>
																<th style="font-size:10px;text-align:center;border:none !important;">HOUSE: 19, ROAD: 03, SECTOR: 03, UTTARA, DHAKA-1230, BANGLADESH.</th>
															</tr>
															<tr>
																<th style="font-weight:700;text-align:center;border:none !important;">SHOP WISE SUMMARISED STOCK REPORT</th>
															</tr>
														</thead>
													</table>
																										<table class="table table-bordered" style="margin-bottom:5px !important;">
														<thead>
															<tr>
																<th colspan="3" style="font-weight:700;font-size:13px;padding:7px 0px 7px 10px !important;text-transform:Uppercase;border-right:0px !important;"><i class="m-nav__link-icon la la-slack"></i> SHOP NAME : KASHIMPUR</th>
																<th colspan="3" style="font-size:10px;text-align:right;padding:7px 10px 7px 0px !important;border-left:0px !important;">PRINT DATE : 21-05-2026 09:48:41 AM</th>
															</tr>
															<tr class="headBGC" style="font-size:11px;">
																<th style="font-weight:700;padding-left:10px;width:18%;">P. GROUP</th>
																<th style="font-weight:700;padding-left:10px;width:26%;">PRODUCT NAME</th>
																<th style="font-weight:700;text-align:center;width:13%;">NO OF DESIGN</th>
																<th style="font-weight:700;padding-right:10px;text-align:right;width:13%;">CURR. BAL</th>
																<th style="font-weight:700;padding-right:10px;text-align:right;width:15%;">COST VALUE</th>
																<th style="font-weight:700;padding-right:10px;text-align:right;width:15%;">MRP VALUE</th>
															</tr>
														</thead>
														<tbody>
														<tr style="font-size:11px;"><td style="padding-left:10px;">ACCESSORIES</td><td style="padding-left:10px;">ART PAPER BAG</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">95</td><td style="padding-right:10px;text-align:right;">0</td><td style="padding-right:10px;text-align:right;">0</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">ACCESSORIES</td><td style="padding-left:10px;">CARD HOLDER</td><td style="text-align:center;">4</td><td style="padding-right:10px;text-align:right;">11</td><td style="padding-right:10px;text-align:right;">3,555</td><td style="padding-right:10px;text-align:right;">6,730</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">ACCESSORIES</td><td style="padding-left:10px;">CLOCK</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">4</td><td style="padding-right:10px;text-align:right;">11,600</td><td style="padding-right:10px;text-align:right;">21,960</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">ACCESSORIES</td><td style="padding-left:10px;">KIDS CAP</td><td style="text-align:center;">4</td><td style="padding-right:10px;text-align:right;">17</td><td style="padding-right:10px;text-align:right;">4,165</td><td style="padding-right:10px;text-align:right;">8,570</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">ACCESSORIES</td><td style="padding-left:10px;">LADIES BAG</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">2</td><td style="padding-right:10px;text-align:right;">1,500</td><td style="padding-right:10px;text-align:right;">2,838</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">ACCESSORIES</td><td style="padding-left:10px;">LADIES CAP</td><td style="text-align:center;">3</td><td style="padding-right:10px;text-align:right;">8</td><td style="padding-right:10px;text-align:right;">1,595</td><td style="padding-right:10px;text-align:right;">4,463</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">ACCESSORIES</td><td style="padding-left:10px;">LADIES PARTS</td><td style="text-align:center;">2</td><td style="padding-right:10px;text-align:right;">7</td><td style="padding-right:10px;text-align:right;">6,030</td><td style="padding-right:10px;text-align:right;">11,130</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">ACCESSORIES</td><td style="padding-left:10px;">MENS BELT</td><td style="text-align:center;">8</td><td style="padding-right:10px;text-align:right;">28</td><td style="padding-right:10px;text-align:right;">16,830</td><td style="padding-right:10px;text-align:right;">33,676</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">ACCESSORIES</td><td style="padding-left:10px;">MENS CAP</td><td style="text-align:center;">20</td><td style="padding-right:10px;text-align:right;">86</td><td style="padding-right:10px;text-align:right;">19,250</td><td style="padding-right:10px;text-align:right;">55,669</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">ACCESSORIES</td><td style="padding-left:10px;">MENZ TIE</td><td style="text-align:center;">11</td><td style="padding-right:10px;text-align:right;">144</td><td style="padding-right:10px;text-align:right;">35,709</td><td style="padding-right:10px;text-align:right;">89,955</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">ACCESSORIES</td><td style="padding-left:10px;">MOBILE WALLET</td><td style="text-align:center;">15</td><td style="padding-right:10px;text-align:right;">58</td><td style="padding-right:10px;text-align:right;">39,922</td><td style="padding-right:10px;text-align:right;">75,884</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">ACCESSORIES</td><td style="padding-left:10px;">PASSPORT HOLDER</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">4</td><td style="padding-right:10px;text-align:right;">1,920</td><td style="padding-right:10px;text-align:right;">4,360</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">ACCESSORIES</td><td style="padding-left:10px;">PEN HOLDER</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">1</td><td style="padding-right:10px;text-align:right;">680</td><td style="padding-right:10px;text-align:right;">1,133</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">ACCESSORIES</td><td style="padding-left:10px;">SHOPING BAG</td><td style="text-align:center;">2</td><td style="padding-right:10px;text-align:right;">344</td><td style="padding-right:10px;text-align:right;">0</td><td style="padding-right:10px;text-align:right;">0</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">ACCESSORIES</td><td style="padding-left:10px;">SUNGLASS BOX</td><td style="text-align:center;">2</td><td style="padding-right:10px;text-align:right;">6</td><td style="padding-right:10px;text-align:right;">3,540</td><td style="padding-right:10px;text-align:right;">5,657</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">ACCESSORIES</td><td style="padding-left:10px;">SWEDISH PAPER BAG</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">2,409</td><td style="padding-right:10px;text-align:right;">2</td><td style="padding-right:10px;text-align:right;">2</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">ACCESSORIES</td><td style="padding-left:10px;">TISSUE BOX</td><td style="text-align:center;">2</td><td style="padding-right:10px;text-align:right;">3</td><td style="padding-right:10px;text-align:right;">2,340</td><td style="padding-right:10px;text-align:right;">3,686</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">ACCESSORIES</td><td style="padding-left:10px;">WALLET</td><td style="text-align:center;">25</td><td style="padding-right:10px;text-align:right;">68</td><td style="padding-right:10px;text-align:right;">37,544</td><td style="padding-right:10px;text-align:right;">71,349</td></tr><tr class="trBGC" style="font-size:11px;font-weight:700;text-align:right;"><td colspan="2" style="padding-right:10px;">GRP-TOTAL</td><td style="text-align:center;">104</td><td style="padding-right:10px;">3,295</td><td style="padding-right:10px;">186,183</td><td style="padding-right:10px;">397,062</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">AL HARAMAIN PERFUMES</td><td style="padding-left:10px;">ATTAR</td><td style="text-align:center;">18</td><td style="padding-right:10px;text-align:right;">182</td><td style="padding-right:10px;text-align:right;">231,948</td><td style="padding-right:10px;text-align:right;">341,100</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">AL HARAMAIN PERFUMES</td><td style="padding-left:10px;">DEODORANT</td><td style="text-align:center;">13</td><td style="padding-right:10px;text-align:right;">141</td><td style="padding-right:10px;text-align:right;">59,446</td><td style="padding-right:10px;text-align:right;">87,420</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">AL HARAMAIN PERFUMES</td><td style="padding-left:10px;">SPRAY</td><td style="text-align:center;">10</td><td style="padding-right:10px;text-align:right;">35</td><td style="padding-right:10px;text-align:right;">74,358</td><td style="padding-right:10px;text-align:right;">109,350</td></tr><tr class="trBGC" style="font-size:11px;font-weight:700;text-align:right;"><td colspan="2" style="padding-right:10px;">GRP-TOTAL</td><td style="text-align:center;">41</td><td style="padding-right:10px;">358</td><td style="padding-right:10px;">365,752</td><td style="padding-right:10px;">537,870</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">ANUPAM HOSIERY</td><td style="padding-left:10px;">SOCKS</td><td style="text-align:center;">12</td><td style="padding-right:10px;text-align:right;">172</td><td style="padding-right:10px;text-align:right;">20,072</td><td style="padding-right:10px;text-align:right;">30,550</td></tr><tr class="trBGC" style="font-size:11px;font-weight:700;text-align:right;"><td colspan="2" style="padding-right:10px;">GRP-TOTAL</td><td style="text-align:center;">12</td><td style="padding-right:10px;">172</td><td style="padding-right:10px;">20,072</td><td style="padding-right:10px;">30,550</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">BOYS</td><td style="padding-left:10px;">2PCS SET</td><td style="text-align:center;">4</td><td style="padding-right:10px;text-align:right;">18</td><td style="padding-right:10px;text-align:right;">6,300</td><td style="padding-right:10px;text-align:right;">13,379</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">BOYS</td><td style="padding-left:10px;">3Q PANT</td><td style="text-align:center;">7</td><td style="padding-right:10px;text-align:right;">26</td><td style="padding-right:10px;text-align:right;">8,665</td><td style="padding-right:10px;text-align:right;">16,948</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">BOYS</td><td style="padding-left:10px;">4Q PANT</td><td style="text-align:center;">2</td><td style="padding-right:10px;text-align:right;">17</td><td style="padding-right:10px;text-align:right;">7,055</td><td style="padding-right:10px;text-align:right;">12,130</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">BOYS</td><td style="padding-left:10px;">CASUAL SHIRT LONG SLEEVE</td><td style="text-align:center;">39</td><td style="padding-right:10px;text-align:right;">225</td><td style="padding-right:10px;text-align:right;">107,865</td><td style="padding-right:10px;text-align:right;">199,352</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">BOYS</td><td style="padding-left:10px;">CASUAL SHIRT SHORT SLEEVE</td><td style="text-align:center;">31</td><td style="padding-right:10px;text-align:right;">230</td><td style="padding-right:10px;text-align:right;">110,520</td><td style="padding-right:10px;text-align:right;">195,494</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">BOYS</td><td style="padding-left:10px;">DENIM PANT</td><td style="text-align:center;">19</td><td style="padding-right:10px;text-align:right;">126</td><td style="padding-right:10px;text-align:right;">70,250</td><td style="padding-right:10px;text-align:right;">122,869</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">BOYS</td><td style="padding-left:10px;">KABLI SET</td><td style="text-align:center;">7</td><td style="padding-right:10px;text-align:right;">20</td><td style="padding-right:10px;text-align:right;">17,185</td><td style="padding-right:10px;text-align:right;">31,128</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">BOYS</td><td style="padding-left:10px;">PAIJAMA</td><td style="text-align:center;">10</td><td style="padding-right:10px;text-align:right;">120</td><td style="padding-right:10px;text-align:right;">43,482</td><td style="padding-right:10px;text-align:right;">75,823</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">BOYS</td><td style="padding-left:10px;">PANJABI</td><td style="text-align:center;">47</td><td style="padding-right:10px;text-align:right;">261</td><td style="padding-right:10px;text-align:right;">178,712</td><td style="padding-right:10px;text-align:right;">310,362</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">BOYS</td><td style="padding-left:10px;">POLO</td><td style="text-align:center;">10</td><td style="padding-right:10px;text-align:right;">29</td><td style="padding-right:10px;text-align:right;">11,330</td><td style="padding-right:10px;text-align:right;">19,637</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">BOYS</td><td style="padding-left:10px;">SHORT PANT</td><td style="text-align:center;">12</td><td style="padding-right:10px;text-align:right;">66</td><td style="padding-right:10px;text-align:right;">15,460</td><td style="padding-right:10px;text-align:right;">28,139</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">BOYS</td><td style="padding-left:10px;">TRACK PANT</td><td style="text-align:center;">2</td><td style="padding-right:10px;text-align:right;">16</td><td style="padding-right:10px;text-align:right;">4,800</td><td style="padding-right:10px;text-align:right;">10,270</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">BOYS</td><td style="padding-left:10px;">T-SHIRT</td><td style="text-align:center;">22</td><td style="padding-right:10px;text-align:right;">94</td><td style="padding-right:10px;text-align:right;">24,190</td><td style="padding-right:10px;text-align:right;">46,188</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">BOYS</td><td style="padding-left:10px;">TWILL PANT</td><td style="text-align:center;">14</td><td style="padding-right:10px;text-align:right;">134</td><td style="padding-right:10px;text-align:right;">69,290</td><td style="padding-right:10px;text-align:right;">125,732</td></tr><tr class="trBGC" style="font-size:11px;font-weight:700;text-align:right;"><td colspan="2" style="padding-right:10px;">GRP-TOTAL</td><td style="text-align:center;">226</td><td style="padding-right:10px;">1,382</td><td style="padding-right:10px;">675,104</td><td style="padding-right:10px;">1,207,451</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">COSMETICS</td><td style="padding-left:10px;">AIR FRESHENER</td><td style="text-align:center;">3</td><td style="padding-right:10px;text-align:right;">20</td><td style="padding-right:10px;text-align:right;">8,175</td><td style="padding-right:10px;text-align:right;">10,900</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">COSMETICS</td><td style="padding-left:10px;">BODY SPRAY</td><td style="text-align:center;">10</td><td style="padding-right:10px;text-align:right;">34</td><td style="padding-right:10px;text-align:right;">15,960</td><td style="padding-right:10px;text-align:right;">21,280</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">COSMETICS</td><td style="padding-left:10px;">DEODORANT</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">3</td><td style="padding-right:10px;text-align:right;">1,114</td><td style="padding-right:10px;text-align:right;">1,485</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">COSMETICS</td><td style="padding-left:10px;">FACE WASH</td><td style="text-align:center;">8</td><td style="padding-right:10px;text-align:right;">35</td><td style="padding-right:10px;text-align:right;">12,379</td><td style="padding-right:10px;text-align:right;">16,505</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">COSMETICS</td><td style="padding-left:10px;">HAND WASH</td><td style="text-align:center;">3</td><td style="padding-right:10px;text-align:right;">19</td><td style="padding-right:10px;text-align:right;">3,278</td><td style="padding-right:10px;text-align:right;">4,370</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">COSMETICS</td><td style="padding-left:10px;">MOISTURIZER</td><td style="text-align:center;">2</td><td style="padding-right:10px;text-align:right;">8</td><td style="padding-right:10px;text-align:right;">2,370</td><td style="padding-right:10px;text-align:right;">3,160</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">COSMETICS</td><td style="padding-left:10px;">OIL</td><td style="text-align:center;">7</td><td style="padding-right:10px;text-align:right;">19</td><td style="padding-right:10px;text-align:right;">5,933</td><td style="padding-right:10px;text-align:right;">7,910</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">COSMETICS</td><td style="padding-left:10px;">PERFUME</td><td style="text-align:center;">11</td><td style="padding-right:10px;text-align:right;">30</td><td style="padding-right:10px;text-align:right;">34,023</td><td style="padding-right:10px;text-align:right;">45,364</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">COSMETICS</td><td style="padding-left:10px;">SHOWER GEL</td><td style="text-align:center;">2</td><td style="padding-right:10px;text-align:right;">6</td><td style="padding-right:10px;text-align:right;">1,485</td><td style="padding-right:10px;text-align:right;">1,980</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">COSMETICS</td><td style="padding-left:10px;">SUNSCREEN</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">5</td><td style="padding-right:10px;text-align:right;">1,121</td><td style="padding-right:10px;text-align:right;">1,495</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">COSMETICS</td><td style="padding-left:10px;">TONER</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">6</td><td style="padding-right:10px;text-align:right;">1,238</td><td style="padding-right:10px;text-align:right;">1,650</td></tr><tr class="trBGC" style="font-size:11px;font-weight:700;text-align:right;"><td colspan="2" style="padding-right:10px;">GRP-TOTAL</td><td style="text-align:center;">49</td><td style="padding-right:10px;">185</td><td style="padding-right:10px;">87,074</td><td style="padding-right:10px;">116,099</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">FOOTWEAR</td><td style="padding-left:10px;">MENS SHOES</td><td style="text-align:center;">3</td><td style="padding-right:10px;text-align:right;">53</td><td style="padding-right:10px;text-align:right;">67,575</td><td style="padding-right:10px;text-align:right;">100,902</td></tr><tr class="trBGC" style="font-size:11px;font-weight:700;text-align:right;"><td colspan="2" style="padding-right:10px;">GRP-TOTAL</td><td style="text-align:center;">3</td><td style="padding-right:10px;">53</td><td style="padding-right:10px;">67,575</td><td style="padding-right:10px;">100,902</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">GIRLS</td><td style="padding-left:10px;">2PCS SET</td><td style="text-align:center;">16</td><td style="padding-right:10px;text-align:right;">81</td><td style="padding-right:10px;text-align:right;">99,364</td><td style="padding-right:10px;text-align:right;">191,937</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">GIRLS</td><td style="padding-left:10px;">3PC SET</td><td style="text-align:center;">20</td><td style="padding-right:10px;text-align:right;">79</td><td style="padding-right:10px;text-align:right;">114,087</td><td style="padding-right:10px;text-align:right;">199,086</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">GIRLS</td><td style="padding-left:10px;">JUMPSUIT</td><td style="text-align:center;">6</td><td style="padding-right:10px;text-align:right;">43</td><td style="padding-right:10px;text-align:right;">28,200</td><td style="padding-right:10px;text-align:right;">46,484</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">GIRLS</td><td style="padding-left:10px;">LEGGINGS</td><td style="text-align:center;">9</td><td style="padding-right:10px;text-align:right;">151</td><td style="padding-right:10px;text-align:right;">32,880</td><td style="padding-right:10px;text-align:right;">79,712</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">GIRLS</td><td style="padding-left:10px;">PALAZZO PANT</td><td style="text-align:center;">15</td><td style="padding-right:10px;text-align:right;">58</td><td style="padding-right:10px;text-align:right;">17,252</td><td style="padding-right:10px;text-align:right;">33,864</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">GIRLS</td><td style="padding-left:10px;">PANT</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">7</td><td style="padding-right:10px;text-align:right;">1,981</td><td style="padding-right:10px;text-align:right;">4,130</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">GIRLS</td><td style="padding-left:10px;">SKIRT</td><td style="text-align:center;">2</td><td style="padding-right:10px;text-align:right;">4</td><td style="padding-right:10px;text-align:right;">1,740</td><td style="padding-right:10px;text-align:right;">3,960</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">GIRLS</td><td style="padding-left:10px;">TOPS</td><td style="text-align:center;">60</td><td style="padding-right:10px;text-align:right;">295</td><td style="padding-right:10px;text-align:right;">230,171</td><td style="padding-right:10px;text-align:right;">404,627</td></tr><tr class="trBGC" style="font-size:11px;font-weight:700;text-align:right;"><td colspan="2" style="padding-right:10px;">GRP-TOTAL</td><td style="text-align:center;">129</td><td style="padding-right:10px;">718</td><td style="padding-right:10px;">525,675</td><td style="padding-right:10px;">963,800</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">HOME FASHION</td><td style="padding-left:10px;">BED SHEET</td><td style="text-align:center;">3</td><td style="padding-right:10px;text-align:right;">9</td><td style="padding-right:10px;text-align:right;">10,040</td><td style="padding-right:10px;text-align:right;">17,457</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">HOME FASHION</td><td style="padding-left:10px;">BOTTLE</td><td style="text-align:center;">31</td><td style="padding-right:10px;text-align:right;">55</td><td style="padding-right:10px;text-align:right;">29,770</td><td style="padding-right:10px;text-align:right;">53,807</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">HOME FASHION</td><td style="padding-left:10px;">CANDLE</td><td style="text-align:center;">13</td><td style="padding-right:10px;text-align:right;">42</td><td style="padding-right:10px;text-align:right;">3,125</td><td style="padding-right:10px;text-align:right;">6,073</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">HOME FASHION</td><td style="padding-left:10px;">DOLL</td><td style="text-align:center;">38</td><td style="padding-right:10px;text-align:right;">52</td><td style="padding-right:10px;text-align:right;">20,640</td><td style="padding-right:10px;text-align:right;">38,273</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">HOME FASHION</td><td style="padding-left:10px;">FLOWER STICK</td><td style="text-align:center;">21</td><td style="padding-right:10px;text-align:right;">40</td><td style="padding-right:10px;text-align:right;">7,655</td><td style="padding-right:10px;text-align:right;">14,197</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">HOME FASHION</td><td style="padding-left:10px;">FLOWER VASE</td><td style="text-align:center;">5</td><td style="padding-right:10px;text-align:right;">6</td><td style="padding-right:10px;text-align:right;">5,210</td><td style="padding-right:10px;text-align:right;">9,341</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">HOME FASHION</td><td style="padding-left:10px;">MUG</td><td style="text-align:center;">5</td><td style="padding-right:10px;text-align:right;">25</td><td style="padding-right:10px;text-align:right;">3,691</td><td style="padding-right:10px;text-align:right;">6,330</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">HOME FASHION</td><td style="padding-left:10px;">PHOTO FRAME</td><td style="text-align:center;">6</td><td style="padding-right:10px;text-align:right;">6</td><td style="padding-right:10px;text-align:right;">3,380</td><td style="padding-right:10px;text-align:right;">6,100</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">HOME FASHION</td><td style="padding-left:10px;">SHOWPIECE</td><td style="text-align:center;">18</td><td style="padding-right:10px;text-align:right;">22</td><td style="padding-right:10px;text-align:right;">9,250</td><td style="padding-right:10px;text-align:right;">16,475</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">HOME FASHION</td><td style="padding-left:10px;">TOY</td><td style="text-align:center;">98</td><td style="padding-right:10px;text-align:right;">139</td><td style="padding-right:10px;text-align:right;">43,585</td><td style="padding-right:10px;text-align:right;">85,459</td></tr><tr class="trBGC" style="font-size:11px;font-weight:700;text-align:right;"><td colspan="2" style="padding-right:10px;">GRP-TOTAL</td><td style="text-align:center;">238</td><td style="padding-right:10px;">396</td><td style="padding-right:10px;">136,346</td><td style="padding-right:10px;">253,512</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">LADIES</td><td style="padding-left:10px;">2PC SET</td><td style="text-align:center;">5</td><td style="padding-right:10px;text-align:right;">29</td><td style="padding-right:10px;text-align:right;">42,520</td><td style="padding-right:10px;text-align:right;">68,768</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">LADIES</td><td style="padding-left:10px;">3PC SET</td><td style="text-align:center;">84</td><td style="padding-right:10px;text-align:right;">710</td><td style="padding-right:10px;text-align:right;">1,731,856</td><td style="padding-right:10px;text-align:right;">3,421,687</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">LADIES</td><td style="padding-left:10px;">CIGARETTE PANT</td><td style="text-align:center;">7</td><td style="padding-right:10px;text-align:right;">37</td><td style="padding-right:10px;text-align:right;">14,876</td><td style="padding-right:10px;text-align:right;">33,550</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">LADIES</td><td style="padding-left:10px;">CORD SET</td><td style="text-align:center;">4</td><td style="padding-right:10px;text-align:right;">52</td><td style="padding-right:10px;text-align:right;">81,952</td><td style="padding-right:10px;text-align:right;">154,440</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">LADIES</td><td style="padding-left:10px;">GOWN</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">7</td><td style="padding-right:10px;text-align:right;">14,070</td><td style="padding-right:10px;text-align:right;">23,030</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">LADIES</td><td style="padding-left:10px;">JEGGINGS</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">11</td><td style="padding-right:10px;text-align:right;">3,025</td><td style="padding-right:10px;text-align:right;">8,084</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">LADIES</td><td style="padding-left:10px;">LEGGING</td><td style="text-align:center;">7</td><td style="padding-right:10px;text-align:right;">119</td><td style="padding-right:10px;text-align:right;">29,310</td><td style="padding-right:10px;text-align:right;">64,921</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">LADIES</td><td style="padding-left:10px;">LEGGINGS</td><td style="text-align:center;">5</td><td style="padding-right:10px;text-align:right;">63</td><td style="padding-right:10px;text-align:right;">15,235</td><td style="padding-right:10px;text-align:right;">35,848</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">LADIES</td><td style="padding-left:10px;">LONG TUNIC</td><td style="text-align:center;">87</td><td style="padding-right:10px;text-align:right;">754</td><td style="padding-right:10px;text-align:right;">766,727</td><td style="padding-right:10px;text-align:right;">1,351,547</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">LADIES</td><td style="padding-left:10px;">PALAZZO PANT</td><td style="text-align:center;">3</td><td style="padding-right:10px;text-align:right;">13</td><td style="padding-right:10px;text-align:right;">6,728</td><td style="padding-right:10px;text-align:right;">14,970</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">LADIES</td><td style="padding-left:10px;">SCARF</td><td style="text-align:center;">3</td><td style="padding-right:10px;text-align:right;">44</td><td style="padding-right:10px;text-align:right;">15,876</td><td style="padding-right:10px;text-align:right;">32,800</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">LADIES</td><td style="padding-left:10px;">SEMI STITCHED 3PCS</td><td style="text-align:center;">19</td><td style="padding-right:10px;text-align:right;">82</td><td style="padding-right:10px;text-align:right;">277,088</td><td style="padding-right:10px;text-align:right;">429,130</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">LADIES</td><td style="padding-left:10px;">SHAREE</td><td style="text-align:center;">193</td><td style="padding-right:10px;text-align:right;">372</td><td style="padding-right:10px;text-align:right;">626,443</td><td style="padding-right:10px;text-align:right;">1,037,451</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">LADIES</td><td style="padding-left:10px;">UNSTITCH</td><td style="text-align:center;">25</td><td style="padding-right:10px;text-align:right;">92</td><td style="padding-right:10px;text-align:right;">125,800</td><td style="padding-right:10px;text-align:right;">215,180</td></tr><tr class="trBGC" style="font-size:11px;font-weight:700;text-align:right;"><td colspan="2" style="padding-right:10px;">GRP-TOTAL</td><td style="text-align:center;">444</td><td style="padding-right:10px;">2,385</td><td style="padding-right:10px;">3,751,506</td><td style="padding-right:10px;">6,891,405</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">BOXER</td><td style="text-align:center;">4</td><td style="padding-right:10px;text-align:right;">133</td><td style="padding-right:10px;text-align:right;">21,236</td><td style="padding-right:10px;text-align:right;">43,241</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">BRIEFS VP</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">83</td><td style="padding-right:10px;text-align:right;">10,790</td><td style="padding-right:10px;text-align:right;">20,750</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">CARGO PANT</td><td style="text-align:center;">6</td><td style="padding-right:10px;text-align:right;">142</td><td style="padding-right:10px;text-align:right;">158,400</td><td style="padding-right:10px;text-align:right;">328,797</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">CASUAL SHIRT</td><td style="text-align:center;">63</td><td style="padding-right:10px;text-align:right;">749</td><td style="padding-right:10px;text-align:right;">640,013</td><td style="padding-right:10px;text-align:right;">1,235,373</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">CUBAN POLO SHIRT</td><td style="text-align:center;">2</td><td style="padding-right:10px;text-align:right;">31</td><td style="padding-right:10px;text-align:right;">18,220</td><td style="padding-right:10px;text-align:right;">48,743</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">DENIM PANT</td><td style="text-align:center;">66</td><td style="padding-right:10px;text-align:right;">975</td><td style="padding-right:10px;text-align:right;">830,150</td><td style="padding-right:10px;text-align:right;">1,674,418</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">FORMAL PANT</td><td style="text-align:center;">14</td><td style="padding-right:10px;text-align:right;">86</td><td style="padding-right:10px;text-align:right;">72,980</td><td style="padding-right:10px;text-align:right;">143,851</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">FORMAL SHIRT</td><td style="text-align:center;">45</td><td style="padding-right:10px;text-align:right;">342</td><td style="padding-right:10px;text-align:right;">367,206</td><td style="padding-right:10px;text-align:right;">714,195</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">HALF SHIRT</td><td style="text-align:center;">52</td><td style="padding-right:10px;text-align:right;">471</td><td style="padding-right:10px;text-align:right;">359,402</td><td style="padding-right:10px;text-align:right;">694,321</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">INNER T-SHIRT</td><td style="text-align:center;">4</td><td style="padding-right:10px;text-align:right;">172</td><td style="padding-right:10px;text-align:right;">29,490</td><td style="padding-right:10px;text-align:right;">53,309</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">JOGGER</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">1</td><td style="padding-right:10px;text-align:right;">860</td><td style="padding-right:10px;text-align:right;">1,479</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">JOGGERS PANT</td><td style="text-align:center;">2</td><td style="padding-right:10px;text-align:right;">73</td><td style="padding-right:10px;text-align:right;">44,895</td><td style="padding-right:10px;text-align:right;">87,600</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">KABLI SET</td><td style="text-align:center;">18</td><td style="padding-right:10px;text-align:right;">146</td><td style="padding-right:10px;text-align:right;">251,720</td><td style="padding-right:10px;text-align:right;">494,285</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">KOTI</td><td style="text-align:center;">32</td><td style="padding-right:10px;text-align:right;">230</td><td style="padding-right:10px;text-align:right;">292,943</td><td style="padding-right:10px;text-align:right;">538,266</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">KOTI PANJABI SET</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">2</td><td style="padding-right:10px;text-align:right;">3,900</td><td style="padding-right:10px;text-align:right;">8,580</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">MASK</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">72</td><td style="padding-right:10px;text-align:right;">2,880</td><td style="padding-right:10px;text-align:right;">4,114</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">PAIJAMA</td><td style="text-align:center;">12</td><td style="padding-right:10px;text-align:right;">221</td><td style="padding-right:10px;text-align:right;">119,089</td><td style="padding-right:10px;text-align:right;">227,189</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">PANJABI</td><td style="text-align:center;">182</td><td style="padding-right:10px;text-align:right;">1,553</td><td style="padding-right:10px;text-align:right;">1,918,307</td><td style="padding-right:10px;text-align:right;">3,643,099</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">PANJABI SET</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">1</td><td style="padding-right:10px;text-align:right;">1,477</td><td style="padding-right:10px;text-align:right;">2,781</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">POLO</td><td style="text-align:center;">72</td><td style="padding-right:10px;text-align:right;">1,153</td><td style="padding-right:10px;text-align:right;">706,145</td><td style="padding-right:10px;text-align:right;">1,467,502</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">Relax Wear</td><td style="text-align:center;">4</td><td style="padding-right:10px;text-align:right;">123</td><td style="padding-right:10px;text-align:right;">53,448</td><td style="padding-right:10px;text-align:right;">91,972</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">TANK TOPS</td><td style="text-align:center;">2</td><td style="padding-right:10px;text-align:right;">15</td><td style="padding-right:10px;text-align:right;">2,150</td><td style="padding-right:10px;text-align:right;">3,948</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">TRACK PANT</td><td style="text-align:center;">8</td><td style="padding-right:10px;text-align:right;">24</td><td style="padding-right:10px;text-align:right;">13,080</td><td style="padding-right:10px;text-align:right;">22,668</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">T-SHIRT</td><td style="text-align:center;">100</td><td style="padding-right:10px;text-align:right;">1,354</td><td style="padding-right:10px;text-align:right;">559,745</td><td style="padding-right:10px;text-align:right;">1,055,205</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MENS</td><td style="padding-left:10px;">TWILL PANT</td><td style="text-align:center;">37</td><td style="padding-right:10px;text-align:right;">547</td><td style="padding-right:10px;text-align:right;">486,734</td><td style="padding-right:10px;text-align:right;">984,574</td></tr><tr class="trBGC" style="font-size:11px;font-weight:700;text-align:right;"><td colspan="2" style="padding-right:10px;">GRP-TOTAL</td><td style="text-align:center;">730</td><td style="padding-right:10px;">8,699</td><td style="padding-right:10px;">6,965,260</td><td style="padding-right:10px;">13,590,259</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MOMENTUM</td><td style="padding-left:10px;">MENS POLO SHIRT</td><td style="text-align:center;">4</td><td style="padding-right:10px;text-align:right;">6</td><td style="padding-right:10px;text-align:right;">6,390</td><td style="padding-right:10px;text-align:right;">14,940</td></tr><tr class="trBGC" style="font-size:11px;font-weight:700;text-align:right;"><td colspan="2" style="padding-right:10px;">GRP-TOTAL</td><td style="text-align:center;">4</td><td style="padding-right:10px;">6</td><td style="padding-right:10px;">6,390</td><td style="padding-right:10px;">14,940</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MUAD</td><td style="padding-left:10px;">BOYS T-SHIRT</td><td style="text-align:center;">4</td><td style="padding-right:10px;text-align:right;">124</td><td style="padding-right:10px;text-align:right;">20,460</td><td style="padding-right:10px;text-align:right;">44,986</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">MUAD</td><td style="padding-left:10px;">GIRLS T-SHIRT</td><td style="text-align:center;">6</td><td style="padding-right:10px;text-align:right;">184</td><td style="padding-right:10px;text-align:right;">30,360</td><td style="padding-right:10px;text-align:right;">66,753</td></tr><tr class="trBGC" style="font-size:11px;font-weight:700;text-align:right;"><td colspan="2" style="padding-right:10px;">GRP-TOTAL</td><td style="text-align:center;">10</td><td style="padding-right:10px;">308</td><td style="padding-right:10px;">50,820</td><td style="padding-right:10px;">111,739</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM BANGLADESH</td><td style="padding-left:10px;">BACKPACK</td><td style="text-align:center;">5</td><td style="padding-right:10px;text-align:right;">20</td><td style="padding-right:10px;text-align:right;">20,589</td><td style="padding-right:10px;text-align:right;">28,743</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM BANGLADESH</td><td style="padding-left:10px;">EXECUTIVE BAG</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">1</td><td style="padding-right:10px;text-align:right;">1,539</td><td style="padding-right:10px;text-align:right;">2,094</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM BANGLADESH</td><td style="padding-left:10px;">KEY RING</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">1</td><td style="padding-right:10px;text-align:right;">66</td><td style="padding-right:10px;text-align:right;">94</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM BANGLADESH</td><td style="padding-left:10px;">KIDS BACKPACK</td><td style="text-align:center;">3</td><td style="padding-right:10px;text-align:right;">6</td><td style="padding-right:10px;text-align:right;">4,689</td><td style="padding-right:10px;text-align:right;">6,470</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM BANGLADESH</td><td style="padding-left:10px;">LADIES CLUTCH</td><td style="text-align:center;">2</td><td style="padding-right:10px;text-align:right;">2</td><td style="padding-right:10px;text-align:right;">4,479</td><td style="padding-right:10px;text-align:right;">6,093</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM BANGLADESH</td><td style="padding-left:10px;">LADIES HAND BAG</td><td style="text-align:center;">35</td><td style="padding-right:10px;text-align:right;">133</td><td style="padding-right:10px;text-align:right;">245,654</td><td style="padding-right:10px;text-align:right;">346,679</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM BANGLADESH</td><td style="padding-left:10px;">LADIES HAND PURSE</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">3</td><td style="padding-right:10px;text-align:right;">4,998</td><td style="padding-right:10px;text-align:right;">7,140</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM BANGLADESH</td><td style="padding-left:10px;">LADIES PURSE</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">1</td><td style="padding-right:10px;text-align:right;">419</td><td style="padding-right:10px;text-align:right;">570</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM BANGLADESH</td><td style="padding-left:10px;">LADIES SHOULDER BAG</td><td style="text-align:center;">4</td><td style="padding-right:10px;text-align:right;">12</td><td style="padding-right:10px;text-align:right;">21,972</td><td style="padding-right:10px;text-align:right;">30,227</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM BANGLADESH</td><td style="padding-left:10px;">LADIES SLING BAG</td><td style="text-align:center;">17</td><td style="padding-right:10px;text-align:right;">45</td><td style="padding-right:10px;text-align:right;">69,676</td><td style="padding-right:10px;text-align:right;">96,880</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM BANGLADESH</td><td style="padding-left:10px;">LADIES TOTE BAG</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">3</td><td style="padding-right:10px;text-align:right;">2,198</td><td style="padding-right:10px;text-align:right;">3,140</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM BANGLADESH</td><td style="padding-left:10px;">TISSUE BOX</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">2</td><td style="padding-right:10px;text-align:right;">559</td><td style="padding-right:10px;text-align:right;">760</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM BANGLADESH</td><td style="padding-left:10px;">TRAVEL BAG</td><td style="text-align:center;">5</td><td style="padding-right:10px;text-align:right;">15</td><td style="padding-right:10px;text-align:right;">20,949</td><td style="padding-right:10px;text-align:right;">29,847</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM BANGLADESH</td><td style="padding-left:10px;">TRAVEL WALLET</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">1</td><td style="padding-right:10px;text-align:right;">419</td><td style="padding-right:10px;text-align:right;">570</td></tr><tr class="trBGC" style="font-size:11px;font-weight:700;text-align:right;"><td colspan="2" style="padding-right:10px;">GRP-TOTAL</td><td style="text-align:center;">78</td><td style="padding-right:10px;">245</td><td style="padding-right:10px;">398,207</td><td style="padding-right:10px;">559,310</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM INTERNATIONAL </td><td style="padding-left:10px;">CASUAL SHOE</td><td style="text-align:center;">8</td><td style="padding-right:10px;text-align:right;">52</td><td style="padding-right:10px;text-align:right;">73,530</td><td style="padding-right:10px;text-align:right;">100,448</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM INTERNATIONAL </td><td style="padding-left:10px;">HALF LOAFER</td><td style="text-align:center;">8</td><td style="padding-right:10px;text-align:right;">41</td><td style="padding-right:10px;text-align:right;">63,930</td><td style="padding-right:10px;text-align:right;">82,903</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM INTERNATIONAL </td><td style="padding-left:10px;">LADIES HILL</td><td style="text-align:center;">22</td><td style="padding-right:10px;text-align:right;">163</td><td style="padding-right:10px;text-align:right;">181,773</td><td style="padding-right:10px;text-align:right;">235,344</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM INTERNATIONAL </td><td style="padding-left:10px;">LADIES PUMPY</td><td style="text-align:center;">3</td><td style="padding-right:10px;text-align:right;">33</td><td style="padding-right:10px;text-align:right;">37,100</td><td style="padding-right:10px;text-align:right;">47,468</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM INTERNATIONAL </td><td style="padding-left:10px;">LADIES SEMI HILL</td><td style="text-align:center;">6</td><td style="padding-right:10px;text-align:right;">56</td><td style="padding-right:10px;text-align:right;">60,152</td><td style="padding-right:10px;text-align:right;">82,826</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM INTERNATIONAL </td><td style="padding-left:10px;">LADIES SHOE</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">4</td><td style="padding-right:10px;text-align:right;">4,047</td><td style="padding-right:10px;text-align:right;">5,139</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM INTERNATIONAL </td><td style="padding-left:10px;">LADIES SLIPPER</td><td style="text-align:center;">16</td><td style="padding-right:10px;text-align:right;">162</td><td style="padding-right:10px;text-align:right;">153,802</td><td style="padding-right:10px;text-align:right;">202,821</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM INTERNATIONAL </td><td style="padding-left:10px;">MENZ LOAFER</td><td style="text-align:center;">11</td><td style="padding-right:10px;text-align:right;">41</td><td style="padding-right:10px;text-align:right;">66,470</td><td style="padding-right:10px;text-align:right;">89,479</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM INTERNATIONAL </td><td style="padding-left:10px;">MENZ SANDAL</td><td style="text-align:center;">16</td><td style="padding-right:10px;text-align:right;">97</td><td style="padding-right:10px;text-align:right;">123,552</td><td style="padding-right:10px;text-align:right;">162,479</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">RIM INTERNATIONAL </td><td style="padding-left:10px;">MENZ SHOE</td><td style="text-align:center;">3</td><td style="padding-right:10px;text-align:right;">14</td><td style="padding-right:10px;text-align:right;">38,526</td><td style="padding-right:10px;text-align:right;">52,368</td></tr><tr class="trBGC" style="font-size:11px;font-weight:700;text-align:right;"><td colspan="2" style="padding-right:10px;">GRP-TOTAL</td><td style="text-align:center;">94</td><td style="padding-right:10px;">663</td><td style="padding-right:10px;">802,882</td><td style="padding-right:10px;">1,061,275</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">SB DISTRIBUTION</td><td style="padding-left:10px;">BODY SPRAY</td><td style="text-align:center;">32</td><td style="padding-right:10px;text-align:right;">135</td><td style="padding-right:10px;text-align:right;">45,018</td><td style="padding-right:10px;text-align:right;">58,465</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">SB DISTRIBUTION</td><td style="padding-left:10px;">DEODORANT</td><td style="text-align:center;">3</td><td style="padding-right:10px;text-align:right;">24</td><td style="padding-right:10px;text-align:right;">4,805</td><td style="padding-right:10px;text-align:right;">6,240</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">SB DISTRIBUTION</td><td style="padding-left:10px;">SCENT</td><td style="text-align:center;">12</td><td style="padding-right:10px;text-align:right;">76</td><td style="padding-right:10px;text-align:right;">24,149</td><td style="padding-right:10px;text-align:right;">31,365</td></tr><tr class="trBGC" style="font-size:11px;font-weight:700;text-align:right;"><td colspan="2" style="padding-right:10px;">GRP-TOTAL</td><td style="text-align:center;">47</td><td style="padding-right:10px;">235</td><td style="padding-right:10px;">73,972</td><td style="padding-right:10px;">96,070</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">U BY MBRELLA</td><td style="padding-left:10px;">WOMENS SKD</td><td style="text-align:center;">1</td><td style="padding-right:10px;text-align:right;">3</td><td style="padding-right:10px;text-align:right;">15,960</td><td style="padding-right:10px;text-align:right;">29,997</td></tr><tr class="trBGC" style="font-size:11px;font-weight:700;text-align:right;"><td colspan="2" style="padding-right:10px;">GRP-TOTAL</td><td style="text-align:center;">1</td><td style="padding-right:10px;">3</td><td style="padding-right:10px;">15,960</td><td style="padding-right:10px;">29,997</td></tr><tr style="font-size:11px;"><td style="padding-left:10px;">WEAVETEX</td><td style="padding-left:10px;">MENS CAP</td><td style="text-align:center;">4</td><td style="padding-right:10px;text-align:right;">28</td><td style="padding-right:10px;text-align:right;">7,115</td><td style="padding-right:10px;text-align:right;">13,439</td></tr><tr class="trBGC" style="font-size:11px;font-weight:700;text-align:right;"><td colspan="2" style="padding-right:10px;">GRP-TOTAL</td><td style="text-align:center;">4</td><td style="padding-right:10px;">28</td><td style="padding-right:10px;">7,115</td><td style="padding-right:10px;">13,439</td></tr><tr class="trBGC" style="font-size:11px;font-weight:700;text-align:right;"><td colspan="2" style="padding-right:10px;">GRAND-TOTAL</td><td style="text-align:center;">2,214</td><td style="padding-right:10px;">19,131</td><td style="padding-right:10px;">14,135,892</td><td style="padding-right:10px;">25,975,681</td></tr>													    </tbody>
													</table>
																										<table class="table" style="margin-bottom:0px !important;">
														<tbody>
															<tr>
																<td style="font-size:10px;text-align:center;border:none !important;">AUTO GENERATED REPORT. POWERED BY IT@MBRELLA</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>