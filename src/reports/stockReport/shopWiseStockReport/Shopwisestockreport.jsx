
// import React, { useEffect, useState } from "react";
// import { ShopwiseTable } from "./ShopwiseTable";
// import { Loader } from "../../../components/Loader";

// export const Shopwisestockreport = () => {
//   const [selectedShop, setSelectedShop] = useState("");
//   const [reportType, setReportType] = useState("");
//   const [originWise, setOriginWise] = useState(false);

//   const [reportData, setReportData] = useState([]);
//   const [showTable, setShowTable] = useState(false);
//   const [loading, setLoading] = useState(false);
  


// //---------------------------------------shoplist 
//   const [shopData, setshopData] = useState([]);

//   useEffect(()=>{
//    fetch("http://localhost:5000/api/shop")
//             .then(res => res.json())
//             .then(data => {
//                 if (data.message){
//                     setshopData([]);
//                     setLoading(false)
//                 }
//                 else{
                
//                 setshopData(data) ; setLoading(false);}
            
//                 })
//         .catch(err=>{
//             console.log(err);
//             setshopData([]);
//             setLoading(false);
//         })
//   },[])




//   const reportTypes = ["Summary", "Details"];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowTable(true);
//   };

//   useEffect(() => {
//     if (!showTable) return;

//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         const res = await fetch("http://localhost:5000/api/stockreports");
//         const data = await res.json();

//         setReportData(Array.isArray(data) ? data : []);

//       } catch (err) {
//         console.log(err);
//         setReportData([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [showTable]);

//   console.log(shopData)
//   return (
//     <div className="w-full min-h-screen bg-slate-50 p-4 text-sm">

//       {/* FORM */}
//       <div className="bg-white border rounded-2xl shadow-md">
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-6">

//             <select
//               value={selectedShop}
//               onChange={(e) => setSelectedShop(e.target.value)}
//               required
//               className="h-12 border rounded px-3"
//             >
//               <option value="">SELECT SHOP</option>
//               {shopData.map((s, i) => (
//                 <option key={i}>{s.
// STORE_NAME}</option>
//               ))}
//             </select>

//             <select
//               value={reportType}
//               onChange={(e) => setReportType(e.target.value)}
//               required
//               className="h-12 border rounded px-3"
//             >
//               <option value="">SELECT REPORT</option>
//               {reportTypes.map((r, i) => (
//                 <option key={i}>{r}</option>
//               ))}
//             </select>

//             <label className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={originWise}
//                 onChange={() => setOriginWise(!originWise)}
//               />
//               Origin Wise
//             </label>

//             <button className="h-12 bg-purple-600 text-white rounded">
//               VIEW REPORT
//             </button>

//           </div>
//         </form>
//       </div>

//       {/* LOADING */}
//       {loading && (
//         <Loader></Loader>
//       )}

//       {/* TABLE */}
//       {!loading && showTable && (
//         <ShopwiseTable
//           reportData={reportData}
//           selectedShop={selectedShop}
//         />
//       )}

//     </div>
//   );
// };


// import React, { useEffect, useState } from "react";
// import { ShopwiseTable } from "./ShopwiseTable";
// import { Loader } from "../../../components/Loader";

// export const Shopwisestockreport = () => {
//   const [selectedShop, setSelectedShop] = useState("");
//   const [reportType, setReportType] = useState("");
//   const [originWise, setOriginWise] = useState(false);

//   const [reportData, setReportData] = useState([]);
//   const [showTable, setShowTable] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const limit = 100;

//   // SHOP LIST
//   const [shopData, setShopData] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/shop")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.message) {
//           setShopData([]);
//         } else {
//           setShopData(data);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         setShopData([]);
//       });
//   }, []);

//   const reportTypes = ["Summary", "Details"];

//   const fetchData = async (page = 1) => {
//     try {
//       setLoading(true);

//       const res = await fetch(
//         `http://localhost:5000/api/stockreports?shop=${selectedShop}&page=${page}&limit=${limit}`
//       );
//       const json = await res.json();

//       setReportData(Array.isArray(json.data) ? json.data : []);
//       setTotalPages(json.totalPages || 1);
//       setCurrentPage(page);

//     } catch (err) {
//       console.log(err);
//       setReportData([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowTable(false);
//     setTimeout(() => setShowTable(true), 0);
//   };

//   useEffect(() => {
//     if (!showTable) return;
//     fetchData(1);
//   }, [showTable]);

//   return (
//     <div className="w-full min-h-screen bg-slate-50 p-4 text-sm">

//       {/* FORM */}
//       <div className="bg-white border rounded-2xl shadow-md">
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-6">

//             <select
//               value={selectedShop}
//               onChange={(e) => setSelectedShop(e.target.value)}
//               required
//               className="h-12 border rounded px-3"
//             >
//               <option value="">SELECT SHOP</option>
//               {shopData.map((s, i) => (
//                 <option key={i}>{s.STORE_NAME}</option>
//               ))}
//             </select>

//             <select
//               value={reportType}
//               onChange={(e) => setReportType(e.target.value)}
//               required
//               className="h-12 border rounded px-3"
//             >
//               <option value="">SELECT REPORT</option>
//               {reportTypes.map((r, i) => (
//                 <option key={i}>{r}</option>
//               ))}
//             </select>

//             <label className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 checked={originWise}
//                 onChange={() => setOriginWise(!originWise)}
//               />
//               Origin Wise
//             </label>

//             <button className="h-12 bg-purple-600 text-white rounded">
//               VIEW REPORT
//             </button>

//           </div>
//         </form>
//       </div>

//       {/* LOADING */}
//       {loading && <Loader />}

//       {/* TABLE */}
//       {!loading && showTable && (
//         <ShopwiseTable
//           reportData={reportData}
//           selectedShop={selectedShop}
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={(page) => fetchData(page)}
//         />
//       )}

//     </div>
//   );
// };

import React, { useEffect, useState, useRef } from "react";
import { ShopwiseTable } from "./ShopwiseTable";
import { Loader } from "../../../components/Loader";

export const Shopwisestockreport = () => {
  const [selectedShop, setSelectedShop] = useState("");
  const [reportType, setReportType] = useState("");
  const [originWise, setOriginWise] = useState(false);

  const [reportData, setReportData] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const [loadedRows, setLoadedRows] = useState(0);

  const limit = 1000;

  // background fetch চলছে কিনা track করতে
  const isFetching = useRef(false);

  // SHOP LIST
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/shop")
      .then((res) => res.json())
      .then((data) => {
        if (data.message) setShopData([]);
        else setShopData(data);
      })
      .catch((err) => {
        console.log(err);
        setShopData([]);
      });
  }, []);

  const reportTypes = ["Summary", "Details"];

  // সব page auto fetch করার function
  const fetchAllPages = async (shop) => {
    try {
      setLoading(true);
      setReportData([]);
      setAllLoaded(false);
      setLoadedRows(0);
      isFetching.current = true;

      // প্রথম page fetch করো
      const firstRes = await fetch(
        `http://localhost:5000/api/stockreports?shop=${shop}&page=1&limit=${limit}`
      );
      const firstJson = await firstRes.json();

      const totalPages = firstJson.totalPages || 1;
      const firstData = Array.isArray(firstJson.data) ? firstJson.data : [];

      // প্রথম page table এ দেখাও
      setReportData(firstData);
      setLoadedRows(firstData.length);
      setLoading(false);

      // page 1 এর বেশি থাকলে background এ বাকিগুলো fetch করো
      if (totalPages > 1) {
        setLoadingMore(true);

        for (let page = 2; page <= totalPages; page++) {

          if (!isFetching.current) break; // নতুন submit হলে বন্ধ করো

          const res = await fetch(
            `http://localhost:5000/api/stockreports?shop=${shop}&page=${page}&limit=${limit}`
          );
          const json = await res.json();
          const newData = Array.isArray(json.data) ? json.data : [];

          // আগের data র সাথে append করো
          setReportData((prev) => [...prev, ...newData]);
          setLoadedRows((prev) => prev + newData.length);
        }

        setLoadingMore(false);
      }

      setAllLoaded(true);
      isFetching.current = false;

    } catch (err) {
      console.log(err);
      setReportData([]);
      setLoading(false);
      setLoadingMore(false);
      isFetching.current = false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // আগের fetch বন্ধ করো
    isFetching.current = false;

    setShowTable(true);
    fetchAllPages(selectedShop);
  };

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
              <option value="ALL">ALL SHOPS</option>
              {shopData.map((s, i) => (
                <option key={i}>{s.STORE_NAME}</option>
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

      {/* INITIAL LOADING */}
      {loading && <Loader />}

      {/* TABLE */}
      {!loading && showTable && (
        <ShopwiseTable
          reportData={reportData}
          selectedShop={selectedShop}
          loadingMore={loadingMore}
          allLoaded={allLoaded}
          loadedRows={loadedRows}
        />
      )}

    </div>
  );
};