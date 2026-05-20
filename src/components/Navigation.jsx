

import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {

    // ACTIVE MAIN MENU
    const [openMenu, setOpenMenu] = useState("");

    // ACTIVE SUB MENU
    const [openSubMenu, setOpenSubMenu] = useState("");

    // ACTIVE CHILD MENU
    const [openChildMenu, setOpenChildMenu] = useState("");
    const navRef = useRef(null);
    useEffect(() => {
    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setOpenMenu("");
            setOpenSubMenu("");
            setOpenChildMenu("");
        }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);


    return (
        <div
            className=" hover:bg-purple-50"
            onClick={() => {
                setOpenMenu("");
                setOpenSubMenu("");
                setOpenChildMenu("");
            }}
        >

            {/* TOP NAVIGATION */}
            <nav ref={navRef}
                className="bg-white border-b"
                onClick={(e) => e.stopPropagation()}
            >

                <ul className="flex flex-wrap gap-2">

                    {/* HOME */}
                    <li className="border-r rounded-md shadow-md shadow-purple-200">

                        <NavLink to="/dashboard" className="h-14 px-5 flex items-center justify-center text-gray-800 hover:bg-slate-200 transition" >
                            🏠
                        </NavLink>

                    </li>

                    {/* STOCK REPORT */}
                    <li className="relative border-r shadow-md shadow-purple-100">

                        <button
                            onClick={() => {
                                setOpenMenu(
                                    openMenu === "stock"
                                        ? ""
                                        : "stock"
                                );

                                setOpenSubMenu("");
                                setOpenChildMenu("");
                            }}
                            className=" px-5 h-14 text-gray-800 font-semibold uppercase flex items-center gap-2 hover:bg-purple-50 transition">
                            Stock Report
                            <span
                                className={`text-[10px] transition-transform duration-300 ${openMenu === "stock"? "rotate-180": ""}`}
                            >
                                ▼
                            </span>
                        </button>

                        {/* DROPDOWN */}
                        {openMenu === "stock" && (

                            <div className="absolute top-full left-0 bg-white shadow-2xl shadow-purple-200 border rounded-md border-purple-100  min-w-[260px] z-50">

                                <NavLink to="/dashboard/stock/shop-wise" className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
 >
                                    Shop Wise
                                </NavLink>

                                <NavLink
                                    to="/stock/summary"
                                    className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
                                >
                                    Stock Summary
                                </NavLink>

                                {/* PRODUCT GROUP WISE */}
                                <div className="relative">

                                    <button
                                        onClick={() => {
                                            setOpenSubMenu(
                                                openSubMenu === "product-group"
                                                    ? ""
                                                    : "product-group"
                                            );

                                            setOpenChildMenu("");
                                        }}
                                        className="
                                            w-full px-5 py-3 border-b
                                            hover:hover:bg-purple-50 text-left
                                            flex items-center justify-between
                                            cursor-pointer
                                        "
                                    >
                                        Product Group Wise

                                        <span
                                            className={`
                                                transition-transform duration-300
                                                ${openSubMenu === "product-group"
                                                    ? "rotate-90"
                                                    : ""
                                                }
                                            `}
                                        >
                                            ▶
                                        </span>
                                    </button>

                                    {openSubMenu === "product-group" && (

                                        <div className="
                                            absolute top-0 left-full
                                            bg-white shadow-2xl
                                            border border-slate-200
                                            min-w-[220px]
                                        ">

                                            <NavLink
                                                to="/stock/product-group/regular"
                                                className="block w-full text-left px-5 py-3 hover:hover:bg-purple-50"
                                            >
                                                Regular
                                            </NavLink>

                                        </div>
                                    )}

                                </div>

                                {/* PRODUCT NAME WISE */}
                                <div className="relative">

                                    <button
                                        onClick={() => {
                                            setOpenSubMenu(
                                                openSubMenu === "product-name"
                                                    ? ""
                                                    : "product-name"
                                            );

                                            setOpenChildMenu("");
                                        }}
                                        className="
                                            w-full px-5 py-3 border-b
                                            hover:hover:bg-purple-50 text-left
                                            flex items-center justify-between
                                            cursor-pointer
                                        "
                                    >
                                        Product Name Wise

                                        <span
                                            className={`
                                                transition-transform duration-300
                                                ${openSubMenu === "product-name"
                                                    ? "rotate-90"
                                                    : ""
                                                }
                                            `}
                                        >
                                            ▶
                                        </span>
                                    </button>

                                    {openSubMenu === "product-name" && (

                                        <div className="
                                            absolute top-0 left-full
                                            bg-white shadow-2xl
                                            border border-slate-200
                                            min-w-[220px]
                                        ">

                                            <NavLink
                                                to="/stock/product-name/regular"
                                                className="block w-full text-left px-5 py-3 hover:hover:bg-purple-50"
                                            >
                                                Regular
                                            </NavLink>

                                        </div>
                                    )}

                                </div>

                                <NavLink
                                    to="/stock/style-wise"
                                    className="block w-full text-left px-5 py-3 border-b hover:hover:bg-purple-50"
                                >
                                    Style Wise
                                </NavLink>

                                {/* SUPPLIER WISE */}
                                <div className="relative">

                                    <button
                                        onClick={() => {
                                            setOpenSubMenu(
                                                openSubMenu === "supplier"
                                                    ? ""
                                                    : "supplier"
                                            );

                                            setOpenChildMenu("");
                                        }}
                                        className="
                                            w-full px-5 py-3 border-b
                                            hover:hover:bg-purple-50 text-left
                                            flex items-center justify-between
                                            cursor-pointer
                                        "
                                    >
                                        Supplier Wise

                                        <span
                                            className={`
                                                transition-transform duration-300
                                                ${openSubMenu === "supplier"
                                                    ? "rotate-90"
                                                    : ""
                                                }
                                            `}
                                        >
                                            ▶
                                        </span>
                                    </button>

                                    {openSubMenu === "supplier" && (

                                        <div className="
                                            absolute top-0 left-full
                                            bg-white shadow-2xl
                                            border border-slate-200
                                            min-w-[220px]
                                        ">

                                            <NavLink
                                                to="/stock/supplier/details"
                                                className="block w-full text-left px-5 py-3 border-b hover:hover:bg-purple-50"
                                            >
                                                Details
                                            </NavLink>

                                            <NavLink
                                                to="/stock/supplier/summary"
                                                className="block w-full text-left px-5 py-3 hover:hover:bg-purple-50"
                                            >
                                                Summary
                                            </NavLink>

                                        </div>
                                    )}

                                </div>

                                <NavLink
                                    to="/stock/size-breakdown"
                                    className="block w-full text-left px-5 py-3 border-b hover:hover:bg-purple-50"
                                >
                                    Size Breakdown
                                </NavLink>

                                {/* UNRELEASED REPORT */}
                                <div className="relative">

                                    <button
                                        onClick={() => {
                                            setOpenSubMenu(
                                                openSubMenu === "unreleased"
                                                    ? ""
                                                    : "unreleased"
                                            );

                                            setOpenChildMenu("");
                                        }}
                                        className="
                                            w-full px-5 py-3
                                            hover:hover:bg-purple-50 text-left
                                            flex items-center justify-between
                                            cursor-pointer
                                        "
                                    >
                                        Unreleased Report

                                        <span
                                            className={`
                                                transition-transform duration-300
                                                ${openSubMenu === "unreleased"
                                                    ? "rotate-90"
                                                    : ""
                                                }
                                            `}
                                        >
                                            ▶
                                        </span>
                                    </button>

                                    {openSubMenu === "unreleased" && (

                                        <div className="
                                            absolute top-0 left-full
                                            bg-white shadow-2xl
                                            border border-slate-200
                                            min-w-[240px]
                                        ">

                                            <NavLink
                                                to="/stock/unreleased"
                                                className="block w-full text-left px-5 py-3 border-b hover:hover:bg-purple-50"
                                            >
                                                Unreleased
                                            </NavLink>

                                            <NavLink
                                                to="/stock/production-pending"
                                                className="block w-full text-left px-5 py-3 hover:hover:bg-purple-50"
                                            >
                                                Production Pending
                                            </NavLink>

                                        </div>
                                    )}

                                </div>

                            </div>
                        )}

                    </li>

                    {/* RECEIVE REPORT */}
                    {/* RECEIVE REPORT */}
                    <li className="relative border-r shadow-md shadow-purple-100">

                        <button
                            onClick={() => {
                                setOpenMenu(
                                    openMenu === "receive"
                                        ? ""
                                        : "receive"
                                );

                                setOpenSubMenu("");
                                setOpenChildMenu("");
                            }}
                            className="
            px-5 h-14 text-gray-800 font-semibold uppercase
            flex items-center gap-2 hover:bg-purple-50 transition
        "
                        >
                            Receive Report

                            <span
                                className={`
                text-[10px]
                transition-transform duration-300
                ${openMenu === "receive"
                                        ? "rotate-180"
                                        : ""
                                    }
            `}
                            >
                                ▼
                            </span>
                        </button>

                        {/* DROPDOWN */}
                        {openMenu === "receive" && (

                            <div className="
            absolute top-full left-0
            bg-white shadow-2xl shadow-purple-200
            border rounded-md border-purple-100
            min-w-[260px] z-50
        ">

                                <NavLink
                                    to="/receive/month-wise"
                                    className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
                                >
                                    Month Wise
                                </NavLink>

                                <NavLink
                                    to="/receive/shop-wise"
                                    className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
                                >
                                    Shop Wise
                                </NavLink>

                                <NavLink
                                    to="/receive/challan-wise"
                                    className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
                                >
                                    Challan Wise
                                </NavLink>

                                {/* PRODUCT GROUP WISE */}
                                <div className="relative">

                                    <button
                                        onClick={() => {
                                            setOpenSubMenu(
                                                openSubMenu === "receive-product-group"
                                                    ? ""
                                                    : "receive-product-group"
                                            );

                                            setOpenChildMenu("");
                                        }}
                                        className="
                        w-full px-5 py-3 border-b
                        hover:bg-purple-50 text-left
                        flex items-center justify-between
                        cursor-pointer
                    "
                                    >
                                        Product Group Wise

                                        <span
                                            className={`
                            transition-transform duration-300
                            ${openSubMenu === "receive-product-group"
                                                    ? "rotate-90"
                                                    : ""
                                                }
                        `}
                                        >
                                            ▶
                                        </span>
                                    </button>

                                    {openSubMenu === "receive-product-group" && (

                                        <div className="
                        absolute top-0 left-full
                        bg-white shadow-2xl
                        border border-slate-200
                        min-w-[240px]
                    ">

                                            <NavLink
                                                to="/receive/product-group/regular"
                                                className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Regular
                                            </NavLink>

                                            {/* TYPE WISE */}
                                            <div className="relative">

                                                <button
                                                    onClick={() => {
                                                        setOpenChildMenu(
                                                            openChildMenu === "receive-product-group-type"
                                                                ? ""
                                                                : "receive-product-group-type"
                                                        );
                                                    }}
                                                    className="
                                    w-full px-5 py-3
                                    hover:bg-purple-50 text-left
                                    flex items-center justify-between
                                    cursor-pointer
                                "
                                                >
                                                    Type Wise

                                                    <span
                                                        className={`
                                        transition-transform duration-300
                                        ${openChildMenu === "receive-product-group-type"
                                                                ? "rotate-90"
                                                                : ""
                                                            }
                                    `}
                                                    >
                                                        ▶
                                                    </span>
                                                </button>

                                                {openChildMenu === "receive-product-group-type" && (

                                                    <div className="
                                    absolute top-0 left-full
                                    bg-white shadow-2xl
                                    border border-slate-200
                                    min-w-[220px]
                                ">

                                                        <NavLink
                                                            to="/receive/product-group/type-wise/year-wise"
                                                            className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
                                                        >
                                                            Year Wise
                                                        </NavLink>

                                                        <NavLink
                                                            to="/receive/product-group/type-wise/origin-wise"
                                                            className="block w-full text-left px-5 py-3 hover:bg-purple-50"
                                                        >
                                                            Origin Wise
                                                        </NavLink>

                                                    </div>
                                                )}

                                            </div>

                                        </div>
                                    )}

                                </div>

                                {/* PRODUCT NAME WISE */}
                                <div className="relative">

                                    <button
                                        onClick={() => {
                                            setOpenSubMenu(
                                                openSubMenu === "receive-product-name"
                                                    ? ""
                                                    : "receive-product-name"
                                            );

                                            setOpenChildMenu("");
                                        }}
                                        className="
                        w-full px-5 py-3 border-b
                        hover:bg-purple-50 text-left
                        flex items-center justify-between
                        cursor-pointer
                    "
                                    >
                                        Product Name Wise

                                        <span
                                            className={`
                            transition-transform duration-300
                            ${openSubMenu === "receive-product-name"
                                                    ? "rotate-90"
                                                    : ""
                                                }
                        `}
                                        >
                                            ▶
                                        </span>
                                    </button>

                                    {openSubMenu === "receive-product-name" && (

                                        <div className="
                        absolute top-0 left-full
                        bg-white shadow-2xl
                        border border-slate-200
                        min-w-[240px]
                    ">

                                            <NavLink
                                                to="/receive/product-name/regular"
                                                className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Regular
                                            </NavLink>

                                            {/* TYPE WISE */}
                                            <div className="relative">

                                                <button
                                                    onClick={() => {
                                                        setOpenChildMenu(
                                                            openChildMenu === "receive-product-name-type"
                                                                ? ""
                                                                : "receive-product-name-type"
                                                        );
                                                    }}
                                                    className="
                                    w-full px-5 py-3
                                    hover:bg-purple-50 text-left
                                    flex items-center justify-between
                                    cursor-pointer
                                "
                                                >
                                                    Type Wise

                                                    <span
                                                        className={`
                                        transition-transform duration-300
                                        ${openChildMenu === "receive-product-name-type"
                                                                ? "rotate-90"
                                                                : ""
                                                            }
                                    `}
                                                    >
                                                        ▶
                                                    </span>
                                                </button>

                                                {openChildMenu === "receive-product-name-type" && (

                                                    <div className="
                                    absolute top-0 left-full
                                    bg-white shadow-2xl
                                    border border-slate-200
                                    min-w-[220px]
                                ">

                                                        <NavLink
                                                            to="/receive/product-name/type-wise/year-wise"
                                                            className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
                                                        >
                                                            Year Wise
                                                        </NavLink>

                                                        <NavLink
                                                            to="/receive/product-name/type-wise/origin-wise"
                                                            className="block w-full text-left px-5 py-3 hover:bg-purple-50"
                                                        >
                                                            Origin Wise
                                                        </NavLink>

                                                    </div>
                                                )}

                                            </div>

                                        </div>
                                    )}

                                </div>

                                <NavLink
                                    to="/receive/style-wise"
                                    className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
                                >
                                    Style Wise
                                </NavLink>

                                <NavLink
                                    to="/receive/supplier-wise"
                                    className="block w-full text-left px-5 py-3 hover:bg-purple-50"
                                >
                                    Supplier Wise
                                </NavLink>

                            </div>
                        )}

                    </li>
                    {/* ISSUE REPORT */}
<li className="relative border-r shadow-md shadow-purple-100">

    <button
        onClick={() => {
            setOpenMenu(
                openMenu === "issue"
                    ? ""
                    : "issue"
            );

            setOpenSubMenu("");
            setOpenChildMenu("");
        }}
        className="
            px-5 h-14 text-gray-800 font-semibold uppercase
            flex items-center gap-2 hover:bg-purple-50 transition
        "
    >
        Issue Report

        <span
            className={`
                text-[10px]
                transition-transform duration-300
                ${openMenu === "issue"
                    ? "rotate-180"
                    : ""
                }
            `}
        >
            ▼
        </span>
    </button>

    {/* DROPDOWN */}
    {openMenu === "issue" && (

        <div className="
            absolute top-full left-0
            bg-white shadow-2xl shadow-purple-200
            border rounded-md border-purple-100
            min-w-[260px] z-50
        ">

            <NavLink
                to="/issue/month-wise"
                className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
            >
                Month Wise
            </NavLink>

            <NavLink
                to="/issue/shop-wise"
                className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
            >
                Shop Wise
            </NavLink>

            <NavLink
                to="/issue/delivery-challan-wise"
                className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
            >
                Delivery Challan Wise
            </NavLink>

            <NavLink
                to="/issue/product-group-wise"
                className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
            >
                Product Group Wise
            </NavLink>

            <NavLink
                to="/issue/product-name-wise"
                className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
            >
                Product Name Wise
            </NavLink>

            <NavLink
                to="/issue/style-wise"
                className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
            >
                Style Wise
            </NavLink>

            {/* DELIVERY COMPARISON */}
            <div className="relative">

                <button
                    onClick={() => {
                        setOpenSubMenu(
                            openSubMenu === "delivery-comparison"
                                ? ""
                                : "delivery-comparison"
                        );

                        setOpenChildMenu("");
                    }}
                    className="
                        w-full px-5 py-3
                        hover:bg-purple-50 text-left
                        flex items-center justify-between
                        cursor-pointer
                    "
                >
                    Delivery Comparison

                    <span
                        className={`
                            transition-transform duration-300
                            ${openSubMenu === "delivery-comparison"
                                ? "rotate-90"
                                : ""
                            }
                        `}
                    >
                        ▶
                    </span>
                </button>

                {openSubMenu === "delivery-comparison" && (

                    <div className="
                        absolute top-0 left-full
                        bg-white shadow-2xl
                        border border-slate-200
                        min-w-[220px]
                    ">

                        <NavLink
                            to="/issue/delivery-comparison/shop-wise"
                            className="block w-full text-left px-5 py-3 hover:bg-purple-50"
                        >
                            Shop Wise
                        </NavLink>

                    </div>
                )}

            </div>

        </div>
    )}

</li>
<li className="relative border-r shadow-md shadow-purple-100">
    <button
        onClick={() => {
            setOpenMenu(
                openMenu === "return"
                    ? ""
                    : "return"
            );

            setOpenSubMenu("");
            setOpenChildMenu("");
        }}
        className="
            px-5 h-14 text-gray-800 font-semibold uppercase
            flex items-center gap-2 hover:bg-purple-50 transition
        "
    >
        Return Report

        <span
            className={`text-[10px] transition-transform duration-300 ${
                openMenu === "return" ? "rotate-180" : ""
            }`}
        >
            ▼
        </span>
    </button>

    {/* DROPDOWN */}
    {openMenu === "return" && (
        <div
            className="
                absolute top-full left-0
                bg-white shadow-2xl shadow-purple-200
                border rounded-md border-purple-100
                min-w-[260px] z-50
            "
        >
            <NavLink
                to="/return/month-wise"
                className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
            >
                Month Wise
            </NavLink>

            <NavLink
                to="/return/challan-wise"
                className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
            >
                Challan Wise
            </NavLink>

            {/* PRODUCT NAME WISE */}
            <div className="relative">
                <button
                    onClick={() => {
                        setOpenSubMenu(
                            openSubMenu === "return-product-name"
                                ? ""
                                : "return-product-name"
                        );

                        setOpenChildMenu("");
                    }}
                    className="
                        w-full px-5 py-3 border-b
                        hover:bg-purple-50 text-left
                        flex items-center justify-between
                        cursor-pointer
                    "
                >
                    Product Name Wise

                    <span
                        className={`transition-transform duration-300 ${
                            openSubMenu === "return-product-name"
                                ? "rotate-90"
                                : ""
                        }`}
                    >
                        ▶
                    </span>
                </button>

                {openSubMenu === "return-product-name" && (
                    <div
                        className="
                            absolute top-0 left-full
                            bg-white shadow-2xl
                            border border-slate-200
                            min-w-[220px]
                        "
                    >
                        <NavLink
                            to="/return/product-name/regular"
                            className="block w-full text-left px-5 py-3 hover:bg-purple-50"
                        >
                            Regular
                        </NavLink>
                    </div>
                )}
            </div>

            <NavLink
                to="/return/style-wise"
                className="block w-full text-left px-5 py-3 hover:bg-purple-50"
            >
                Style Wise
            </NavLink>
        </div>
    )}
</li>

<li className="relative border-r shadow-md shadow-purple-100">
    <button
        onClick={() => {
            setOpenMenu(openMenu === "sale" ? "" : "sale");
            setOpenSubMenu("");
            setOpenChildMenu("");
        }}
        className="
            px-5 h-14 text-gray-800 font-semibold uppercase
            flex items-center gap-2 hover:bg-purple-50 transition
        "
    >
        Sale Report

        <span
            className={`text-[10px] transition-transform duration-300 ${
                openMenu === "sale" ? "rotate-180" : ""
            }`}
        >
            ▼
        </span>
    </button>

    {openMenu === "sale" && (
        <div
            className="absolute top-full left-0 bg-white shadow-2xl shadow-purple-200 border rounded-md border-purple-100 min-w-[280px] z-50">
            <NavLink to="/sale/home" className="block px-5 py-3 border-b hover:bg-purple-50">
                HOME
            </NavLink>

            {/* SHOP WISE */}
            <div className="relative">
                <button
                    onClick={() =>
                        setOpenSubMenu(
                            openSubMenu === "shop-wise"
                                ? ""
                                : "shop-wise"
                        )
                    }
                    className="
                        w-full px-5 py-3 border-b
                        hover:bg-purple-50 text-left
                        flex items-center justify-between
                    "
                >
                    Shop Wise

                    <span
                        className={`transition-transform duration-300 ${
                            openSubMenu === "shop-wise"
                                ? "rotate-90"
                                : ""
                        }`}
                    >
                        ▶
                    </span>
                </button>

                {openSubMenu === "shop-wise" && (
                    <div
                        className="
                            absolute top-0 left-full
                            bg-white shadow-2xl border
                            border-slate-200 min-w-[320px]
                        "
                    >
                        <NavLink
                            to="/sale/shop/date-month-wise"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Date & Month Wise
                        </NavLink>

                        <NavLink
                            to="/sale/shop/day-wise-cross-table"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Day Wise Cross Table
                        </NavLink>

                        <NavLink
                            to="/sale/shop/day-wise-cross-table-no-bag"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Day Wise Cross Table (Without Shopping Bag)
                        </NavLink>

                        <NavLink
                            to="/sale/shop/invoice-wise"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Invoice Wise
                        </NavLink>

                        <NavLink
                            to="/sale/shop/regular-report"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Regular Report
                        </NavLink>

                        <NavLink
                            to="/sale/shop/sale-summary"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Sale Summary
                        </NavLink>

                        <NavLink
                            to="/sale/shop/sale-summary-stock"
                            className="block px-5 py-3 hover:bg-purple-50"
                        >
                            Sale Summary With Stock (Without Shopping Bag)
                        </NavLink>
                    </div>
                )}
            </div>

            {/* PRODUCT GROUP WISE */}
            <div className="relative">
                <button
                    onClick={() =>
                        setOpenSubMenu(
                            openSubMenu === "product-group"
                                ? ""
                                : "product-group"
                        )
                    }
                    className="
                        w-full px-5 py-3 border-b
                        hover:bg-purple-50 text-left
                        flex items-center justify-between
                    "
                >
                    Product Group Wise

                    <span
                        className={`transition-transform duration-300 ${
                            openSubMenu === "product-group"
                                ? "rotate-90"
                                : ""
                        }`}
                    >
                        ▶
                    </span>
                </button>

                {openSubMenu === "product-group" && (
                    <div
                        className="
                            absolute top-0 left-full
                            bg-white shadow-2xl border
                            border-slate-200 min-w-[250px]
                        "
                    >
                        <NavLink
                            to="/sale/product-group/regular"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Regular
                        </NavLink>

                        <NavLink
                            to="/sale/product-group/multi-select"
                            className="block px-5 py-3 hover:bg-purple-50"
                        >
                            Regular(Multi Select)
                        </NavLink>
                    </div>
                )}
            </div>

            {/* PRODUCT NAME WISE */}
            <div className="relative">
                <button
                    onClick={() =>
                        setOpenSubMenu(
                            openSubMenu === "product-name"
                                ? ""
                                : "product-name"
                        )
                    }
                    className="
                        w-full px-5 py-3 border-b
                        hover:bg-purple-50 text-left
                        flex items-center justify-between
                    "
                >
                    Product Name Wise

                    <span
                        className={`transition-transform duration-300 ${
                            openSubMenu === "product-name"
                                ? "rotate-90"
                                : ""
                        }`}
                    >
                        ▶
                    </span>
                </button>

                {openSubMenu === "product-name" && (
                    <div
                        className="
                            absolute top-0 left-full
                            bg-white shadow-2xl border
                            border-slate-200 min-w-[250px]
                        "
                    >
                        <NavLink
                            to="/sale/product-name/style-wise"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Style Wise
                        </NavLink>

                        <NavLink
                            to="/sale/product-name/with-size"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            With Size
                        </NavLink>

                        <NavLink
                            to="/sale/product-name/without-size"
                            className="block px-5 py-3 hover:bg-purple-50"
                        >
                            Without Size
                        </NavLink>
                    </div>
                )}
            </div>

            <NavLink
                to="/sale/style-wise"
                className="block px-5 py-3 border-b hover:bg-purple-50"
            >
                Style Wise
            </NavLink>

            <NavLink
                to="/sale/daily-sales-report"
                className="block px-5 py-3 border-b hover:bg-purple-50"
            >
                Daily Sales Report
            </NavLink>

            {/* CIRCULAR WISE */}
            <div className="relative">
                <button
                    onClick={() =>
                        setOpenSubMenu(
                            openSubMenu === "circular-wise"
                                ? ""
                                : "circular-wise"
                        )
                    }
                    className="
                        w-full px-5 py-3 border-b
                        hover:bg-purple-50 text-left
                        flex items-center justify-between
                    "
                >
                    Circular Wise

                    <span
                        className={`transition-transform duration-300 ${
                            openSubMenu === "circular-wise"
                                ? "rotate-90"
                                : ""
                        }`}
                    >
                        ▶
                    </span>
                </button>

                {openSubMenu === "circular-wise" && (
                    <div
                        className="
                            absolute top-0 left-full
                            bg-white shadow-2xl border
                            border-slate-200 min-w-[250px]
                        "
                    >
                        <NavLink
                            to="/sale/circular/process-circular"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Process Circular
                        </NavLink>

                        <NavLink
                            to="/sale/circular/report"
                            className="block px-5 py-3 hover:bg-purple-50"
                        >
                            Circular Report
                        </NavLink>
                    </div>
                )}
            </div>

            {/* SALE THROUGH */}
            <div className="relative">
                <button
                    onClick={() =>
                        setOpenSubMenu(
                            openSubMenu === "sale-through"
                                ? ""
                                : "sale-through"
                        )
                    }
                    className="
                        w-full px-5 py-3 border-b
                        hover:bg-purple-50 text-left
                        flex items-center justify-between
                    "
                >
                    Sale Through

                    <span
                        className={`transition-transform duration-300 ${
                            openSubMenu === "sale-through"
                                ? "rotate-90"
                                : ""
                        }`}
                    >
                        ▶
                    </span>
                </button>

                {openSubMenu === "sale-through" && (
                    <div
                        className="
                            absolute top-0 left-full
                            bg-white shadow-2xl border
                            border-slate-200 min-w-[250px]
                        "
                    >
                        <NavLink
                            to="/sale/through/analysis"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Receive, Sale Analysis
                        </NavLink>

                        <NavLink
                            to="/sale/through/product-group"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Product Group Wise
                        </NavLink>

                        <NavLink
                            to="/sale/through/product-name"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Product Name Wise
                        </NavLink>

                        <NavLink
                            to="/sale/through/style-wise"
                            className="block px-5 py-3 hover:bg-purple-50"
                        >
                            Style Wise
                        </NavLink>
                    </div>
                )}
            </div>

            {/* DISCOUNT REPORT */}
            <div className="relative">
                <button
                    onClick={() =>
                        setOpenSubMenu(
                            openSubMenu === "discount-report"
                                ? ""
                                : "discount-report"
                        )
                    }
                    className="
                        w-full px-5 py-3 border-b
                        hover:bg-purple-50 text-left
                        flex items-center justify-between
                    "
                >
                    Discount Report

                    <span
                        className={`transition-transform duration-300 ${
                            openSubMenu === "discount-report"
                                ? "rotate-90"
                                : ""
                        }`}
                    >
                        ▶
                    </span>
                </button>

                {openSubMenu === "discount-report" && (
                    <div
                        className="
                            absolute top-0 left-full
                            bg-white shadow-2xl border
                            border-slate-200 min-w-[270px]
                        "
                    >
                        <NavLink
                            to="/sale/discount/wise-sale"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Discount Wise Sale
                        </NavLink>

                        <NavLink
                            to="/sale/discount/percentage-wise"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Discount(%) Wise Sale
                        </NavLink>

                        <NavLink
                            to="/sale/discount/customer"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Customer Discount
                        </NavLink>

                        <NavLink
                            to="/sale/discount/staff-special"
                            className="block px-5 py-3 hover:bg-purple-50"
                        >
                            Staff/Special Discount
                        </NavLink>
                    </div>
                )}
            </div>

            {/* COMMISSION REPORT */}
            <div className="relative">
                <button
                    onClick={() =>
                        setOpenSubMenu(
                            openSubMenu === "commission-report"
                                ? ""
                                : "commission-report"
                        )
                    }
                    className="
                        w-full px-5 py-3 border-b
                        hover:bg-purple-50 text-left
                        flex items-center justify-between
                    "
                >
                    Commission Report

                    <span
                        className={`transition-transform duration-300 ${
                            openSubMenu === "commission-report"
                                ? "rotate-90"
                                : ""
                        }`}
                    >
                        ▶
                    </span>
                </button>

                {openSubMenu === "commission-report" && (
                    <div
                        className="
                            absolute top-0 left-full
                            bg-white shadow-2xl border
                            border-slate-200 min-w-[300px]
                        "
                    >
                        <NavLink
                            to="/sale/commission/franchise"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Franchise Commission
                        </NavLink>

                        <NavLink
                            to="/sale/commission/supplier-rmg"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Supplier Comm(RMG Product)
                        </NavLink>

                        <NavLink
                            to="/sale/commission/supplier-non-rmg"
                            className="block px-5 py-3 hover:bg-purple-50"
                        >
                            Supplier Comm(Non RMG Product)
                        </NavLink>
                    </div>
                )}
            </div>

            {/* DESIGNER REPORT */}
            <div className="relative">
                <button
                    onClick={() =>
                        setOpenSubMenu(
                            openSubMenu === "designer-report"
                                ? ""
                                : "designer-report"
                        )
                    }
                    className="
                        w-full px-5 py-3 border-b
                        hover:bg-purple-50 text-left
                        flex items-center justify-between
                    "
                >
                    Designer Report

                    <span
                        className={`transition-transform duration-300 ${
                            openSubMenu === "designer-report"
                                ? "rotate-90"
                                : ""
                        }`}
                    >
                        ▶
                    </span>
                </button>

                {openSubMenu === "designer-report" && (
                    <div
                    className="absolute top-0 left-full bg-white shadow-2xl border border-slate-200 min-w-[300px]">

                        <NavLink to="/sale/designer/regular-report" className="block px-5 py-3 border-b hover:bg-purple-50">
                            Regular Report
                        </NavLink>

                        <NavLink
                            to="/sale/designer/performance"
                            className="block px-5 py-3 hover:bg-purple-50"
                        >
                            Designer Performance Report
                        </NavLink>
                    </div>
                )}
            </div>

            <NavLink
                to="/sale/salesmen-performance"
                className="block px-5 py-3 border-b hover:bg-purple-50"
            >
                Salesmen Performance
            </NavLink>

            <NavLink
                to="/sale/best-sale"
                className="block px-5 py-3 border-b hover:bg-purple-50"
            >
                Best Sale
            </NavLink>

            {/* GLOBAL REPORT */}
            <div className="relative">
                <button
                    onClick={() =>
                        setOpenSubMenu(
                            openSubMenu === "global-report"
                                ? ""
                                : "global-report"
                        )
                    }
                    className="
                        w-full px-5 py-3 border-b
                        hover:bg-purple-50 text-left
                        flex items-center justify-between
                    "
                >
                    Global Report

                    <span
                        className={`transition-transform duration-300 ${
                            openSubMenu === "global-report"
                                ? "rotate-90"
                                : ""
                        }`}
                    >
                        ▶
                    </span>
                </button>

                {openSubMenu === "global-report" && (
                    <div
                        className="
                            absolute top-0 left-full
                            bg-white shadow-2xl border
                            border-slate-200 min-w-[300px]
                        "
                    >
                        <NavLink
                            to="/sale/global/product-wise"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Product Wise
                        </NavLink>

                        <NavLink
                            to="/sale/global/performance-report"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Product Performance Report
                        </NavLink>

                        <NavLink
                            to="/sale/global/performance-report-2"
                            className="block px-5 py-3 hover:bg-purple-50"
                        >
                            Product Performance Report 2
                        </NavLink>
                    </div>
                )}
            </div>

            {/* SALE COMPARISON */}
            <div className="relative">
                <button
                    onClick={() =>
                        setOpenSubMenu(
                            openSubMenu === "sale-comparison"
                                ? ""
                                : "sale-comparison"
                        )
                    }
                    className="
                        w-full px-5 py-3
                        hover:bg-purple-50 text-left
                        flex items-center justify-between
                    "
                >
                    Sale Comparison

                    <span
                        className={`transition-transform duration-300 ${
                            openSubMenu === "sale-comparison"
                                ? "rotate-90"
                                : ""
                        }`}
                    >
                        ▶
                    </span>
                </button>

                {openSubMenu === "sale-comparison" && (
                    <div
                        className="
                            absolute top-0 left-full
                            bg-white shadow-2xl border
                            border-slate-200 min-w-[250px]
                        "
                    >
                        <NavLink
                            to="/sale/comparison/day-wise"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Day Wise
                        </NavLink>

                        <NavLink
                            to="/sale/comparison/month-wise"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Month Wise
                        </NavLink>

                        <NavLink
                            to="/sale/comparison/shop-wise"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Shop Wise
                        </NavLink>

                        <NavLink
                            to="/sale/comparison/group-wise"
                            className="block px-5 py-3 border-b hover:bg-purple-50"
                        >
                            Group Wise
                        </NavLink>

                        <NavLink
                            to="/sale/comparison/product-wise"
                            className="block px-5 py-3 hover:bg-purple-50"
                        >
                            Product Wise
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    )}
</li>

                </ul>

            </nav>

            

        </div>
    );
};

export default Navigation;