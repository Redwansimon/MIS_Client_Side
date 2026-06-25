

import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Date from "./Time";
import Time from "./Time";
import { FiMenu, FiX } from "react-icons/fi";
export const Navigation = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [breadcrumb, setBreadcrumb] = useState("");

    // ACTIVE MAIN MENU
    const [openMenu, setOpenMenu] = useState("");

    // ACTIVE SUB MENU
    const [openSubMenu, setOpenSubMenu] = useState("");

    // ACTIVE CHILD MENU
    const [openChildMenu, setOpenChildMenu] = useState("");
    const navRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            console.log(navRef.current.contains(event.target))
            console.log(navRef.current);
            if (!navRef.current.contains(event.target)) {
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
        <div className=""

        >

            {/* TOP NAVIGATION */}
            <nav ref={navRef}
                className="bg-white border-b"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="lg:hidden flex items-center justify-between h-14 px-4">

                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="text-xl"
                    >
                        <FiMenu />
                    </button>



                </div>
                {/* --------------------------------desktop menu  */}
                <ul className="hidden lg:flex flex-wrap gap-2">

                    {/* HOME */}
                    <li className="border-r text-sm rounded-md shadow-md shadow-purple-200">

                        <NavLink to="/dashboard" className="h-14 px-5 flex items-center justify-center text-gray-800 hover:bg-slate-200 transition"
                            onClick={() => {
                                setOpenMenu("");
                                setOpenSubMenu("");
                                setOpenChildMenu("");
                            }}
                        >
                            🏠
                        </NavLink>

                    </li>

                    {/* STOCK REPORT */}
                    <li className="text-sm  relative border-r shadow-md shadow-purple-100">

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
                            className=" px-5 h-14 text-gray-800 font-semibold  uppercase flex items-center gap-2 hover:bg-purple-50 transition">
                            Stock Report
                            <span
                                className={`text-[10px]  transition-transform duration-300 ${openMenu === "stock" ? "rotate-180" : ""}`}
                            >
                                ▼
                            </span>
                        </button>

                        {/* DROPDOWN */}
                        {openMenu === "stock" && (

                            <div className="absolute top-full left-0 bg-white shadow-2xl shadow-purple-200 border rounded-md border-purple-100  min-w-[260px] z-50">

                                <NavLink to="/dashboard/stock/shop-wise" className="block w-full text-left  px-5 py-3 border-b hover:bg-purple-50"
                                    onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); setBreadcrumb("Stock Report > Shop Wise") }}
                                >
                                    Shop Wise
                                </NavLink>

                                <NavLink
                                    to="/stock/summary"
                                    className="block w-full  text-left px-5 py-3 border-b hover:bg-purple-50"
                                    onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
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
                                                onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/stock/product-group/regular"
                                                className=" block w-full text-left px-5 py-3 hover:hover:bg-purple-50"
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

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/stock/product-name/regular"
                                                className=" block w-full text-left px-5 py-3 hover:hover:bg-purple-50"
                                            >
                                                Regular
                                            </NavLink>

                                        </div>
                                    )}

                                </div>

                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                    to="/stock/style-wise"
                                    className=" block w-full text-left px-5 py-3 border-b hover:hover:bg-purple-50"
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

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/stock/supplier/details"
                                                className=" block w-full text-left px-5 py-3 border-b hover:hover:bg-purple-50"
                                            >
                                                Details
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/stock/supplier/summary"
                                                className=" block w-full text-left px-5 py-3 hover:hover:bg-purple-50"
                                            >
                                                Summary
                                            </NavLink>

                                        </div>
                                    )}

                                </div>

                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                    to="/stock/size-breakdown"
                                    className="  block w-full text-left px-5 py-3 border-b hover:hover:bg-purple-50"
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

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/stock/unreleased"
                                                className=" block w-full text-left px-5 py-3 border-b hover:hover:bg-purple-50"
                                            >
                                                Unreleased
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/stock/production-pending"
                                                className=" block w-full text-left px-5 py-3 hover:hover:bg-purple-50"
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
                    <li className="text-sm  relative border-r shadow-md shadow-purple-100">

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

                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                    to="/receive/month-wise"
                                    className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
                                >
                                    Month Wise
                                </NavLink>

                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                    to="/receive/shop-wise"
                                    className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
                                >
                                    Shop Wise
                                </NavLink>

                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
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

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
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

                                                        <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                            to="/receive/product-group/type-wise/year-wise"
                                                            className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
                                                        >
                                                            Year Wise
                                                        </NavLink>

                                                        <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
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

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
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

                                                        <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                            to="/receive/product-name/type-wise/year-wise"
                                                            className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
                                                        >
                                                            Year Wise
                                                        </NavLink>

                                                        <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
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

                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                    to="/receive/style-wise"
                                    className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
                                >
                                    Style Wise
                                </NavLink>

                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                    to="/receive/supplier-wise"
                                    className="block w-full text-left px-5 py-3 hover:bg-purple-50"
                                >
                                    Supplier Wise
                                </NavLink>

                            </div>
                        )}

                    </li>
                    {/* ISSUE REPORT */}
                    <li className="text-sm  relative border-r shadow-md shadow-purple-100">

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

                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                    to="/issue/month-wise"
                                    className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
                                >
                                    Month Wise
                                </NavLink>

                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                    to="/issue/shop-wise"
                                    className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
                                >
                                    Shop Wise
                                </NavLink>

                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                    to="/issue/delivery-challan-wise"
                                    className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
                                >
                                    Delivery Challan Wise
                                </NavLink>

                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                    to="/issue/product-group-wise"
                                    className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
                                >
                                    Product Group Wise
                                </NavLink>

                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                    to="/issue/product-name-wise"
                                    className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
                                >
                                    Product Name Wise
                                </NavLink>

                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
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

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
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


                    {/* Return Report  */}


                    <li className=" text-sm relative border-r shadow-md shadow-purple-100">
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
                                className={`text-[10px] transition-transform duration-300 ${openMenu === "return" ? "rotate-180" : ""
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
                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                    to="/return/month-wise"
                                    className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
                                >
                                    Month Wise
                                </NavLink>

                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
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
                                            className={`transition-transform duration-300 ${openSubMenu === "return-product-name"
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
                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/return/product-name/regular"
                                                className="block w-full text-left px-5 py-3 hover:bg-purple-50"
                                            >
                                                Regular
                                            </NavLink>
                                        </div>
                                    )}
                                </div>

                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                    to="/return/style-wise"
                                    className="block w-full text-left px-5 py-3 hover:bg-purple-50"
                                >
                                    Style Wise
                                </NavLink>
                            </div>
                        )}
                    </li>

                    {/* Sale Report */}

                    <li className="text-sm  relative border-r shadow-md shadow-purple-100">
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
                                className={`text-[10px] transition-transform duration-300 ${openMenu === "sale" ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </button>

                        {openMenu === "sale" && (
                            <div
                                className="absolute top-full left-0 bg-white shadow-2xl shadow-purple-200 border rounded-md border-purple-100 min-w-[280px] z-50">
                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                    to="/sale/home" className="block px-5 py-3 border-b hover:bg-purple-50">
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
                                            className={`transition-transform duration-300 ${openSubMenu === "shop-wise"
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
                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/shop/date-month-wise"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Date & Month Wise
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/shop/day-wise-cross-table"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Day Wise Cross Table
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/shop/day-wise-cross-table-no-bag"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Day Wise Cross Table (Without Shopping Bag)
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/shop/invoice-wise"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Invoice Wise
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/shop/regular-report"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Regular Report
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/shop/sale-summary"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Sale Summary
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
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
                                            className={`transition-transform duration-300 ${openSubMenu === "product-group"
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
                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}

                                                to="/sale/product-group/regular"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Regular
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}

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
                                            className={`transition-transform duration-300 ${openSubMenu === "product-name"
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
                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/product-name/style-wise"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Style Wise
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/product-name/with-size"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                With Size
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/product-name/without-size"
                                                className="block px-5 py-3 hover:bg-purple-50"
                                            >
                                                Without Size
                                            </NavLink>
                                        </div>
                                    )}
                                </div>

                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                    to="/sale/style-wise"
                                    className="block px-5 py-3 border-b hover:bg-purple-50"
                                >
                                    Style Wise
                                </NavLink>

                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
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
                                            className={`transition-transform duration-300 ${openSubMenu === "circular-wise"
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
                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/circular/process-circular"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Process Circular
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
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
                                            className={`transition-transform duration-300 ${openSubMenu === "sale-through"
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
                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/through/analysis"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Receive, Sale Analysis
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/through/product-group"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Product Group Wise
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/through/product-name"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Product Name Wise
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
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
                                            className={`transition-transform duration-300 ${openSubMenu === "discount-report"
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
                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/discount/wise-sale"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Discount Wise Sale
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/discount/percentage-wise"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Discount(%) Wise Sale
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/discount/customer"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Customer Discount
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
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
                                            className={`transition-transform duration-300 ${openSubMenu === "commission-report"
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
                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/commission/franchise"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Franchise Commission
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/commission/supplier-rmg"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Supplier Comm(RMG Product)
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
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
                                            className={`transition-transform duration-300 ${openSubMenu === "designer-report"
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

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/designer/regular-report" className="block px-5 py-3 border-b hover:bg-purple-50">
                                                Regular Report
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/designer/performance"
                                                className="block px-5 py-3 hover:bg-purple-50"
                                            >
                                                Designer Performance Report
                                            </NavLink>
                                        </div>
                                    )}
                                </div>

                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                    to="/sale/salesmen-performance"
                                    className="block px-5 py-3 border-b hover:bg-purple-50"
                                >
                                    Salesmen Performance
                                </NavLink>

                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
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
                                            className={`transition-transform duration-300 ${openSubMenu === "global-report"
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
                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/global/product-wise"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Product Wise
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/global/performance-report"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Product Performance Report
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
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
                                            className={`transition-transform duration-300 ${openSubMenu === "sale-comparison"
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
                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/comparison/day-wise"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Day Wise
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/comparison/month-wise"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Month Wise
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/comparison/shop-wise"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Shop Wise
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
                                                to="/sale/comparison/group-wise"
                                                className="block px-5 py-3 border-b hover:bg-purple-50"
                                            >
                                                Group Wise
                                            </NavLink>

                                            <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); }}
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

                    {/* Others */}

                    <li className="text-sm  relative border-r shadow-md shadow-purple-100">
                        <button
                            onClick={() => {
                                setOpenMenu(
                                    openMenu === "Others"
                                        ? ""
                                        : "Others"
                                );

                                setOpenSubMenu("");
                                setOpenChildMenu("");
                            }}
                            className="
            px-5 h-14 text-gray-800 font-semibold uppercase
            flex items-center gap-2 hover:bg-purple-50 transition
        "
                        >
                            Others

                            <span
                                className={`text-[10px] transition-transform duration-300 ${openMenu === "Others" ? "rotate-180" : ""
                                    }`}
                            >
                                ▼
                            </span>
                        </button>

                        {/* DROPDOWN */}
                        {openMenu === "Others" && (
                            <div
                                className="
                absolute top-full left-0
                bg-white shadow-2xl shadow-purple-200
                border rounded-md border-purple-100
                min-w-[260px] z-50
            "
                            >
                                <NavLink onClick={() => { setOpenMenu(""); setOpenSubMenu(""); setOpenChildMenu(""); setBreadcrumb("Others > Shop List") }}
                                    to="/dashboard/other/shoplist"
                                    className="block w-full text-left px-5 py-3 border-b hover:bg-purple-50"
                                >
                                    Shop List
                                </NavLink>


                            </div>
                        )}
                    </li>

                </ul>


                {/* Overlay */}
                {
                    mobileMenuOpen && (
                        <div
                            className="fixed inset-0 bg-black/40 z-40"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                    )
                }

                {/* Mobile Sidebar */}
                <div
                    className={` text-sm 
                lg:hidden fixed top-0 left-0 h-screen w-72
                bg-white shadow-2xl z-50
                transition-transform duration-700
                overflow-y-auto
                ${mobileMenuOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                        }
            `}
                >

                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">



                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-xl"
                        >
                            <FiX />
                        </button>

                    </div>

                    {/* ------------------------------ Menu */}
                    <ul className="flex flex-col">

                        {/* HOME */}
                        <li>

                            <NavLink
                                to="/dashboard"
                                className="block px-5 py-4 border-b hover:bg-purple-50"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    setOpenMenu("");
                                    setOpenSubMenu("");
                                    setOpenChildMenu("");
                                }}
                            >
                                🏠 Home
                            </NavLink>

                        </li>


                        {/* STOCK REPORT */}
                        <li>

                            <button
                                onClick={() => {
                                    setOpenMenu(
                                        openMenu === "stock-report"
                                            ? ""
                                            : "stock-report"
                                    );

                                    setOpenSubMenu("");
                                    setOpenChildMenu("");
                                }}
                                className="font-semibold w-full flex items-center justify-between px-5 py-4 border-b hover:bg-purple-50"
                            >
                                <span>Stock Report</span>

                                <span>
                                    {
                                        openMenu === "stock-report"
                                            ? "-"
                                            : "+"
                                    }
                                </span>

                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ${openMenu === "stock-report"
                                    ? "max-h-[2000px] opacity-100"
                                    : "max-h-0 opacity-0"
                                    }`}
                            >

                                <NavLink
                                    to="/dashboard/stock/shop-wise"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Shop Wise
                                </NavLink>

                                <NavLink
                                    to="/stock/summary"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Stock Summary
                                </NavLink>

                                {/* PRODUCT GROUP WISE */}
                                <button
                                    onClick={() =>
                                        setOpenSubMenu(
                                            openSubMenu === "product-group"
                                                ? ""
                                                : "product-group"
                                        )
                                    }
                                    className="w-full flex items-center justify-between px-10 py-3 border-b hover:bg-purple-100"
                                >
                                    <span>Product Group Wise</span>

                                    <span>
                                        {
                                            openSubMenu === "product-group"
                                                ? "-"
                                                : "+"
                                        }
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${openSubMenu === "product-group"
                                        ? "max-h-20 opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <NavLink
                                        to="/stock/product-group/regular"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Regular
                                    </NavLink>
                                </div>

                                {/* PRODUCT NAME WISE */}
                                <button
                                    onClick={() =>
                                        setOpenSubMenu(
                                            openSubMenu === "product-name"
                                                ? ""
                                                : "product-name"
                                        )
                                    }
                                    className="w-full flex items-center justify-between px-10 py-3 border-b hover:bg-purple-100"
                                >
                                    <span>Product Name Wise</span>

                                    <span>
                                        {
                                            openSubMenu === "product-name"
                                                ? "-"
                                                : "+"
                                        }
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${openSubMenu === "product-name"
                                        ? "max-h-20 opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <NavLink
                                        to="/stock/product-name/regular"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Regular
                                    </NavLink>
                                </div>

                                <NavLink
                                    to="/stock/style-wise"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Style Wise
                                </NavLink>

                                {/* SUPPLIER WISE */}
                                <button
                                    onClick={() =>
                                        setOpenSubMenu(
                                            openSubMenu === "supplier"
                                                ? ""
                                                : "supplier"
                                        )
                                    }
                                    className="w-full flex items-center justify-between px-10 py-3 border-b hover:bg-purple-100"
                                >
                                    <span>Supplier Wise</span>

                                    <span>
                                        {
                                            openSubMenu === "supplier"
                                                ? "-"
                                                : "+"
                                        }
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${openSubMenu === "supplier"
                                        ? "max-h-40 opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <NavLink
                                        to="/stock/supplier/details"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Details
                                    </NavLink>

                                    <NavLink
                                        to="/stock/supplier/summary"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Summary
                                    </NavLink>
                                </div>

                                <NavLink
                                    to="/stock/size-breakdown"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Size Breakdown
                                </NavLink>

                                {/* UNRELEASED REPORT */}
                                <button
                                    onClick={() =>
                                        setOpenSubMenu(
                                            openSubMenu === "unreleased"
                                                ? ""
                                                : "unreleased"
                                        )
                                    }
                                    className="w-full flex items-center justify-between px-10 py-3 border-b hover:bg-purple-100"
                                >
                                    <span>Unreleased Report</span>

                                    <span>
                                        {
                                            openSubMenu === "unreleased"
                                                ? "-"
                                                : "+"
                                        }
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${openSubMenu === "unreleased"
                                        ? "max-h-40 opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <NavLink
                                        to="/stock/unreleased"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Unreleased
                                    </NavLink>

                                    <NavLink
                                        to="/stock/production-pending"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Production Pending
                                    </NavLink>
                                </div>

                            </div>

                        </li>
                        {/* Receive Report */}
                        <li>

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
                                className="font-semibold w-full flex items-center justify-between px-5 py-4 border-b hover:bg-purple-50"
                            >
                                <span>Receive Report</span>

                                <span>
                                    {
                                        openMenu === "receive"
                                            ? "-"
                                            : "+"
                                    }
                                </span>

                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ${openMenu === "receive"
                                    ? "max-h-[2000px] opacity-100"
                                    : "max-h-0 opacity-0"
                                    }`}
                            >

                                <NavLink
                                    to="/receive/month-wise"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Month Wise
                                </NavLink>

                                <NavLink
                                    to="/receive/shop-wise"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Shop Wise
                                </NavLink>

                                <NavLink
                                    to="/receive/challan-wise"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Challan Wise
                                </NavLink>

                                {/* PRODUCT GROUP WISE */}
                                <button
                                    onClick={() =>
                                        setOpenSubMenu(
                                            openSubMenu === "receive-product-group"
                                                ? ""
                                                : "receive-product-group"
                                        )
                                    }
                                    className="w-full flex items-center justify-between px-10 py-3 border-b hover:bg-purple-100"
                                >
                                    <span>Product Group Wise</span>

                                    <span>
                                        {
                                            openSubMenu === "receive-product-group"
                                                ? "-"
                                                : "+"
                                        }
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${openSubMenu === "receive-product-group"
                                        ? "max-h-[500px] opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <NavLink
                                        to="/receive/product-group/regular"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Regular
                                    </NavLink>

                                    {/* TYPE WISE */}
                                    <button
                                        onClick={() =>
                                            setOpenChildMenu(
                                                openChildMenu === "receive-product-group-type"
                                                    ? ""
                                                    : "receive-product-group-type"
                                            )
                                        }
                                        className="w-full flex items-center justify-between px-16 py-3 border-b hover:bg-purple-100"
                                    >
                                        <span>Type Wise</span>

                                        <span>
                                            {
                                                openChildMenu === "receive-product-group-type"
                                                    ? "-"
                                                    : "+"
                                            }
                                        </span>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-500 ${openChildMenu === "receive-product-group-type"
                                            ? "max-h-40 opacity-100"
                                            : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <NavLink
                                            to="/receive/product-group/type-wise/year-wise"
                                            className="block px-20 py-3 border-b hover:bg-purple-100"
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                                setOpenMenu("");
                                                setOpenSubMenu("");
                                                setOpenChildMenu("");
                                            }}
                                        >
                                            Year Wise
                                        </NavLink>

                                        <NavLink
                                            to="/receive/product-group/type-wise/origin-wise"
                                            className="block px-20 py-3 border-b hover:bg-purple-100"
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                                setOpenMenu("");
                                                setOpenSubMenu("");
                                                setOpenChildMenu("");
                                            }}
                                        >
                                            Origin Wise
                                        </NavLink>
                                    </div>

                                </div>

                                {/* PRODUCT NAME WISE */}
                                <button
                                    onClick={() =>
                                        setOpenSubMenu(
                                            openSubMenu === "receive-product-name"
                                                ? ""
                                                : "receive-product-name"
                                        )
                                    }
                                    className="w-full flex items-center justify-between px-10 py-3 border-b hover:bg-purple-100"
                                >
                                    <span>Product Name Wise</span>

                                    <span>
                                        {
                                            openSubMenu === "receive-product-name"
                                                ? "-"
                                                : "+"
                                        }
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${openSubMenu === "receive-product-name"
                                        ? "max-h-[500px] opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <NavLink
                                        to="/receive/product-name/regular"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Regular
                                    </NavLink>

                                    {/* TYPE WISE */}
                                    <button
                                        onClick={() =>
                                            setOpenChildMenu(
                                                openChildMenu === "receive-product-name-type"
                                                    ? ""
                                                    : "receive-product-name-type"
                                            )
                                        }
                                        className="w-full flex items-center justify-between px-16 py-3 border-b hover:bg-purple-100"
                                    >
                                        <span>Type Wise</span>

                                        <span>
                                            {
                                                openChildMenu === "receive-product-name-type"
                                                    ? "-"
                                                    : "+"
                                            }
                                        </span>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-500 ${openChildMenu === "receive-product-name-type"
                                            ? "max-h-40 opacity-100"
                                            : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <NavLink
                                            to="/receive/product-name/type-wise/year-wise"
                                            className="block px-20 py-3 border-b hover:bg-purple-100"
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                                setOpenMenu("");
                                                setOpenSubMenu("");
                                                setOpenChildMenu("");
                                            }}
                                        >
                                            Year Wise
                                        </NavLink>

                                        <NavLink
                                            to="/receive/product-name/type-wise/origin-wise"
                                            className="block px-20 py-3 border-b hover:bg-purple-100"
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                                setOpenMenu("");
                                                setOpenSubMenu("");
                                                setOpenChildMenu("");
                                            }}
                                        >
                                            Origin Wise
                                        </NavLink>
                                    </div>

                                </div>

                                <NavLink
                                    to="/receive/style-wise"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Style Wise
                                </NavLink>

                                <NavLink
                                    to="/receive/supplier-wise"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Supplier Wise
                                </NavLink>

                            </div>

                        </li>
                        {/* ISSUE REPORT */}
                        <li>

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
                                className="font-semibold w-full flex items-center justify-between px-5 py-4 border-b hover:bg-purple-50"
                            >
                                <span>Issue Report</span>

                                <span>
                                    {
                                        openMenu === "issue"
                                            ? "-"
                                            : "+"
                                    }
                                </span>

                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ${openMenu === "issue"
                                    ? "max-h-[2000px] opacity-100"
                                    : "max-h-0 opacity-0"
                                    }`}
                            >

                                <NavLink
                                    to="/issue/month-wise"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Month Wise
                                </NavLink>

                                <NavLink
                                    to="/issue/shop-wise"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Shop Wise
                                </NavLink>

                                <NavLink
                                    to="/issue/delivery-challan-wise"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Delivery Challan Wise
                                </NavLink>

                                <NavLink
                                    to="/issue/product-group-wise"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Product Group Wise
                                </NavLink>

                                <NavLink
                                    to="/issue/product-name-wise"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Product Name Wise
                                </NavLink>

                                <NavLink
                                    to="/issue/style-wise"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Style Wise
                                </NavLink>

                                {/* DELIVERY COMPARISON */}
                                <button
                                    onClick={() =>
                                        setOpenSubMenu(
                                            openSubMenu === "delivery-comparison"
                                                ? ""
                                                : "delivery-comparison"
                                        )
                                    }
                                    className="w-full flex items-center justify-between px-10 py-3 border-b hover:bg-purple-100"
                                >
                                    <span>Delivery Comparison</span>

                                    <span>
                                        {
                                            openSubMenu === "delivery-comparison"
                                                ? "-"
                                                : "+"
                                        }
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${openSubMenu === "delivery-comparison"
                                        ? "max-h-20 opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <NavLink
                                        to="/issue/delivery-comparison/shop-wise"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Shop Wise
                                    </NavLink>
                                </div>

                            </div>

                        </li>
                        {/* Return Report  */}
                        <li>

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
                                className="font-semibold w-full flex items-center justify-between px-5 py-4 border-b hover:bg-purple-50"
                            >
                                <span>Return Report</span>

                                <span>
                                    {
                                        openMenu === "return"
                                            ? "-"
                                            : "+"
                                    }
                                </span>

                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ${openMenu === "return"
                                    ? "max-h-[2000px] opacity-100"
                                    : "max-h-0 opacity-0"
                                    }`}
                            >

                                <NavLink
                                    to="/return/month-wise"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Month Wise
                                </NavLink>

                                <NavLink
                                    to="/return/challan-wise"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Challan Wise
                                </NavLink>

                                {/* PRODUCT NAME WISE */}
                                <button
                                    onClick={() =>
                                        setOpenSubMenu(
                                            openSubMenu === "return-product-name"
                                                ? ""
                                                : "return-product-name"
                                        )
                                    }
                                    className="w-full flex items-center justify-between px-10 py-3 border-b hover:bg-purple-100"
                                >
                                    <span>Product Name Wise</span>

                                    <span>
                                        {
                                            openSubMenu === "return-product-name"
                                                ? "-"
                                                : "+"
                                        }
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${openSubMenu === "return-product-name"
                                        ? "max-h-20 opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <NavLink
                                        to="/return/product-name/regular"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Regular
                                    </NavLink>
                                </div>

                                <NavLink
                                    to="/return/style-wise"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Style Wise
                                </NavLink>

                            </div>

                        </li>
                        {/* Sale Report */}
                        <li>

                            <button
                                onClick={() => {
                                    setOpenMenu(openMenu === "sale" ? "" : "sale");
                                    setOpenSubMenu("");
                                    setOpenChildMenu("");
                                }}
                                className="font-semibold w-full flex items-center justify-between px-5 py-4 border-b hover:bg-purple-50"
                            >
                                <span>Sale Report</span>

                                <span>
                                    {
                                        openMenu === "sale"
                                            ? "-"
                                            : "+"
                                    }
                                </span>

                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ${openMenu === "sale"
                                    ? "max-h-[5000px] opacity-100"
                                    : "max-h-0 opacity-0"
                                    }`}
                            >

                                <NavLink
                                    to="/sale/home"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    HOME
                                </NavLink>

                                {/* SHOP WISE */}
                                <button
                                    onClick={() =>
                                        setOpenSubMenu(
                                            openSubMenu === "shop-wise"
                                                ? ""
                                                : "shop-wise"
                                        )
                                    }
                                    className="w-full flex items-center justify-between px-10 py-3 border-b hover:bg-purple-100"
                                >
                                    <span>Shop Wise</span>

                                    <span>
                                        {
                                            openSubMenu === "shop-wise"
                                                ? "-"
                                                : "+"
                                        }
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${openSubMenu === "shop-wise"
                                        ? "max-h-[500px] opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <NavLink
                                        to="/sale/shop/date-month-wise"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Date & Month Wise
                                    </NavLink>

                                    <NavLink
                                        to="/sale/shop/day-wise-cross-table"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Day Wise Cross Table
                                    </NavLink>

                                    <NavLink
                                        to="/sale/shop/day-wise-cross-table-no-bag"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Day Wise Cross Table (Without Shopping Bag)
                                    </NavLink>

                                    <NavLink
                                        to="/sale/shop/invoice-wise"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Invoice Wise
                                    </NavLink>

                                    <NavLink
                                        to="/sale/shop/regular-report"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Regular Report
                                    </NavLink>

                                    <NavLink
                                        to="/sale/shop/sale-summary"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Sale Summary
                                    </NavLink>

                                    <NavLink
                                        to="/sale/shop/sale-summary-stock"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Sale Summary With Stock (Without Shopping Bag)
                                    </NavLink>
                                </div>

                                {/* PRODUCT GROUP WISE */}
                                <button
                                    onClick={() =>
                                        setOpenSubMenu(
                                            openSubMenu === "product-group"
                                                ? ""
                                                : "product-group"
                                        )
                                    }
                                    className="w-full flex items-center justify-between px-10 py-3 border-b hover:bg-purple-100"
                                >
                                    <span>Product Group Wise</span>

                                    <span>
                                        {
                                            openSubMenu === "product-group"
                                                ? "-"
                                                : "+"
                                        }
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${openSubMenu === "product-group"
                                        ? "max-h-[200px] opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <NavLink
                                        to="/sale/product-group/regular"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Regular
                                    </NavLink>

                                    <NavLink
                                        to="/sale/product-group/multi-select"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Regular (Multi Select)
                                    </NavLink>
                                </div>

                                {/* PRODUCT NAME WISE */}
                                <button
                                    onClick={() =>
                                        setOpenSubMenu(
                                            openSubMenu === "product-name"
                                                ? ""
                                                : "product-name"
                                        )
                                    }
                                    className="w-full flex items-center justify-between px-10 py-3 border-b hover:bg-purple-100"
                                >
                                    <span>Product Name Wise</span>

                                    <span>
                                        {
                                            openSubMenu === "product-name"
                                                ? "-"
                                                : "+"
                                        }
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${openSubMenu === "product-name"
                                        ? "max-h-[200px] opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <NavLink
                                        to="/sale/product-name/style-wise"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Style Wise
                                    </NavLink>

                                    <NavLink
                                        to="/sale/product-name/with-size"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        With Size
                                    </NavLink>

                                    <NavLink
                                        to="/sale/product-name/without-size"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Without Size
                                    </NavLink>
                                </div>

                                <NavLink
                                    to="/sale/style-wise"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Style Wise
                                </NavLink>

                                <NavLink
                                    to="/sale/daily-sales-report"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Daily Sales Report
                                </NavLink>

                                {/* CIRCULAR WISE */}
                                <button
                                    onClick={() =>
                                        setOpenSubMenu(
                                            openSubMenu === "circular-wise"
                                                ? ""
                                                : "circular-wise"
                                        )
                                    }
                                    className="w-full flex items-center justify-between px-10 py-3 border-b hover:bg-purple-100"
                                >
                                    <span>Circular Wise</span>

                                    <span>
                                        {
                                            openSubMenu === "circular-wise"
                                                ? "-"
                                                : "+"
                                        }
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${openSubMenu === "circular-wise"
                                        ? "max-h-[200px] opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <NavLink
                                        to="/sale/circular/process-circular"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Process Circular
                                    </NavLink>

                                    <NavLink
                                        to="/sale/circular/report"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Circular Report
                                    </NavLink>
                                </div>

                                {/* SALE THROUGH */}
                                <button
                                    onClick={() =>
                                        setOpenSubMenu(
                                            openSubMenu === "sale-through"
                                                ? ""
                                                : "sale-through"
                                        )
                                    }
                                    className="w-full flex items-center justify-between px-10 py-3 border-b hover:bg-purple-100"
                                >
                                    <span>Sale Through</span>

                                    <span>
                                        {
                                            openSubMenu === "sale-through"
                                                ? "-"
                                                : "+"
                                        }
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${openSubMenu === "sale-through"
                                        ? "max-h-[300px] opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <NavLink
                                        to="/sale/through/analysis"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Receive, Sale Analysis
                                    </NavLink>

                                    <NavLink
                                        to="/sale/through/product-group"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Product Group Wise
                                    </NavLink>

                                    <NavLink
                                        to="/sale/through/product-name"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Product Name Wise
                                    </NavLink>

                                    <NavLink
                                        to="/sale/through/style-wise"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Style Wise
                                    </NavLink>
                                </div>

                                {/* DISCOUNT REPORT */}
                                <button
                                    onClick={() =>
                                        setOpenSubMenu(
                                            openSubMenu === "discount-report"
                                                ? ""
                                                : "discount-report"
                                        )
                                    }
                                    className="w-full flex items-center justify-between px-10 py-3 border-b hover:bg-purple-100"
                                >
                                    <span>Discount Report</span>

                                    <span>
                                        {
                                            openSubMenu === "discount-report"
                                                ? "-"
                                                : "+"
                                        }
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${openSubMenu === "discount-report"
                                        ? "max-h-[300px] opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <NavLink
                                        to="/sale/discount/wise-sale"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Discount Wise Sale
                                    </NavLink>

                                    <NavLink
                                        to="/sale/discount/percentage-wise"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Discount(%) Wise Sale
                                    </NavLink>

                                    <NavLink
                                        to="/sale/discount/customer"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Customer Discount
                                    </NavLink>

                                    <NavLink
                                        to="/sale/discount/staff-special"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Staff/Special Discount
                                    </NavLink>
                                </div>

                                {/* COMMISSION REPORT */}
                                <button
                                    onClick={() =>
                                        setOpenSubMenu(
                                            openSubMenu === "commission-report"
                                                ? ""
                                                : "commission-report"
                                        )
                                    }
                                    className="w-full flex items-center justify-between px-10 py-3 border-b hover:bg-purple-100"
                                >
                                    <span>Commission Report</span>

                                    <span>
                                        {
                                            openSubMenu === "commission-report"
                                                ? "-"
                                                : "+"
                                        }
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${openSubMenu === "commission-report"
                                        ? "max-h-[300px] opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <NavLink
                                        to="/sale/commission/franchise"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Franchise Commission
                                    </NavLink>

                                    <NavLink
                                        to="/sale/commission/supplier-rmg"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Supplier Comm (RMG Product)
                                    </NavLink>

                                    <NavLink
                                        to="/sale/commission/supplier-non-rmg"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Supplier Comm (Non RMG Product)
                                    </NavLink>
                                </div>

                                {/* DESIGNER REPORT */}
                                <button
                                    onClick={() =>
                                        setOpenSubMenu(
                                            openSubMenu === "designer-report"
                                                ? ""
                                                : "designer-report"
                                        )
                                    }
                                    className="w-full flex items-center justify-between px-10 py-3 border-b hover:bg-purple-100"
                                >
                                    <span>Designer Report</span>

                                    <span>
                                        {
                                            openSubMenu === "designer-report"
                                                ? "-"
                                                : "+"
                                        }
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${openSubMenu === "designer-report"
                                        ? "max-h-[200px] opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <NavLink
                                        to="/sale/designer/regular-report"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Regular Report
                                    </NavLink>

                                    <NavLink
                                        to="/sale/designer/performance"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Designer Performance Report
                                    </NavLink>
                                </div>

                                <NavLink
                                    to="/sale/salesmen-performance"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Salesmen Performance
                                </NavLink>

                                <NavLink
                                    to="/sale/best-sale"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                    }}
                                >
                                    Best Sale
                                </NavLink>

                                {/* GLOBAL REPORT */}
                                <button
                                    onClick={() =>
                                        setOpenSubMenu(
                                            openSubMenu === "global-report"
                                                ? ""
                                                : "global-report"
                                        )
                                    }
                                    className="w-full flex items-center justify-between px-10 py-3 border-b hover:bg-purple-100"
                                >
                                    <span>Global Report</span>

                                    <span>
                                        {
                                            openSubMenu === "global-report"
                                                ? "-"
                                                : "+"
                                        }
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${openSubMenu === "global-report"
                                        ? "max-h-[300px] opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <NavLink
                                        to="/sale/global/product-wise"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Product Wise
                                    </NavLink>

                                    <NavLink
                                        to="/sale/global/performance-report"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Product Performance Report
                                    </NavLink>

                                    <NavLink
                                        to="/sale/global/performance-report-2"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Product Performance Report 2
                                    </NavLink>
                                </div>

                                {/* SALE COMPARISON */}
                                <button
                                    onClick={() =>
                                        setOpenSubMenu(
                                            openSubMenu === "sale-comparison"
                                                ? ""
                                                : "sale-comparison"
                                        )
                                    }
                                    className="w-full flex items-center justify-between px-10 py-3 border-b hover:bg-purple-100"
                                >
                                    <span>Sale Comparison</span>

                                    <span>
                                        {
                                            openSubMenu === "sale-comparison"
                                                ? "-"
                                                : "+"
                                        }
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ${openSubMenu === "sale-comparison"
                                        ? "max-h-[300px] opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <NavLink
                                        to="/sale/comparison/day-wise"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Day Wise
                                    </NavLink>

                                    <NavLink
                                        to="/sale/comparison/month-wise"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Month Wise
                                    </NavLink>

                                    <NavLink
                                        to="/sale/comparison/shop-wise"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Shop Wise
                                    </NavLink>

                                    <NavLink
                                        to="/sale/comparison/group-wise"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Group Wise
                                    </NavLink>

                                    <NavLink
                                        to="/sale/comparison/product-wise"
                                        className="block px-16 py-3 border-b hover:bg-purple-100"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            setOpenMenu("");
                                            setOpenSubMenu("");
                                            setOpenChildMenu("");
                                        }}
                                    >
                                        Product Wise
                                    </NavLink>
                                </div>

                            </div>

                        </li>
                        {/* Others */}
                        <li>

                            <button
                                onClick={() => {
                                    setOpenMenu(
                                        openMenu === "Others"
                                            ? ""
                                            : "Others"
                                    );

                                    setOpenSubMenu("");
                                    setOpenChildMenu("");
                                }}
                                className="font-semibold w-full flex items-center justify-between px-5 py-4 border-b hover:bg-purple-50"
                            >
                                <span>Others</span>

                                <span>
                                    {
                                        openMenu === "Others"
                                            ? "-"
                                            : "+"
                                    }
                                </span>

                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ${openMenu === "Others"
                                        ? "max-h-[500px] opacity-100"
                                        : "max-h-0 opacity-0"
                                    }`}
                            >

                                <NavLink
                                    to="/dashboard/other/shoplist"
                                    className="block px-10 py-3 border-b hover:bg-purple-100"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        setOpenMenu("");
                                        setOpenSubMenu("");
                                        setOpenChildMenu("");
                                        setBreadcrumb("Others > Shop List");
                                    }}
                                >
                                    Shop List
                                </NavLink>

                            </div>

                        </li>

                    </ul>

                </div>

            </nav>

            <div className="mt-2 flex justify-between text-sm  items-center px-5 ">
                {breadcrumb ? (
                    <div className="   font-normal   text-[#196061]">
                        {breadcrumb}

                    </div>) : (<div />)
                }
                <Time></Time>
            </div>



        </div>
    );
};

export default Navigation;