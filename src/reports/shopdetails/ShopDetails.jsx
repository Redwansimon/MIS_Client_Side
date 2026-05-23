import React, { useEffect, useState } from 'react'
import { Loader } from '../../components/Loader';

export const ShopDetails = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("http://localhost:5000/api/shop")
            .then(res => res.json())
            .then(data => {setData(data) ; setLoading(false);})

        

    }, [])
    if (loading){
        return <Loader/>
    }
    console.log(data);

    return (

        <div className="p-6">

            {/* HEADER */}
            <div className="text-center mb-6">

                <h1 className="text-2xl font-bold tracking-wide text-[#206566]">
                    MBRELLA
                </h1>

                <p className="text-xs text-slate-500 mt-1">
                    HOUSE: 19, ROAD: 03, SECTOR: 03, UTTARA, DHAKA-1230, BANGLADESH
                </p>

                <h2 className="text-lg font-bold mt-3 text-slate-700 uppercase">
                    Shop List Report
                </h2>

            </div>

            {/* TABLE */}
            <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-slate-200">

               <table className="w-full text-xs">

    <thead className="bg-slate-100">

        <tr>
            <th
                colSpan={10}
                className="border border-slate-300 px-2 py-2 text-left"
            >
                SHOP NAME LIST
            </th>
        </tr>

        <tr>

            <th className="border border-slate-300 px-2 py-2 text-left">
                SL
            </th>

            <th className="border border-slate-300 px-2 py-2 text-left">
                CODE
            </th>

            <th className="border border-slate-300 px-2 py-2 text-left">
                STORE NAME
            </th>

            <th className="border border-slate-300 px-2 py-2 text-center">
                CITY
            </th>

            <th className="border border-slate-300 px-2 py-2 text-center">
                PHONE
            </th>

            <th className="border border-slate-300 px-2 py-2 text-left">
                EMAIL
            </th>

            <th className="border border-slate-300 px-2 py-2 text-center">
                STATUS
            </th>

            <th className="border border-slate-300 px-2 py-2 text-left">
                TYPE
            </th>

            <th className="border border-slate-300 px-2 py-2 text-left">
                VAT REG NO
            </th>

            <th className="border border-slate-300 px-2 py-2 text-left">
                ADDRESS
            </th>

        </tr>

    </thead>

    <tbody>

        {data.map((item, index) => (

            <tr
                key={item.STORE_CODE}
                className="hover:bg-slate-200"
            >

                <td className="border border-slate-300 px-4 py-2">
                    {index + 1}
                </td>

                <td className="border border-slate-300 px-4 py-2">
                    {item.STORE_CODE}
                </td>

                <td className="border border-slate-300 px-4 py-2">
                    {item.STORE_NAME}
                </td>

                <td className="border border-slate-300 px-4 py-2 text-center">
                    {item.CITY}
                </td>

                <td className="border border-slate-300 px-4 py-2 text-center">
                    {item.PHONE}
                </td>

                <td className="border border-slate-300 px-4 py-2 break-words">
                    {item.EMAIL}
                </td>

                <td className="border border-slate-300 px-4 py-2 text-center">

                    <span
                        className={
                            item.STATUS === "ACTIVE"
                                ? "text-green-600 font-medium"
                                : "text-red-600 font-medium"
                        }
                    >
                        {item.STATUS === "ACTIVE" ? "Open" : "Closed"}
                    </span>

                </td>

                <td className="border border-slate-300 px-4 py-2">
                    {item.STORETYPE}
                </td>

                <td className="border border-slate-300 px-4 py-2">
                    {item.VATREGNO}
                </td>

                <td className="border border-slate-300 px-4 py-2 break-words">
                    {item.ADDRESS1}
                </td>

            </tr>

        ))}

    </tbody>

</table>

            </div>

        </div>
    )
}