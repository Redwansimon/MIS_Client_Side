import React, { useState } from 'react'

export const Navi = () => {

    const [active, setactive] = useState('');
    const [activesub, setactivesub] = useState('');
    const NAV = [
        { key: "HOME", label: "HOME", sub: [] },


        {
            key: "STOCK",
            label: "STOCK REPORT",
            sub: [

                {
                    key: "SHOP_WISE",
                    label: "Shop Wise",
                    sub_sub: [],
                },

                {
                    key: "STOCK_SUMMARY",
                    label: "Stock Summary",
                    sub_sub: [],
                },

                {
                    key: "PRODUCT_GROUP_WISE",
                    label: "Product Group Wise",
                    sub_sub: [
                        {
                            key: "REGULAR",
                            label: "Regular",
                        },
                    ],
                },

                {
                    key: "PRODUCT_NAME_WISE",
                    label: "Product Name Wise",
                    sub_sub: [
                        {
                            key: "REGULAR",
                            label: "Regular",
                        },
                    ],
                },

                {
                    key: "STYLE_WISE",
                    label: "Style Wise",
                    sub_sub: [],
                },

                {
                    key: "SUPPLIER_WISE",
                    label: "Supplier Wise",
                    sub_sub: [
                        {
                            key: "DETAILS",
                            label: "Details",
                        },

                        {
                            key: "SUMMARY",
                            label: "Summary",
                        },
                    ],
                },

                {
                    key: "SIZE_BREAKDOWN",
                    label: "Size Breakdown",
                    sub_sub: [],
                },

                {
                    key: "UNRELEASED_REPORT",
                    label: "Unreleased Report",
                    sub_sub: [
                        {
                            key: "UNRELEASED",
                            label: "Unreleased",
                        },

                        {
                            key: "PRODUCTION_PENDING",
                            label: "Production Pending",
                        },
                    ],
                },
            ],
        },

        {
            key: "RECEIVE",
            label: "RECEIVE REPORT",
            sub: [
                {
                    key: "RECEIVE_MONTH_WISE",
                    label: "Month Wise",
                    sub_sub: [],
                },

                {
                    key: "RECEIVE_SHOP_WISE",
                    label: "Shop Wise",
                    sub_sub: [],
                },

                {
                    key: "RECEIVE_CHALLAN_WISE",
                    label: "Challan Wise",
                    sub_sub: [],
                },

                {
                    key: "RECEIVE_PRODUCT_GROUP_WISE",
                    label: "Product Group Wise",
                    sub_sub: [
                        {
                            key: "RECEIVE_PRODUCT_GROUP_REGULAR",
                            label: "Regular",
                        },

                        {
                            key: "RECEIVE_PRODUCT_GROUP_TYPE_WISE",
                            label: "Type Wise",
                        },
                    ],
                },

                {
                    key: "RECEIVE_PRODUCT_NAME_WISE",
                    label: "Product Name Wise",
                    sub_sub: [
                        {
                            key: "RECEIVE_PRODUCT_NAME_REGULAR",
                            label: "Regular",
                        },

                        {
                            key: "RECEIVE_PRODUCT_NAME_TYPE_WISE",
                            label: "Type Wise",
                        },
                    ],
                },

                {
                    key: "RECEIVE_STYLE_WISE",
                    label: "Style Wise",
                    sub_sub: [],
                },

                {
                    key: "RECEIVE_SUPPLIER_WISE",
                    label: "Supplier Wise",
                    sub_sub: [],
                },
            ],
        },];

         const current = NAV.find((n)=> n.key === active);
         
         console.log(current);


    return (
        <div>
            <nav className='flex gap-2'>
                <button className='ml-7 px-4 py-2 border-red-400 border-2 rounded-full hover:bg-slate-200 bg-slate-400'
                    onClick={() => setactive("Home")}>

                    Home
                </button>

                {NAV.filter((m) => m.label !== "HOME").map((n) => {
                    console.log(n.label);
                    return (
                        <button key={n.key} className='px-4 py-2  px-4 py-2 border-red-400 border-2 rounded-full hover:bg-slate-200 bg-slate-400'
                            onClick={() => {
                                setactive(n.key);
                                console.log(active);
                                
                            }}
                        >
                            {n.label}
                        </button>
                    )

                })}

            </nav>

            {current && current.sub.length > 0 &&(
               <div className="flex gap-3">

                <button>HOME</button>

                 {current.sub.map((m)=> (
                    <div className="relative">
                        <button onClick={()=>{
                            setactivesub(m.key);
                            console.log(activesub);
                        }}
                        className='px-4 py-2  px-4 py-2 border-red-400 border-2 rounded-full hover:bg-slate-200 bg-slate-400'
                        >{m.label}</button>

                        {m.key === activesub && m.sub_sub.length > 0 &&(
                            <div className="flex gap-3 rounded-md   absolute">
                                
                                {m.sub_sub.map((s)=>{
                                return<div className="bg-slate-400 rounded-md border-2 mx-2 ">
                                    <button>{s.label}</button>
                                </div>



                            })}
                            </div>
                        )}



                    </div>
                 ))}
               </div>
            )}
        </div>
    )
}
