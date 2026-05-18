import React from 'react'
import { useState } from 'react';

const NAV = [
    { key: "HOME", label: "HOME", sub: [] },

    // {
    //     key: "STOCK",
    //     label: "STOCK REPORT",
    //     sub: [

    //         "Shop Wise",
    //         "Stock Summary",
    //         "Product Group Wise",
    //         "Product Name Wise",
    //         "Style Wise",
    //         "Supplier Wise",
    //         "Size Breakdown",
    //         "Unreleased Report"
    //     ],
    //     Sub_sub: [],
    // },

    //  {
    //     key: "STOCK",
    //     label: "STOCK REPORT",
    //     sub: [

    //         {
    //             key: "SHOP_WISE",
    //             label: "Shop Wise",
    //             sub_sub: [],
    //         },

    //         {
    //             key: "STOCK_SUMMARY",
    //             label: "Stock Summary",
    //             sub_sub: [],
    //         },

    //         {
    //             key: "PRODUCT_GROUP_WISE",
    //             label: "Product Group Wise",
    //             sub_sub: [
    //                 {
    //                     key: "REGULAR",
    //                     label: "Regular",
    //                 },
    //             ],
    //         },

    //         {
    //             key: "PRODUCT_NAME_WISE",
    //             label: "Product Name Wise",
    //             sub_sub: [
    //                 {
    //                     key: "REGULAR",
    //                     label: "Regular",
    //                 },
    //             ],
    //         },

    //         {
    //             key: "STYLE_WISE",
    //             label: "Style Wise",
    //             sub_sub: [],
    //         },

    //         {
    //             key: "SUPPLIER_WISE",
    //             label: "Supplier Wise",
    //             sub_sub: [
    //                 {
    //                     key: "DETAILS",
    //                     label: "Details",
    //                 },

    //                 {
    //                     key: "SUMMARY",
    //                     label: "Summary",
    //                 },
    //             ],
    //         },

    //         {
    //             key: "SIZE_BREAKDOWN",
    //             label: "Size Breakdown",
    //             sub_sub: [],
    //         },

    //         {
    //             key: "UNRELEASED_REPORT",
    //             label: "Unreleased Report",
    //             sub_sub: [
    //                 {
    //                     key: "UNRELEASED",
    //                     label: "Unreleased",
    //                 },

    //                 {
    //                     key: "PRODUCTION_PENDING",
    //                     label: "Production Pending",
    //                 },
    //             ],
    //         },
    //     ],
    // },
    {
        key: "RECEIVE",
        label: "RECEIVE REPORT",
        sub: [
            "Month Wise",
            "Date Wise(CLOUD)",
            "Shop Wise",
            "Challan Wise",
            "Product Group Wise",
            "Product Name Wise",
            "Style Wise",
            "Supplier Wise",
        ],
    },

    {
        key: "ISSUE",
        label: "ISSUE REPORT",
        sub: [
            " Month Wise",
            "Date Wise(CLOUD)",
            "Shop Wise",
            "Delivery Challan Wise",
            "Product Group Wise",
            "Product Name Wise",
            "Style Wise",
        ],
    },

    {
        key: "RETURN",
        label: "RETURN REPORT",
        sub: [
            "Month Wise",
            "Date Wise(CLOUD)",
            "Challan Wise",
            "Product Name Wise",
            "Style Wise",
        ],
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
        sub: ["Receive/Issue"],
    },

    {
        key: "BARCODE",
        label: "BARCODE",
        sub: ["Hand Sanitizer", "With Price", "Without Price"],
    },

    {
        key: "OTHERS",
        label: "OTHERS",
        sub: ["Shop",
            "Franchise Payment",
            "Sale Table Checking",
            "Customer",
            "Transfer Status",
            "Reconcilation Report",
            "Combine Report",
            "Product Picture",
            "Foundation",],
    },

    {
        key: "SETTINGS",
        label: "SETTINGS",
        sub: [
            "Discount",
            "Origin Setting	",
            "Occasion Setting",
            "Receiving Update",
            "User Access",
        ],
    },
];

export const Navigation = () => {

    const [active, setActive] = useState("");
    const [activeSub, setActiveSub] = useState("");
    const current = NAV.find((n) => n.key === active);
    console.log(current);
    return (
        <div>

            {/* Main Navigation */}
            <nav className="px-6 pt-4 flex items-end gap-2 flex-wrap">
                <button
                    onClick={() => {
                        setActive("HOME");
                        setActiveSub("");
                    }}
                    className={`w-12 h-12 rounded-md flex items-center justify-center transition ${active === "HOME"
                        ? "bg-purple-50"
                        : "bg-slate-50 hover:bg-purple-50"
                        }`}
                >
                    🏠
                </button>

                {NAV.filter((n) => n.key !== "HOME").map((n) => {
                    const isActive = active === n.key;
                    console.log(n.label)

                    return (
                        <button
                            key={n.key}
                            onClick={() => {
                                setActive(n.key);
                                setActiveSub("");
                            }}
                            className={`px-5 h-12 text-xs font-bold tracking-wide rounded-md transition ${isActive
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
            {/* {current && current.sub.length > 0 && (
                <div className=" px-8 mt-3 flex items-center gap-6 flex-wrap border-b border-slate-100 pb-3">
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
                            className={`text-xs font-medium transition ${activeSub === s
                                ? "text-purple-600"
                                : "text-slate-500 hover:text-purple-600"
                                }`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            )} */}


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

                        <div key={s.key} className="relative">

                            <button
                                onClick={() => { setActiveSub(s.key); console.log(s.label) }}
                                className={`text-xs font-medium transition ${activeSub === s.key
                                        ? "text-purple-600"
                                        : "text-slate-500 hover:text-purple-600"
                                    }`}
                            >
                                {s.label}
                            </button>

                            {/* Sub Sub Navigation */}
                            {activeSub === s.key &&
                                s.sub_sub.length > 0 && (
                                    <div className="absolute top-7 left-0 bg-white border border-slate-200 rounded-md shadow-lg min-w-[180px] z-50">

                                        {s.sub_sub.map((sub) => (
                                            <button
                                                key={sub.key}
                                                className="block w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-100"
                                            >
                                                {sub.label}
                                            </button>
                                        ))}

                                    </div>
                                )}

                        </div>
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


        </div>
    )
}
