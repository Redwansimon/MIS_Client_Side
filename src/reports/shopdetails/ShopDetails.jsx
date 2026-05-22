import React, { useEffect, useState } from 'react'


export const ShopDetails = () => {

    const [data, setData] = useState([]);
    useEffect(() => {

        fetch("http://localhost:5000/api/shop")
            .then(res => res.json())
            .then(data => (setData(data)))

    }, [])
    console.log(data)



    return (
        <div className="overflow-x-auto mt-6">
            <table>
                <thead>
                    <tr>
                        <th className="border border-slate-300 px-2 py-2 text-left">STORE_CODE</th>
                        <th className="border border-slate-300 px-2 py-2 text-left">STORE_NAME</th>
                        <th className="border border-slate-300 px-2 py-2 text-left">CITY</th>

                        <th className="border border-slate-300 px-2 py-2 text-left">PHONE</th>
                        <th className="border border-slate-300 px-2 py-2 text-left">EMAIL</th>
                        <th className="border border-slate-300 px-2 py-2 text-left">STATUS</th>
                        <th className="border border-slate-300 px-2 py-2 text-left">STORETYPE</th>
                        <th className="border border-slate-300 px-2 py-2 text-left">VATREGNO</th>
                        <th className="border border-slate-300 px-2 py-2 text-left">ADDRESS1</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map(item=>(
                        <tr>
                            <td>{item.STORE_CODE}</td>
                            <td>{item.STORE_NAME}</td>
                            <td>{item.CITY}</td>
                            <td>{item.PHONE}</td>
                            <td>{item.EMAIL}</td>
                            <td>{item.STATUS}</td>
                            <td>{item.STORETYPE}</td>
                            <td>{item.VATREGNO}</td>
                            <td>{item.ADDRESS1}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>



        </div>
    )
}
