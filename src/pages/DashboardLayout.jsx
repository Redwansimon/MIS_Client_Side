import React, { useState } from "react";

const NAV = [
  { key: "HOME", label: "HOME", sub: [] },

  {
    key: "STOCK",
    label: "STOCK REPORT",
    sub: [
      "Current Stock",
      "Stock Ledger",
      "Low Stock",
      "Stock Valuation",
      "Stock Audit",
    ],
  },

  {
    key: "RECEIVE",
    label: "RECEIVE REPORT",
    sub: [
      "Date Wise",
      "Supplier Wise",
      "Product Wise",
      "Pending Receipts",
    ],
  },

  {
    key: "ISSUE",
    label: "ISSUE REPORT",
    sub: [
      "Date Wise",
      "Shop Wise",
      "Product Wise",
      "Pending Issues",
    ],
  },

  {
    key: "RETURN",
    label: "RETURN REPORT",
    sub: ["Sales Return", "Purchase Return", "Damage Return"],
  },

  {
    key: "SALE",
    label: "SALE REPORT",
    sub: [
      "Date Wise",
      "Shop Wise",
      "Invoice Wise",
      "Product Group Wise",
      "Product Name Wise",
      "Style Wise",
      "Franchise Commission",
      "Discount Report",
      "Supplier Wise",
      "Sale Through",
      "Periodical Report",
      "Best Sale",
      "Global Report",
    ],
  },

  {
    key: "WAREHOUSE",
    label: "WAREHOUSE",
    sub: ["Transfers", "Locations", "Bin Cards"],
  },

  {
    key: "BARCODE",
    label: "BARCODE",
    sub: ["Generate", "Print", "Scan History"],
  },

  {
    key: "OTHERS",
    label: "OTHERS",
    sub: ["Reports", "Logs", "Exports"],
  },

  {
    key: "SETTINGS",
    label: "SETTINGS",
    sub: ["Users", "Roles", "Preferences", "Backup"],
  },
];

const DashboardLayout = () => {
  const [active, setActive] = useState("SALE");
  const [activeSub, setActiveSub] = useState("Invoice Wise");

  const current = NAV.find((n) => n.key === active);

  return (
    <div className="min-h-screen bg-white text-slate-700">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-slate-100">
        <div className="text-3xl font-extrabold tracking-tight text-purple-700">
          muad
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-slate-500 text-sm font-semibold">
            SUPPORT ❓
          </div>

          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500"></div>
        </div>
      </header>

      {/* Main Navigation */}
      <nav className="px-6 pt-4 flex items-end gap-2 flex-wrap">
        <button
          onClick={() => {
            setActive("HOME");
            setActiveSub("");
          }}
          className={`w-12 h-12 rounded-md flex items-center justify-center transition ${
            active === "HOME"
              ? "bg-purple-50"
              : "bg-slate-50 hover:bg-purple-50"
          }`}
        >
          🏠
        </button>

        {NAV.filter((n) => n.key !== "HOME").map((n) => {
          const isActive = active === n.key;

          return (
            <button
              key={n.key}
              onClick={() => {
                setActive(n.key);
                setActiveSub(n.sub[0] || "");
              }}
              className={`px-5 h-12 text-xs font-bold tracking-wide rounded-md transition ${
                isActive
                  ? "bg-white text-slate-800 shadow-[0_-2px_0_0_#a855f7_inset,0_0_0_1px_#e2e8f0]"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              {n.label}
            </button>
          );
        })}
      </nav>

      {/* Sub Navigation */}
      {current && current.sub.length > 0 && (
        <div className="px-8 mt-3 flex items-center gap-6 flex-wrap border-b border-slate-100 pb-3">
          <button
            onClick={() => setActiveSub("")}
            className="text-xs font-semibold text-slate-700 hover:text-purple-600"
          >
            HOME
          </button>

          {current.sub.map((s) => (
            <button
              key={s}
              onClick={() => setActiveSub(s)}
              className={`text-xs font-medium transition ${
                activeSub === s
                  ? "text-purple-600"
                  : "text-slate-500 hover:text-purple-600"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <main className="px-8 py-6">
        {/* Breadcrumb */}
        <div className="text-sm mb-5">
          <span className="text-purple-600 font-semibold">
            {current?.label}
          </span>

          {activeSub && (
            <>
              <span className="text-slate-400 mx-2">|</span>
              <span className="text-slate-600">{activeSub}</span>
            </>
          )}
        </div>

        {/* Filter Section */}
        <div className="bg-slate-50 rounded-lg p-6 flex flex-wrap items-center gap-4">
          <select className="flex-1 min-w-[200px] h-11 px-3 rounded-md border border-slate-200 bg-white text-sm text-slate-500">
            <option>Select Shop</option>
          </select>

          <label className="flex items-center gap-2 flex-1 min-w-[220px]">
            <span className="text-xs font-semibold text-slate-500">
              FROM
            </span>

            <input
              type="date"
              className="flex-1 h-11 px-3 rounded-md border border-slate-200 bg-white text-sm"
            />
          </label>

          <label className="flex items-center gap-2 flex-1 min-w-[220px]">
            <span className="text-xs font-semibold text-slate-500">
              TO
            </span>

            <input
              type="date"
              className="flex-1 h-11 px-3 rounded-md border border-slate-200 bg-white text-sm"
            />
          </label>

          <button className="h-11 px-6 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-bold tracking-wide">
            VIEW REPORT
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-8 py-4 text-xs font-semibold text-purple-600">
        POWERED BY IT@MBRELLA
      </footer>
    </div>
  );
};

export default DashboardLayout;