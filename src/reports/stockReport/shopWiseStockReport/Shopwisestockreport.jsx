
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
  


//---------------------------------------shoplist 
  const [shopData, setshopData] = useState([]);

  useEffect(()=>{
   fetch("http://localhost:5000/api/shop")
            .then(res => res.json())
            .then(data => {
                if (data.message){
                    setshopData([]);
                    setLoading(false)
                }
                else{
                
                setshopData(data) ; setLoading(false);}
            
                })
        .catch(err=>{
            console.log(err);
            setshopData([]);
            setLoading(false);
        })
  },[])




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

  console.log(shopData)
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
              {shopData.map((s, i) => (
                <option key={i}>{s.
STORE_NAME}</option>
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