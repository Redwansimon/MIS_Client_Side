

// import React, { useEffect, useState } from "react";
// import { ShopwiseTable } from "./ShopwiseTable";

// export const Shopwisestockreport = () => {

//   const [selectedShop, setSelectedShop] = useState("");
//   const [reportType, setReportType] = useState("");
//   const [originWise, setOriginWise] = useState(false);

//   const [stockreport, setstockreport] = useState([]);
//   const [showTable, setShowTable] = useState(false);

//   const shops = ["WAREHOUSE","UTTARA","SWADESHI-UTTARA","KASHIMPUR","ONLINE SHOP","ISWARDI","CHITTAGONG","MYMENSHINGH","SYLHET","BHAIRAB","MADARIPUR","BARISAL","FENI","TANGAIL","DOHAR","COX BAZAR","B. CITY-1","B. CITY-2","NARAYANGANJ","MBRELLA-FACTORY",
//   ];

//   const reportTypes = [
//     "Summary",
//     "Details",
//   ];

//   const handleSubmit = (e) => {

//     e.preventDefault();

//     setShowTable(false); // reset first

//     setTimeout(() => {
//       setShowTable(true); // trigger fresh load
//     }, 0);
//   };


//   useEffect(() => {

//     if (!showTable) return;

//     const fetchData = async () => {

//       try {

//          const response = await fetch('http://localhost:5000/api/stockreports/');
//          const data = await response.json();

//          setstockreport(data);

       

//       } catch (error) {

//         console.log(error);

//       }

//     };

//     fetchData();

//   }, [showTable]);


//   return (
//     <div className="w-full min-h-screen bg-slate-50 p-4 text-sm ">

//       {/* FORM CARD */}
//       <div className="bg-white border border-slate-200 rounded-2xl shadow-md">

//         <form onSubmit={handleSubmit}>

//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 p-6">

//             {/* SHOP SELECT */}
//             <div>
//               <label className="block text-sm font-semibold text-slate-700 mb-2">
//                 Select Shop
//               </label>

//               <select
//                 value={selectedShop}
//                 onChange={(e) => setSelectedShop(e.target.value)}
//                 className="
//                   w-full h-12 px-4
//                   border border-slate-300
//                   rounded-lg
//                   outline-none
//                   focus:ring-2 focus:ring-purple-400
//                   bg-white
//                 "
//                 required
//               >
//                 <option value="">SELECT SHOP</option>

//                 {shops.map((shop, index) => (
//                   <option key={index} value={shop}>
//                     {shop}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* REPORT TYPE */}

//             <div>
//               <label className="block text-sm font-semibold text-slate-700 mb-2">
//                 Report Type
//               </label>

//               <select
//                 value={reportType}
//                 onChange={(e) => setReportType(e.target.value)}
//                 className="
//                   w-full h-12 px-4
//                   border border-slate-300
//                   rounded-lg
//                   outline-none
//                   focus:ring-2 focus:ring-purple-400
//                   bg-white
//                 "
//                 required
//               >
//                 <option value="">SELECT REPORT</option>

//                 {reportTypes.map((report, index) => (
//                   <option key={index} value={report}>
//                     {report}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* ORIGIN WISE */}

//             <div className="flex items-end">
//               <label className="flex items-center gap-3 cursor-pointer">

//                 <input
//                   type="checkbox"
//                   checked={originWise}
//                   onChange={() => setOriginWise(!originWise)}
//                   className="
//                     w-5 h-5
//                     accent-purple-600
//                     cursor-pointer
//                   "
//                 />

//                 <span className="text-sm font-semibold text-slate-700 uppercase">
//                   Origin Wise
//                 </span>

//               </label>
//             </div>

//             {/* BUTTON */}

//             <div className="flex items-end">
//               <button
//                 type="submit"
//                 className="
//                   w-full h-12
//                   bg-purple-600
//                   hover:bg-purple-700
//                   transition
//                   rounded-lg
//                   text-white
//                   font-semibold
//                   shadow-md
//                 "
//               >
//                 VIEW REPORT
//               </button>
//             </div>

//           </div>

//         </form>

//       </div>

//       <ShopwiseTable showTable = {showTable}  shops= {shops} reportData= {reportData} selectedShop= {selectedShop} />

      

//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import { ShopwiseTable } from "./ShopwiseTable";
import { Loader } from "../../../components/Loader";

export const Shopwisestockreport = () => {
  const [selectedShop, setSelectedShop] = useState("");
  const [reportType, setReportType] = useState("");
  const [originWise, setOriginWise] = useState(false);

  const [reportData, setReportData] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [loading, setLoading] = useState(false);

  const shops = [
    "WAREHOUSE","UTTARA","SWADESHI-UTTARA","KASHIMPUR","ONLINE SHOP",
    "ISWARDI","CHITTAGONG","MYMENSHINGH","SYLHET","BHAIRAB",
    "MADARIPUR","BARISAL","FENI","TANGAIL","DOHAR",
    "COX BAZAR","B. CITY-1","B. CITY-2","NARAYANGANJ","MBRELLA-FACTORY"
  ];

  const reportTypes = ["Summary", "Details"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTable(true);
  };

  useEffect(() => {
    if (!showTable) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch("http://localhost:5000/api/stockreports");
        const data = await res.json();

        setReportData(Array.isArray(data) ? data : []);

      } catch (err) {
        console.log(err);
        setReportData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [showTable]);

  return (
    <div className="w-full min-h-screen bg-slate-50 p-4 text-sm">

      {/* FORM */}
      <div className="bg-white border rounded-2xl shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-6">

            <select
              value={selectedShop}
              onChange={(e) => setSelectedShop(e.target.value)}
              required
              className="h-12 border rounded px-3"
            >
              <option value="">SELECT SHOP</option>
              {shops.map((s, i) => (
                <option key={i}>{s}</option>
              ))}
            </select>

            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              required
              className="h-12 border rounded px-3"
            >
              <option value="">SELECT REPORT</option>
              {reportTypes.map((r, i) => (
                <option key={i}>{r}</option>
              ))}
            </select>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={originWise}
                onChange={() => setOriginWise(!originWise)}
              />
              Origin Wise
            </label>

            <button className="h-12 bg-purple-600 text-white rounded">
              VIEW REPORT
            </button>

          </div>
        </form>
      </div>

      {/* LOADING */}
      {loading && (
        <Loader></Loader>
      )}

      {/* TABLE */}
      {!loading && showTable && (
        <ShopwiseTable
          reportData={reportData}
          selectedShop={selectedShop}
        />
      )}

    </div>
  );
};